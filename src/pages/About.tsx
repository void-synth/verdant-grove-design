import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, Leaf, Heart, TrendingUp, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import aboutPageHero from "@/assets/about-page-hero.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import aboutFarm from "@/assets/about-farm.jpg";

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
          <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
              About Netcross Agro Farm
            </h1>
            <p className="text-xl sm:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Rooted in tradition, growing with innovation
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                  <Leaf className="w-4 h-4" />
                  Our Story
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                  From Seed to Table, We're With You Every Step
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded in 2010, Netcross Agro Farm began as a small family operation with a simple mission: 
                  to bring authentic, high-quality agricultural products to Nigerian families. What started as 
                  a passion project has grown into a trusted name in the agro-processing industry.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, we process over 50 tons of cassava monthly, serving hundreds of families and businesses 
                  across the region. Our commitment to quality, sustainability, and community remains unchanged—we 
                  believe that good food starts with good farming.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-foreground">15+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-foreground">500+ Happy Clients</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Sustainable Practices</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={aboutFarm}
                    alt="Our farm operations"
                    className="w-full h-[500px] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary/10 backdrop-blur-sm p-6 rounded-2xl border border-primary/20 shadow-xl hidden lg:block">
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  className="bg-background rounded-2xl p-8 shadow-lg border border-primary/5 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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
                <div className="absolute -top-6 -left-6 bg-accent/10 backdrop-blur-sm p-6 rounded-2xl border border-accent/20 shadow-xl hidden lg:block">
                  <div className="text-3xl font-bold text-accent mb-1">15+</div>
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
        <section className="section-padding bg-primary/5">
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

