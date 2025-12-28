import { useState } from "react";
import { Cpu, Droplets, Leaf, TrendingUp, Smartphone, Zap, BarChart3, Cloud } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const innovations = [
  {
    icon: Cpu,
    title: "Smart Farm Monitoring",
    description: "IoT sensors track soil moisture, temperature, and crop health in real-time",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Droplets,
    title: "Precision Irrigation",
    description: "AI-powered water management systems optimize resource usage by 40%",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Carbon-neutral farming with regenerative agriculture techniques",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Decisions",
    description: "Advanced analytics predict yields and optimize harvest timing",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Smartphone,
    title: "Mobile Farm Management",
    description: "Control and monitor operations from anywhere with our mobile platform",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: Zap,
    title: "Energy Efficiency",
    description: "Solar-powered facilities reduce carbon footprint by 60%",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
];

export const Innovation = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span 
            className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            Innovation & Technology
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Farming Meets <span className="text-primary">Future Technology</span>
          </h2>
          <p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            We're revolutionizing agriculture by integrating cutting-edge technology with traditional farming wisdom
          </p>
        </div>

        {/* Innovation Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {innovations.map((innovation, index) => {
            const Icon = innovation.icon;
            return (
              <Card
                key={index}
                className={`border-2 transition-all duration-300 cursor-pointer opacity-0 animate-fade-in ${
                  hoveredIndex === index
                    ? "border-primary shadow-xl scale-105"
                    : "border-border hover:border-primary/50"
                }`}
                style={{ animationDelay: `${0.4 + index * 0.1}s`, animationFillMode: "forwards" }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-xl ${innovation.bgColor} flex items-center justify-center mb-4 transition-transform ${hoveredIndex === index ? "scale-110 rotate-3" : ""}`}>
                    <Icon className={`w-7 h-7 ${innovation.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {innovation.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {innovation.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Banner */}
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "1s", animationFillMode: "forwards" }}
        >
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
            <BarChart3 className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-3xl font-bold text-primary mb-1">40%</div>
            <div className="text-sm text-muted-foreground">Resource Efficiency</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
            <Cloud className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="text-3xl font-bold text-accent mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Cloud Connected</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20">
            <Zap className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-blue-500 mb-1">60%</div>
            <div className="text-sm text-muted-foreground">Carbon Reduction</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20">
            <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-green-500 mb-1">25%</div>
            <div className="text-sm text-muted-foreground">Yield Increase</div>
          </div>
        </div>
      </div>
    </section>
  );
};

