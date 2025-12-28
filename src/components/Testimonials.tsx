import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Adebayo Ogunleye",
    role: "Restaurant Owner",
    location: "Lagos",
    rating: 5,
    text: "Netcross Agro Farm has been our trusted supplier for over 3 years. Their garri is consistently high quality, and their bulk delivery service is reliable. Our customers always compliment the authentic taste.",
    image: "👨‍🍳",
  },
  {
    name: "Fatima Ibrahim",
    role: "Retailer",
    location: "Abuja",
    rating: 5,
    text: "The packaging is excellent, and the products stay fresh longer. I've seen a significant increase in repeat customers since I started stocking Netcross products. Their customer service is also top-notch.",
    image: "👩‍💼",
  },
  {
    name: "Chukwuemeka Nwosu",
    role: "Family Consumer",
    location: "Enugu",
    rating: 5,
    text: "As a family, we've been using Netcross garri and maize flour for years. The quality is unmatched, and we love that they support sustainable farming. It's great to know we're getting authentic, locally-sourced products.",
    image: "👨‍👩‍👧‍👦",
  },
];

export const Testimonials = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Customer Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            Trusted by{" "}
            <span className="text-primary">500+ Happy Customers</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers say about 
            their experience with Netcross Agro Farm products.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 shadow-lg border border-primary/5 hover:shadow-2xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-primary/10">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Years of Excellence", value: "15+" },
            { label: "Satisfied Customers", value: "500+" },
            { label: "Monthly Production", value: "50+ Tons" },
            { label: "Quality Rating", value: "5.0 ⭐" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-background rounded-2xl border border-primary/5"
            >
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

