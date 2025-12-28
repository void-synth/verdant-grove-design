import { Leaf, Zap, Shield, TrendingUp, Award, Users } from "lucide-react";

const innovations = [
  {
    icon: Leaf,
    title: "Sustainable Farming",
    description: "We practice eco-friendly farming methods that preserve soil health and reduce environmental impact, ensuring long-term sustainability for future generations.",
  },
  {
    icon: Zap,
    title: "Modern Technology",
    description: "Our processing facilities use cutting-edge equipment combined with traditional knowledge, delivering consistent quality while maintaining authentic taste.",
  },
  {
    icon: Shield,
    title: "Quality Control",
    description: "Every batch undergoes multiple quality checks. We maintain ISO-standard hygiene protocols and traceability from farm to final product.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "We invest in research and development, constantly improving our processes and introducing new products based on customer feedback and market needs.",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Our commitment to excellence has earned us recognition from agricultural associations and certifications for quality and sustainability practices.",
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "We support local farmers through fair trade practices and community development programs, creating positive social and economic impact.",
  },
];

export const Innovation = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Innovation & Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            What Sets Us{" "}
            <span className="text-primary">Apart</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We combine traditional wisdom with modern innovation to deliver 
            agricultural products that exceed expectations in quality, sustainability, and value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {innovations.map((innovation, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 border border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <innovation.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {innovation.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {innovation.description}
              </p>
            </div>
          ))}
        </div>

        {/* Innovation Highlight */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                Our Commitment
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Leading the Future of{" "}
                <span className="text-primary">Agro-Processing</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Netcross Agro Farm, we're not just processing agricultural products—we're 
                pioneering sustainable practices, investing in technology, and building a legacy 
                of quality that will benefit generations to come.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-background rounded-full text-sm font-medium text-foreground border border-primary/10">
                  ✓ ISO Certified
                </div>
                <div className="px-4 py-2 bg-background rounded-full text-sm font-medium text-foreground border border-primary/10">
                  ✓ Sustainable Practices
                </div>
                <div className="px-4 py-2 bg-background rounded-full text-sm font-medium text-foreground border border-primary/10">
                  ✓ Quality Assured
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "500+", label: "Happy Clients" },
                { value: "50+", label: "Tons Monthly" },
                { value: "100%", label: "Quality Guaranteed" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-background/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-primary/10"
                >
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

