import { Wheat, Factory, Package, Truck, ArrowRight } from "lucide-react";
import servicesBgImage from "@/assets/services-bg.jpg";

const services = [
  {
    icon: Wheat,
    title: "Garri Production",
    description: "Our signature garri—crispy, golden, and full of flavor. Processed the traditional way, but with modern hygiene standards. Perfect for your family meals or commercial needs.",
    link: "#",
  },
  {
    icon: Factory,
    title: "Cassava Processing",
    description: "From raw cassava to finished products, our facilities handle it all. We maintain strict quality control at every stage, ensuring you get nothing but the best.",
    link: "#",
  },
  {
    icon: Package,
    title: "Maize Flour",
    description: "Finely milled from handpicked grains, our maize flour brings authentic taste to your kitchen. Whether you're making tuwo, pap, or experimenting with new recipes.",
    link: "#",
  },
  {
    icon: Truck,
    title: "Farm Produce Supply",
    description: "Need bulk supply? We've got you. From small retailers to large-scale events, we deliver fresh produce nationwide with the reliability you can count on.",
    link: "#",
  },
];

export const Services = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${servicesBgImage})` }}
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-secondary/90 backdrop-blur-[2px]" />
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] leaf-pattern" />
      
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

      {/* Decorative Leaf Pattern Background */}
      <div className="leaf-pattern" />

      {/* Organic Shape Accents */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-primary/3 organic-blob -z-10 hidden lg:block" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-accent/5 organic-blob-2 -z-10 hidden lg:block" />

      <div className="container-custom mx-auto relative z-10">
        {/* Section Header - Asymmetric */}
        <div className="mb-16 lg:mb-20">
          <div className="max-w-3xl lg:max-w-4xl">
            <span 
              className="inline-block text-primary font-semibold text-sm uppercase tracking-[0.15em] mb-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              What We Offer
            </span>
            <h2 
              className="text-display-sm text-foreground mb-6 text-asymmetric opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              Our Agro Products{" "}
              <span className="text-primary relative">
                & Services
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary/40 rounded-full" />
              </span>
            </h2>
            <p 
              className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-2xl text-asymmetric opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              From artisanal garri production to bulk farm supply, we've crafted each service 
              with your needs in mind. Whether you're a home cook seeking authentic flavors 
              or a business requiring consistent quality, we've got you covered.
            </p>
          </div>
        </div>

        {/* Services Grid - Staggered Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-card rounded-3xl p-8 card-float card-unique opacity-0 animate-fade-in-up ${
                index % 2 === 0 ? 'lg:mt-8' : 'lg:-mt-4'
              }`}
              style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: "forwards" }}
            >
              {/* Subtle Border */}
              <div className="absolute inset-0 rounded-3xl border border-primary/5" />

              {/* Circular Icon Container - More Unique */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 transform rotate-3">
                  <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center shadow-sm transform -rotate-3">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                {/* Decorative Circle Behind Icon - Multiple Layers */}
                <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-primary/5 -z-10" />
                <div className="absolute top-1 left-1 w-18 h-18 rounded-full bg-accent/10 -z-10 blur-sm" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Link */}
              <a
                href="#products"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("products");
                  if (element) {
                    const headerHeight = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth"
                    });
                    window.history.pushState(null, "", "#products");
                  }
                }}
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
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