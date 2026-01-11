import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wheat, Factory, Package, Truck, CheckCircle2, Clock, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";
import servicesPageHero from "@/assets/services-page-hero.jpg";
import garriImage from "@/assets/garri.jpg";
import cassavaImage from "@/assets/cassava.jpg";
import maizeImage from "@/assets/maize.jpg";
import bulkImage from "@/assets/bulk.jpg";

const Services = () => {
  const services = [
    {
      icon: Wheat,
      title: "Garri Production",
      description: "Our signature garri is processed using traditional methods combined with modern hygiene standards. We source only the finest cassava roots and process them with care to deliver that perfect crispy, golden texture you love.",
      features: [
        "Traditional processing methods",
        "Premium quality cassava",
        "Hygienic production facilities",
        "Custom packaging available",
      ],
      image: garriImage,
    },
    {
      icon: Factory,
      title: "Cassava Processing",
      description: "From raw cassava to finished products, our state-of-the-art facilities handle every stage of processing. We maintain strict quality control at each step to ensure consistency and excellence.",
      features: [
        "Modern processing equipment",
        "Quality control at every stage",
        "Bulk processing capabilities",
        "Custom processing services",
      ],
      image: cassavaImage,
    },
    {
      icon: Package,
      title: "Maize Flour Production",
      description: "Finely milled from handpicked grains, our maize flour brings authentic taste to your kitchen. Perfect for making tuwo, pap, or experimenting with new recipes.",
      features: [
        "Finely milled texture",
        "Handpicked quality grains",
        "Versatile for many recipes",
        "Fresh packaging",
      ],
      image: maizeImage,
    },
    {
      icon: Truck,
      title: "Bulk & Souvenir Supply",
      description: "Whether you need large quantities for your business or beautifully packaged souvenirs for special occasions, we've got you covered. Our flexible supply options meet all your needs.",
      features: [
        "Bulk order discounts",
        "Custom packaging",
        "Reliable delivery",
        "Flexible quantities",
      ],
      image: bulkImage,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={servicesPageHero}
              alt="Industrial processing facility"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-[hsl(150,30%,10%,0.7)]" />
          </div>
          <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6 px-2">
              Our Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto px-4">
              Comprehensive agro-processing solutions tailored to your needs
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4 border border-primary/15">
                <Factory className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                What We Offer
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-4">
                Premium Processing Services
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                From farm to table, we handle every step with precision and care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-background rounded-3xl overflow-hidden shadow-lg border border-primary/5 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center border ${
                        index % 2 === 0
                          ? 'bg-orange-400/15 border-orange-400/20'
                          : 'bg-primary/20 border-primary/30'
                      }`}>
                        <service.icon className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${index % 2 === 0 ? 'text-orange-400' : 'text-primary'}`} />
                      </div>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 md:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">{service.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${idx % 2 === 0 ? 'text-orange-400' : 'text-primary'}`} />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/products">
                      <Button variant="outline" className="w-full">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Why Choose Our Services?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We combine traditional expertise with modern technology to deliver exceptional results.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Quality Guaranteed",
                  description: "Every batch undergoes rigorous quality checks to ensure you receive only the best products.",
                },
                {
                  icon: Clock,
                  title: "Timely Delivery",
                  description: "We understand the importance of deadlines and always deliver on time, every time.",
                },
                {
                  icon: Star,
                  title: "Customer Satisfaction",
                  description: "Our commitment to excellence has earned us the trust of hundreds of satisfied customers.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-8 shadow-lg border border-primary/5 text-center hover:border-orange-400/15 transition-colors"
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
                    index % 2 === 0
                      ? 'bg-orange-400/10'
                      : 'bg-primary/10'
                  }`}>
                    <benefit.icon className={`w-8 h-8 ${index % 2 === 0 ? 'text-orange-400' : 'text-primary'}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Our Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A step-by-step approach to delivering quality products.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Sourcing", description: "We carefully select the finest raw materials from trusted local farms." },
                { step: "02", title: "Processing", description: "Our skilled team processes materials using time-tested methods." },
                { step: "03", title: "Quality Check", description: "Every batch is tested to ensure it meets our high standards." },
                { step: "04", title: "Packaging", description: "Products are carefully packaged to maintain freshness and quality." },
              ].map((process, index) => (
                <div key={index} className="relative">
                  <div className="bg-secondary/30 rounded-2xl p-8 text-center border border-primary/5 hover:border-orange-400/15 transition-colors">
                    <div className={`text-5xl font-bold mb-4 ${
                      index % 2 === 0 ? 'text-orange-400/20' : 'text-primary/20'
                    }`}>{process.step}</div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{process.title}</h3>
                    <p className="text-muted-foreground">{process.description}</p>
                  </div>
                  {index < 3 && (
                    <div className={`hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 transform -translate-y-1/2 ${
                      index % 2 === 0 ? 'bg-orange-400/15' : 'bg-primary/15'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary-light/30">
          <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Contact us today to discuss your processing needs and get a custom quote.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="default">
                Request a Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;

