import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Adebayo Ogunleye",
    role: "Restaurant Owner",
    location: "Lagos, Nigeria",
    rating: 5,
    text: "Netcross Agro has transformed our supply chain. The quality of their garri is unmatched, and their innovative delivery system ensures we always have fresh stock. Their technology platform makes ordering seamless.",
    image: "👨‍🍳",
  },
  {
    name: "Fatima Ibrahim",
    role: "Bulk Distributor",
    location: "Abuja, Nigeria",
    rating: 5,
    text: "Working with Netcross Agro has been a game-changer. Their sustainable practices and transparent tracking system give our customers confidence. The smart farming technology they use is impressive.",
    image: "👩‍💼",
  },
  {
    name: "Chukwu Emeka",
    role: "Food Processing Company",
    location: "Enugu, Nigeria",
    rating: 5,
    text: "The consistency and quality of their cassava products are outstanding. Their innovative processing methods ensure we get premium ingredients every time. Highly recommend their services.",
    image: "👨‍🔬",
  },
  {
    name: "Amina Hassan",
    role: "Retail Chain Manager",
    location: "Kano, Nigeria",
    rating: 5,
    text: "Netcross Agro's commitment to sustainability and innovation sets them apart. Our customers love the quality, and we appreciate their efficient supply chain management system.",
    image: "👩‍💻",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span 
            className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            Client Stories
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            See what our partners say about working with Netcross Agro
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div 
          className="max-w-4xl mx-auto opacity-0 animate-fade-in"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          <Card className="border-2 border-primary/20 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Avatar & Navigation */}
                <div className="flex-shrink-0 flex flex-col items-center gap-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl shadow-lg">
                    {testimonials[currentIndex].image}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevTestimonial}
                      className="rounded-full"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextTestimonial}
                      className="rounded-full"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-lg text-foreground leading-relaxed mb-6 italic">
                    "{testimonials[currentIndex].text}"
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Author Info */}
                  <div>
                    <div className="font-bold text-foreground text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

