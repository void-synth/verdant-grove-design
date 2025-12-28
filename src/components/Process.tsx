import { Seedling, Factory, Package, Truck, CheckCircle2 } from "lucide-react";

const processSteps = [
  {
    icon: Seedling,
    step: "01",
    title: "Sustainable Sourcing",
    description: "We partner with verified local farms that practice sustainable agriculture, ensuring the highest quality raw materials while supporting local communities.",
  },
  {
    icon: Factory,
    step: "02",
    title: "Modern Processing",
    description: "Our state-of-the-art facilities combine traditional methods with modern technology, maintaining authenticity while ensuring hygiene and consistency.",
  },
  {
    icon: Package,
    step: "03",
    title: "Quality Assurance",
    description: "Every batch undergoes rigorous quality testing. We maintain strict standards from sourcing to packaging, ensuring you receive only the best products.",
  },
  {
    icon: Truck,
    step: "04",
    title: "Reliable Delivery",
    description: "Our efficient supply chain ensures fresh products reach you on time, every time. We deliver nationwide with flexible options for bulk and retail orders.",
  },
];

export const Process = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            From Farm to Table:{" "}
            <span className="text-primary">Our Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover how we transform raw agricultural materials into premium products 
            you can trust, using a process that prioritizes quality, sustainability, and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="bg-card rounded-3xl p-8 shadow-lg border border-primary/5 hover:shadow-2xl hover:border-primary/20 transition-all duration-300 h-full">
                {/* Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <step.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="text-5xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Checkmark */}
                <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-sm font-medium">Quality Assured</span>
                </div>
              </div>

              {/* Connector Line (hidden on last item) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/20 transform -translate-y-1/2 z-0" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/5 rounded-full border border-primary/10">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">
              Every step verified for quality and sustainability
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

