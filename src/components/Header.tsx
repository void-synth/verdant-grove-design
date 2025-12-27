import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo-removebg-preview.png";

const navLinks = [
  { name: "Home", href: "#home", sectionId: "home" },
  { name: "About Us", href: "#about", sectionId: "about" },
  { name: "Services", href: "#services", sectionId: "services" },
  { name: "Products", href: "#products", sectionId: "products" },
  { name: "Contact", href: "#contact", sectionId: "contact" },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Use IntersectionObserver for better section detection
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -50% 0px', // Trigger when section is near top (accounting for header)
      threshold: 0.1,
    };

    const observerCallback = (entries: Array<IntersectionObserverEntry>) => {
      // Find the entry with the highest intersection ratio
      const visibleSections = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => {
          // Prefer sections that are more visible
          const aRatio = a.intersectionRatio;
          const bRatio = b.intersectionRatio;
          if (Math.abs(aRatio - bRatio) > 0.1) {
            return bRatio - aRatio;
          }
          // If ratios are similar, prefer the one closer to top
          return a.boundingClientRect.top - b.boundingClientRect.top;
        });

      if (visibleSections.length > 0) {
        const sectionId = visibleSections[0].target.id;
        if (navLinks.some(link => link.sectionId === sectionId)) {
          setActiveSection(sectionId);
          // Update URL hash without scrolling
          if (window.location.hash !== `#${sectionId}`) {
            window.history.replaceState(null, '', `#${sectionId}`);
          }
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    navLinks.forEach(link => {
      const element = document.getElementById(link.sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Handle hash changes (e.g., direct navigation or browser back/forward)
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash && navLinks.some(link => link.sectionId === hash)) {
        setActiveSection(hash);
      }
    };

    // Set initial section from hash or scroll position
    const setInitialSection = () => {
      const hash = window.location.hash.slice(1);
      if (hash && navLinks.some(link => link.sectionId === hash)) {
        setActiveSection(hash);
        return;
      }

      // Check scroll position
      const scrollPosition = window.scrollY;
      if (scrollPosition < 100) {
        setActiveSection("home");
        return;
      }

      // Find the section closest to the top
      const sections = navLinks.map(link => {
        const element = document.getElementById(link.sectionId);
        if (!element) return null;
        const rect = element.getBoundingClientRect();
        return {
          id: link.sectionId,
          top: rect.top + scrollPosition,
        };
      }).filter(Boolean);

      const sortedSections = sections.sort((a, b) => 
        Math.abs(a.top - scrollPosition) - Math.abs(b.top - scrollPosition)
      );

      if (sortedSections[0]) {
        setActiveSection(sortedSections[0].id);
      }
    };

    // Small delay to ensure DOM is ready
    setTimeout(setInitialSection, 100);

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/20 backdrop-blur-md py-5">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* Logo - Left */}
          <div className="flex-shrink-0 z-10">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
                });
                window.history.pushState(null, "", "#home");
                setActiveSection("home");
              }}
              className="flex items-center gap-2 group"
            >
              <img
                src={logoImage}
                alt="Netcross Farms Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="font-bold text-xl text-primary-foreground hidden sm:block">
                Netcross <span className="text-accent">Agro</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation - Perfectly Centered */}
          <nav className="hidden lg:flex items-center justify-center gap-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(link.sectionId);
                    if (element) {
                      const headerHeight = 100;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                      });
                      window.history.pushState(null, "", link.href);
                      setActiveSection(link.sectionId);
                    }
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-primary bg-primary/20 backdrop-blur-sm border border-primary/30 shadow-sm scale-105"
                      : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/5"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button - Right */}
          <div className="flex-shrink-0 z-10">
            <button
              className="lg:hidden p-2 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-primary-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-primary-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 p-4 bg-background rounded-2xl shadow-large animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(link.sectionId);
                      if (element) {
                        const headerHeight = 100;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: "smooth"
                        });
                        window.history.pushState(null, "", link.href);
                        setActiveSection(link.sectionId);
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "text-primary bg-primary/10 border-l-4 border-primary"
                        : "text-foreground hover:bg-primary/5"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};