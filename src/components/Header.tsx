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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gradient-to-r from-orange-400/85 via-orange-300/85 to-primary/85 backdrop-blur-xl shadow-lg py-2 sm:py-3 border-b border-white/10"
          : "bg-gradient-to-r from-orange-400/90 via-orange-300/90 to-primary/90 backdrop-blur-md py-3 sm:py-4 md:py-5"
      } ${isPageTransition ? 'opacity-0 translate-y-[-10px]' : 'opacity-100 translate-y-0'}`}
    >
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      <div className="container-custom mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-1.5 sm:gap-2 group z-10 -ml-2 sm:-ml-4 md:-ml-8"
          >
            <img
              src="/logo-removebg-preview.png"
              alt="Netcross Farms Logo"
              className="h-10 sm:h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
              loading="eager"
            />
            <span className="font-bold text-lg sm:text-2xl md:text-3xl text-white">
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
                  className={`relative px-4 md:px-5 py-2.5 md:py-3 rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden ${
                    isActive
                      ? "text-white bg-white/30 shadow-xl backdrop-blur-md scale-105 border-2 border-white/40"
                      : "text-white/95 border-2 border-transparent"
                  }`}
                >
                  {/* Active gradient glow */}
                  {isActive && (
                    <>
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-orange-400/30 to-primary/30 blur-md -z-10" />
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-white/10 -z-10" />
                    </>
                  )}
                  <span className="relative z-10 font-bold tracking-wide">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
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
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-3 bg-white rounded-2xl shadow-2xl border border-primary/10 overflow-hidden animate-fade-in">
            <nav className="flex flex-col p-2">
              {navLinks.map((link) => {
                const isActive = activePath === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? "text-white bg-gradient-to-r from-orange-400 to-primary"
                        : "text-foreground hover:bg-primary/5 hover:text-primary"
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