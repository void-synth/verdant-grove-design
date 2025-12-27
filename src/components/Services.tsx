import { Wheat, Factory, Package, Truck, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Wheat,
    title: "Garri Production",
    description: "Premium quality garri processed with modern techniques ensuring purity and freshness for household and commercial use.",
    link: "#",
  },
  {
    icon: Factory,
    title: "Cassava Processing",
    description: "State-of-the-art cassava processing facilities delivering high-grade cassava products for various applications.",
    link: "#",
  },
  {
    icon: Package,
    title: "Maize Flour",
    description: "Finely milled maize flour from carefully selected grains, perfect for traditional dishes and modern recipes.",
    link: "#",
  },
  {
    icon: Truck,
    title: "Farm Produce Supply",
    description: "Reliable bulk supply of fresh farm produce for retailers, wholesalers, and event organizers nationwide.",
    link: "#",
  },
];

export const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span 
            className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            What We Offer
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Our Agro Products & Services
          </h2>
          <p 
            className="text-muted-foreground text-lg opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            Discover our range of premium agricultural products and services designed 
            to meet your farming and food production needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-medium hover:shadow-xl transition-all duration-300 hover:-translate-y-2 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: "forwards" }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Link */}
              <a
                href={service.link}
                className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all duration-200"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};