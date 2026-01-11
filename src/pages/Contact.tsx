import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, Instagram, Youtube, Facebook } from "lucide-react";
import contactPageHero from "@/assets/contact-page-hero.jpg";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={contactPageHero}
              alt="Contact us"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-[hsl(150,30%,10%,0.7)]" />
          </div>
          <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6 px-2">
              Get In Touch
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto px-4">
              We'd love to hear from you. Reach out and let's start a conversation.
            </p>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
              {/* Contact Information */}
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-primary/15">
                    <Phone className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                    Contact Information
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                    Let's Connect
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                    Whether you have a question about our products, need a custom quote, or want to 
                    learn more about our services, we're here to help. Reach out through any of the 
                    channels below.
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 bg-secondary/30 rounded-xl sm:rounded-2xl border border-primary/5 hover:border-orange-400/15 transition-colors">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-400/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Phone</h3>
                      <a href="tel:09038162438" className="text-muted-foreground hover:text-primary transition-colors">
                        09038162438
                      </a>
                      <br />
                      <a href="tel:08139774608" className="text-muted-foreground hover:text-primary transition-colors">
                        08139774608
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-secondary/30 rounded-2xl border border-primary/5 hover:border-primary/20 transition-colors">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Email</h3>
                      <a href="mailto:info@netcrossagro.com" className="text-muted-foreground hover:text-primary transition-colors">
                        info@netcrossagro.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-secondary/30 rounded-2xl border border-primary/5 hover:border-orange-400/15 transition-colors">
                    <div className="w-12 h-12 bg-orange-400/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        Netcross Agro Farm<br />
                        Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-secondary/30 rounded-2xl border border-primary/5 hover:border-primary/20 transition-colors">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-6">
                  <h3 className="font-bold text-foreground mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/netcross_farm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-orange-400/10 rounded-xl flex items-center justify-center hover:bg-orange-400/15 transition-colors"
                    >
                      <Instagram className="w-6 h-6 text-orange-400" />
                    </a>
                    <a
                      href="https://youtube.com/@netcrossfarm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-xl flex items-center justify-center hover:from-primary/20 hover:to-primary-glow/20 transition-colors"
                    >
                      <Youtube className="w-6 h-6 text-primary" />
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61577091031341"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-orange-400/10 rounded-xl flex items-center justify-center hover:bg-orange-400/15 transition-colors"
                    >
                      <Facebook className="w-6 h-6 text-orange-400" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-secondary/30 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-primary/5">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="bg-background text-sm sm:text-base h-10 sm:h-11"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="bg-background text-sm sm:text-base h-10 sm:h-11"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background text-sm sm:text-base h-10 sm:h-11"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-background text-sm sm:text-base h-10 sm:h-11"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us how we can help..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-background text-sm sm:text-base resize-none"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section Placeholder */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-background rounded-3xl p-12 text-center border border-primary/5">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Visit Our Farm</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We welcome visitors to see our operations firsthand. Contact us to schedule a farm tour.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;



