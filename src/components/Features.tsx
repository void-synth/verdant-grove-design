import { CheckCircle2 } from "lucide-react";
import backgroundVideo from "@/assets/background-video.mp4";

const features = [
  "Hygienically processed in modern facilities",
  "Trusted sourcing from verified farms",
  "Quality packaging for freshness",
  "Reliable and timely supply chain",
];

export const Features = () => {
  return (
    <section id="products" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span 
              className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              Why Choose Us
            </span>
            
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              We Want To Help You{" "}
              <span className="text-primary">Grow With Quality Produce</span>
            </h2>

            <p 
              className="text-muted-foreground text-lg leading-relaxed mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              Our commitment to excellence sets us apart. From farm to table, we ensure 
              every step of our process maintains the highest standards of quality and 
              sustainability.
            </p>

            {/* Feature List */}
            <div 
              className="space-y-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Video Section */}
          <div 
            className="order-1 lg:order-2 relative opacity-0 animate-scale-in"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[400px] lg:h-[500px] object-cover"
              >
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Subtle Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};