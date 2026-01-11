import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, Leaf, Heart, TrendingUp, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import aboutPageHero from "@/assets/about-page-hero.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import fromSeedToTable from "@/assets/from-seed-to-table.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={aboutPageHero}
              alt="Agricultural team working together"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-[hsl(150,30%,10%,0.7)]" />
          </div>
          <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6 px-2">
              About Netcross Agro Farm
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto px-4">
              Rooted in tradition, growing with innovation
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full text-primary text-xs sm:text-sm font-medium border border-primary/15">
                  <Leaf className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  Our Story
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  From Seed to Table, We're With You Every Step
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Founded in 2010, Netcross Agro Farm began as a small family operation with a simple mission: 
                  to bring authentic, high-quality agricultural products to Nigerian families. What started as 
                  a passion project has grown into a trusted name in the agro-processing industry.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Today, we process over 50 tons of cassava monthly, serving hundreds of families and businesses 
                  across the region. Our commitment to quality, sustainability, and community remains unchanged—we 
                  believe that good food starts with good farming.
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-orange-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-foreground">15+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base text-foreground">500+ Happy Clients</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-orange-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-foreground">Sustainable Practices</span>
                  </div>
                </div>
              </div>
              <div className="relative mt-8 lg:mt-0">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={fromSeedToTable}
                    alt="From seed to table journey"
                    className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary/10 backdrop-blur-sm p-6 rounded-2xl border border-primary/15 shadow-xl hidden lg:block">
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Tons Monthly</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-400/10 to-primary/10 rounded-full text-primary text-sm font-medium mb-4 border border-orange-400/15">
                <Heart className="w-4 h-4" />
                Our Values
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                What Drives Us Every Day
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do, from how we farm to how we serve our customers.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  icon: Leaf,
                  title: "Sustainability",
                  description: "We practice eco-friendly farming methods that preserve the land for future generations.",
                },
                {
                  icon: Award,
                  title: "Quality First",
                  description: "Every product undergoes rigorous quality checks to ensure you get the best.",
                },
                {
                  icon: Users,
                  title: "Community",
                  description: "We're committed to supporting local farmers and strengthening our community.",
                },
                {
                  icon: TrendingUp,
                  title: "Innovation",
                  description: "We continuously improve our processes while honoring traditional methods.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-background rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg border border-primary/5 hover:shadow-xl transition-all duration-300 hover:border-orange-400/15"
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-6 ${
                    index % 2 === 0 
                      ? 'bg-orange-400/10' 
                      : 'bg-primary/10'
                  }`}>
                    <value.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${index % 2 === 0 ? 'text-orange-400' : 'text-primary'}`} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{value.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={aboutTeam}
                    alt="Our dedicated team"
                    className="w-full h-[500px] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                </div>
                <div className="absolute -top-6 -left-6 bg-primary/10 backdrop-blur-sm p-6 rounded-2xl border border-primary/15 shadow-xl hidden lg:block">
                  <div className="text-3xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Team Members</div>
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                  <Users className="w-4 h-4" />
                  Our Team
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                  Meet the People Behind the Products
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our team is the heart of Netcross Agro Farm. From our experienced farmers who tend the fields 
                  with care, to our skilled processors who transform raw cassava into premium garri, every member 
                  plays a crucial role in delivering quality products.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We invest in training and development, ensuring our team stays updated with the latest agricultural 
                  practices while maintaining the traditional knowledge passed down through generations. Their dedication 
                  and expertise are what make our products stand out.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="mt-4">
                    Join Our Team
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary-light/30">
          <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Ready to Experience Quality?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover our range of premium agro products and see why families trust Netcross Agro Farm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="lg" variant="default">
                  View Our Products
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;



