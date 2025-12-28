import { useState, useEffect } from "react";
import { Leaf, Droplets, Sun, Recycle, TreePine, Sprout } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const impactMetrics = [
  {
    icon: Droplets,
    label: "Water Saved",
    value: 2500000,
    unit: "Liters",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    progress: 85,
  },
  {
    icon: Sun,
    label: "Solar Energy",
    value: 45000,
    unit: "kWh Generated",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    progress: 92,
  },
  {
    icon: Recycle,
    label: "Waste Recycled",
    value: 95,
    unit: "%",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    progress: 95,
  },
  {
    icon: TreePine,
    label: "Trees Planted",
    value: 12000,
    unit: "Trees",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    progress: 78,
  },
];

export const SustainabilityImpact = () => {
  const [counters, setCounters] = useState(impactMetrics.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("sustainability-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timers = impactMetrics.map((metric, index) => {
      const duration = 2000;
      const steps = 60;
      const increment = metric.value / steps;
      const stepDuration = duration / steps;

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= metric.value) {
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = metric.value;
            return newCounters;
          });
          clearInterval(timer);
        } else {
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }
      }, stepDuration);

      return timer;
    });

    return () => {
      timers.forEach((timer) => clearInterval(timer));
    };
  }, [isVisible]);

  return (
    <section
      id="sustainability-section"
      className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold text-sm mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              <Leaf className="w-4 h-4" />
              <span>Our Impact</span>
            </div>
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              Sustainable Farming, <span className="text-primary">Measurable Impact</span>
            </h2>
            <p 
              className="text-muted-foreground text-lg leading-relaxed mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              Every harvest contributes to a healthier planet. Our commitment to sustainability 
              goes beyond words—we track and share our environmental impact in real-time.
            </p>

            {/* Impact Cards */}
            <div 
              className="space-y-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              {impactMetrics.map((metric, index) => {
                const Icon = metric.icon;
                const displayValue = metric.unit === "%" 
                  ? `${counters[index]}${metric.unit}` 
                  : `${counters[index].toLocaleString()} ${metric.unit}`;

                return (
                  <div
                    key={index}
                    className={`p-5 rounded-xl border-2 ${metric.bgColor} border-transparent hover:border-primary/30 transition-all`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg ${metric.bgColor} flex items-center justify-center`}>
                          <Icon className={`w-5 h-5 ${metric.color}`} />
                        </div>
                        <span className="font-semibold text-foreground">{metric.label}</span>
                      </div>
                      <div className={`text-2xl font-bold ${metric.color}`}>
                        {displayValue}
                      </div>
                    </div>
                    <Progress value={metric.progress} className="h-2" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual Element */}
          <div 
            className="relative opacity-0 animate-scale-in"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <div className="relative z-10">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
                <div className="text-center">
                  <Sprout className="w-24 h-24 text-primary mx-auto mb-4 animate-pulse" />
                  <div className="text-4xl font-bold text-primary mb-2">2024</div>
                  <div className="text-muted-foreground">Sustainability Report</div>
                </div>
              </div>
            </div>

            {/* Decorative Circles */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10 animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/10 rounded-full -z-10 animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

