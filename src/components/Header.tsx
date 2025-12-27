import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo-removebg-preview.png";

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
          ? "bg-background/50 backdrop-blur-md shadow-medium py-3"
          : "bg-transparent py-5"
      } ${isPageTransition ? 'opacity-0 translate-y-[-10px]' : 'opacity-100 translate-y-0'}`}
    >
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <img
              src={logoImage}
              alt="Netcross Farms Logo"
              className="h-10 w-auto object-contain"
              loading="eager"
            />
            <span className={`font-bold text-xl transition-colors ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
              Netcross <span className="text-primary">Agro</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activePath === link.path;
              return (
                <Link
                key={link.name}
                  to={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-primary/10 ${
                    isActive
                    ? "text-primary bg-primary/10"
                    : isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-primary-foreground/90 hover:text-primary-foreground"
                }`}
              >
                {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 p-4 bg-background rounded-2xl shadow-large animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activePath === link.path;
                return (
                  <Link
                  key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:bg-muted hover:text-primary"
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