import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import cassavaImage from "@/assets/cassava.jpg";
import garriImage from "@/assets/garri.jpg";

const features = [
  "Premium Garri Production",
  "Quality Cassava Processing",
  "Fresh Maize Flour",
  "Bulk & Souvenir Supply",
];

export const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Grid */}
          <div className="relative">
            {/* Main Image */}
            <div 
              className="relative z-10 rounded-3xl overflow-hidden shadow-xl opacity-0 animate-fade-in"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              <img
                src={cassavaImage}
                alt="Fresh cassava harvest"
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Overlapping Secondary Image */}
            <div 
              className="absolute -bottom-8 -right-4 lg:-right-8 w-48 h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden shadow-xl border-4 border-background z-20 opacity-0 animate-scale-in"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              <img
                src={garriImage}
                alt="Premium garri products"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Circle */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10" />
            <div className="absolute bottom-20 -left-4 w-16 h-16 bg-accent/20 rounded-full -z-10" />
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
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              We Help You Deliver{" "}
              <span className="text-primary">Quality Farm Produce</span>
            </h2>

            <p 
              className="text-muted-foreground text-lg leading-relaxed mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              At Netcross Agro Farm, we are committed to sustainable farming practices 
              and delivering the highest quality agricultural products. Our state-of-the-art 
              processing facilities ensure hygiene and freshness in every product we deliver.
            </p>

            {/* Feature List */}
            <div 
              className="grid sm:grid-cols-2 gap-4 mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div 
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              <Button variant="default" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};