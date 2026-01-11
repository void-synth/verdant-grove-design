import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, ArrowRight } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

const products = [
  { name: "Garri", href: "#" },
  { name: "Cassava Flour", href: "#" },
  { name: "Maize Flour", href: "#" },
  { name: "Farm Produce", href: "#" },
  { name: "Bulk Orders", href: "#" },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/netcross_farm", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/@netcrossfarm", label: "YouTube" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61577091031341", label: "Facebook" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-1.5 sm:mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-sm sm:text-base text-primary-foreground/70">
                Get updates on new products, farming tips, and exclusive offers.
              </p>
            </div>
            <div className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 rounded-l-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary text-sm sm:text-base"
              />
              <button className="px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-orange-400 to-primary text-white rounded-r-full font-medium hover:from-orange-500 hover:to-primary-glow transition-all flex items-center gap-1.5 sm:gap-2 shadow-md hover:shadow-lg text-sm sm:text-base">
                Subscribe
                <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link 
              to="/"
              className="flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-5 hover:opacity-80 transition-opacity"
            >
              <img
                src="/logo-removebg-preview.png"
                alt="Netcross Farms Logo"
                className="h-8 sm:h-10 w-auto object-contain"
                loading="eager"
              />
              <span className="font-bold text-lg sm:text-xl">Netcross Agro</span>
            </Link>
            <p className="text-primary-foreground/70 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              Delivering premium quality agricultural products from our farms to your table. 
              Committed to sustainable farming and customer satisfaction since 2010.
            </p>
            <div className="flex items-center gap-2 sm:gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-400 hover:to-primary hover:scale-110 transition-all"
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 md:mb-5">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-xs sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 md:mb-5">Our Products</h4>
            <ul className="space-y-2 sm:space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <a
                    href={product.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-xs sm:text-sm"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 md:mb-5">Contact Info</h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
              <li className="text-primary-foreground/70">
                <span className="block text-primary-foreground font-medium mb-1">Address:</span>
                123 Farm Road, Agricultural Zone, Lagos, Nigeria
              </li>
              <li className="text-primary-foreground/70">
                <span className="block text-primary-foreground font-medium mb-1">Phone:</span>
                <a href="tel:+2349038162438" className="block">09038162438</a>
                <a href="tel:+2348139774608" className="block">08139774608</a>
              </li>
              <li className="text-primary-foreground/70">
                <span className="block text-primary-foreground font-medium mb-1">Email:</span>
                info@netcrossagro.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} Netcross Agro Farm. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};