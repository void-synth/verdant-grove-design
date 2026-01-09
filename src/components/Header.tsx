import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/", path: "/" },
  { name: "About Us", href: "/about", path: "/about" },
  { name: "Services", href: "/services", path: "/services" },
  { name: "Products", href: "/products", path: "/products" },
  { name: "Contact", href: "/contact", path: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPageTransition, setIsPageTransition] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Page transition effect on route change
  useEffect(() => {
    setIsPageTransition(true);
    const timer = setTimeout(() => {
      setIsPageTransition(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const getActivePath = () => {
    return location.pathname;
  };

  const activePath = getActivePath();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-orange-500/90 backdrop-blur-md shadow-medium py-3"
          : "bg-orange-500/95 backdrop-blur-sm py-5"
      } ${isPageTransition ? 'opacity-0 translate-y-[-10px]' : 'opacity-100 translate-y-0'}`}
    >
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group z-10"
          >
            <img
              src="/logo-removebg-preview.png"
              alt="Netcross Farms Logo"
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
              loading="eager"
            />
            <span className="font-bold text-xl text-white">
              Netcross <span className="text-white">Farms</span>
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center gap-2 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = activePath === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-orange-600 bg-white/20 shadow-sm font-semibold"
                      : isScrolled
                      ? "text-white hover:text-orange-50 hover:bg-white/10"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button - Right aligned */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 p-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-large border border-orange-200 animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activePath === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-orange-600 bg-orange-50 shadow-sm font-semibold"
                        : "text-foreground hover:bg-orange-50 hover:text-orange-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};