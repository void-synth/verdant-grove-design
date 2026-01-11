import { CheckCircle2, Play } from "lucide-react";
import maizeImage from "@/assets/maize.jpg";

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
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span 
              className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              Why Choose Us
            </span>
            
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4 sm:mb-6 px-2 sm:px-0 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              We Want To Help You{" "}
              <span className="text-primary">Grow With Quality Produce</span>
            </h2>

            <p 
              className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0 opacity-0 animate-fade-in"
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
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-orange-50/50 to-primary-light/50 hover:from-orange-50 hover:to-primary-light transition-colors border border-orange-200/30"
                >
                  <div className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center mt-0.5 ${
                    index % 2 === 0 ? 'bg-gradient-to-r from-orange-400 to-orange-300' : 'bg-gradient-to-r from-primary to-primary-glow'
                  }`}>
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-sm sm:text-base text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Video/Image Section */}
          <div 
            className="order-1 lg:order-2 relative opacity-0 animate-scale-in"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
              <img
                src={maizeImage}
                alt="Golden ripe maize corn on stalks in agricultural field"
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center">
                <button className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-orange-400 to-primary flex items-center justify-center shadow-xl hover:scale-110 transition-transform group">
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-orange-400/15 to-orange-300/15 rounded-full -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};