import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import farmersImage from "@/assets/farmers-harvesting.jpg";
import produceImage from "@/assets/farm-produce.jpg";
import aboutImage1 from "@/assets/file-1.jpg";
import aboutImage2 from "@/assets/file-2.jpg";
import aboutBgImage from "@/assets/about-us-bg.jpg";

const features = [
  "Premium Garri Production",
  "Quality Cassava Processing",
  "Fresh Maize Flour",
  "Bulk & Souvenir Supply",
];

export const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aboutBgImage})` }}
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-[hsl(142,60%,98%)]/85 backdrop-blur-[2px]" />
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] leaf-pattern" />
      {/* Curved Divider at Top */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 55C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0Z"
            fill="hsl(45, 25%, 97%)"
          />
        </svg>
      </div>

      {/* Abstract Leaf SVG Background */}
      <div className="absolute top-20 right-10 w-64 h-64 opacity-5 hidden lg:block">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 20 C60 40 30 70 30 100 C30 130 60 160 100 180 C140 160 170 130 170 100 C170 70 140 40 100 20 Z"
            fill="hsl(142, 72%, 29%)"
          />
          <path
            d="M100 40 C75 55 55 75 55 100 C55 125 75 145 100 160 C125 145 145 125 145 100 C145 75 125 55 100 40 Z"
            fill="hsl(142, 72%, 29%)"
            opacity="0.6"
          />
        </svg>
      </div>

      <div className="container-custom mx-auto relative z-10 pt-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Enhanced Image Gallery with Overlapping Cards */}
          <div className="relative h-[500px] lg:h-[600px]">
            {/* Background Decorative Elements */}
            <div className="absolute -top-12 -left-12 w-40 h-40 bg-primary/5 organic-blob-2 -z-10 hidden md:block" />
            <div className="absolute bottom-0 -right-8 w-32 h-32 bg-accent/10 organic-blob-3 -z-10 hidden md:block" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 organic-blob -z-10" />
            <div className="absolute bottom-20 -left-4 w-16 h-16 bg-accent/20 organic-blob-2 -z-10" />
            <div className="absolute top-1/2 -right-6 w-20 h-20 bg-primary/5 organic-blob-3 -z-10 hidden lg:block" />

            {/* Main Large Image Card - Bottom Layer */}
            <div 
              className="absolute bottom-0 left-0 right-0 lg:right-8 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-background z-10 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              <div className="absolute inset-0 bg-foreground/5 z-10" />
              <img
                src={farmersImage}
                alt="Farmers happily harvesting fresh cassava in a green field"
                className="w-full h-[350px] lg:h-[420px] object-cover"
                loading="lazy"
              />
            </div>

            {/* Overlapping Medium Image Card - Top Right */}
            <div 
              className="absolute top-0 right-0 lg:right-12 w-[280px] lg:w-[320px] h-[240px] lg:h-[280px] rounded-3xl overflow-hidden shadow-2xl border-4 border-background z-20 opacity-0 animate-scale-in"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              <div className="absolute inset-0 bg-foreground/5 z-10" />
              <img
                src={aboutImage1}
                alt="Serene rural landscape with golden hour lighting"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Overlapping Small Circular Image - Bottom Right */}
            <div 
              className="absolute bottom-8 -right-4 lg:right-4 w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-background z-30 opacity-0 animate-scale-in"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              <img
                src={produceImage}
                alt="Fresh cassava and garri flour products on rustic table"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Overlapping Rectangular Image Card - Top Left */}
            <div 
              className="absolute top-8 -left-4 lg:-left-8 w-[200px] lg:w-[240px] h-[180px] lg:h-[220px] rounded-2xl overflow-hidden shadow-xl border-4 border-background z-20 opacity-0 animate-scale-in hidden md:block"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              <div className="absolute inset-0 bg-foreground/5 z-10" />
              <img
                src={aboutImage2}
                alt="Person walking through dense cornfield showing quality agricultural crops"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Stats Card - Floating on Top Left */}
            <div 
              className="absolute top-16 left-8 lg:left-16 w-32 h-32 lg:w-40 lg:h-40 rounded-2xl bg-card/95 backdrop-blur-md shadow-2xl border-4 border-background z-30 opacity-0 animate-scale-in hidden md:flex items-center justify-center"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              <div className="text-center p-4">
                <div className="text-3xl lg:text-4xl font-bold text-primary">15+</div>
                <div className="text-xs lg:text-sm text-foreground/70 font-medium">Years Experience</div>
              </div>
            </div>

            {/* Additional Small Image Card - Middle Right */}
            <div 
              className="absolute top-1/2 -right-2 lg:right-8 w-36 h-36 lg:w-44 lg:h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-background z-25 opacity-0 animate-scale-in hidden lg:block"
              style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
            >
              <div className="absolute inset-0 bg-primary/10 z-10" />
              <img
                src={produceImage}
                alt="Fresh farm produce"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span 
              className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              About Netcross Agro Farm
            </span>
            
            <h2 
              className="text-display-sm text-foreground mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              We Help You Deliver{" "}
              <span className="text-primary relative inline-block">
                Quality Farm Produce
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-primary/20 rounded-full transform -skew-x-6" />
              </span>
            </h2>

            <p 
              className="text-muted-foreground text-lg leading-relaxed mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              For over 15 years, Netcross Agro Farm has been more than a business—it's been 
              a mission. We've built our reputation on three pillars: quality you can taste, 
              sustainability you can trust, and service that goes beyond expectations. Our 
              modern processing facilities aren't just buildings—they're where tradition 
              meets innovation, ensuring every product maintains its natural goodness.
            </p>

            {/* Feature List - Staggered Layout */}
            <div 
              className="grid sm:grid-cols-2 gap-4 mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-3 p-4 rounded-xl bg-background/60 backdrop-blur-sm border border-primary/10 transform ${
                    index % 2 === 0 ? 'rotate-0.5' : '-rotate-0.5'
                  } transition-transform duration-300 hover:rotate-0 hover:scale-105`}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center ring-2 ring-primary/10 transform rotate-6">
                    <CheckCircle2 className="w-5 h-5 text-primary transform -rotate-6" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div 
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              <Button 
                variant="default" 
                size="lg"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("contact");
                  if (element) {
                    const headerHeight = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth"
                    });
                    window.history.pushState(null, "", "#contact");
                  }
                }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Curved Divider at Bottom */}
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