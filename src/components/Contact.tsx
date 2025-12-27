import { MapPin, Phone, Mail, Clock, Instagram, Youtube, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import contactBgImage from "@/assets/file-1.jpg";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    details: ["123 Farm Road, Agricultural Zone", "Lagos, Nigeria"],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["09038162438", "08139774608"],
    links: ["tel:+2349038162438", "tel:+2348139774608"],
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["info@netcrossagro.com", "sales@netcrossagro.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM"],
  },
];

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/netcross_farm",
    label: "Instagram",
    color: "text-pink-500",
  },
  {
    icon: Youtube,
    href: "https://youtube.com/@netcrossfarm",
    label: "YouTube",
    color: "text-red-500",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61577091031341",
    label: "Facebook",
    color: "text-blue-500",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Hero-like Background with Image */}
      <div className="absolute inset-0">
        <img
          src={contactBgImage}
          alt="Serene rural landscape with golden hour lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/8" />
      </div>
      
      {/* Organic Shape Overlays */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 organic-blob -z-10 hidden lg:block" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 organic-blob-2 -z-10 hidden lg:block" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/3 organic-blob-3 -z-10 hidden lg:block" />

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] leaf-pattern" />

      <div className="container-custom mx-auto relative z-10">
        {/* Hero-like Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            Get In Touch
          </span>
          
          <h2 
            className="text-display-sm text-foreground mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Let's Discuss Your{" "}
            <span className="text-primary relative inline-block">
              Agricultural Needs
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-primary/20 rounded-full transform skew-x-6" />
            </span>
          </h2>

          <p 
            className="text-muted-foreground text-xl leading-relaxed mb-10 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            Have a question? Need a custom order? Or just want to chat about sustainable farming? 
            We're here. Our team genuinely loves talking about what we do, and we're always excited 
            to help you find exactly what you need.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="group relative p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-medium opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: "forwards" }}
                >
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                    {item.details.map((detail, i) => {
                      const link = item.links && item.links[i];
                      if (link) {
                        return (
                          <a
                            key={i}
                            href={link}
                            className="text-muted-foreground text-sm hover:text-primary transition-colors block"
                          >
                            {detail}
                          </a>
                        );
                      }
                      return (
                        <p key={i} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Links */}
            <div 
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
            >
              <h4 className="font-bold text-foreground mb-4 text-lg">Follow Us</h4>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-14 h-14 rounded-full bg-card/80 backdrop-blur-sm border border-primary/10 flex items-center justify-center shadow-medium hover:bg-primary/10 hover:border-primary/30 transition-all"
                  >
                    <social.icon className={`w-6 h-6 ${social.color}`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className="relative bg-card/90 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-2xl border border-primary/10 opacity-0 animate-slide-in-right"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 organic-blob -z-10" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/15 organic-blob-2 -z-10" />
            <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
            
            <form 
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                // Form submission logic can be added here
                console.log("Form submitted");
              }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  placeholder="Tell us about your needs..."
                />
              </div>

              <Button variant="default" size="lg" className="w-full shadow-lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Wave Divider at Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(45, 25%, 97%)"
          />
        </svg>
      </div>
    </section>
  );
};