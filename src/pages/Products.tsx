import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, Star, CheckCircle2, Package, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import productsPageHero from "@/assets/products-page-hero.jpg";
import garriImage from "@/assets/garri.jpg";
import cassavaImage from "@/assets/cassava.jpg";
import maizeImage from "@/assets/maize.jpg";
import giftPackagesImage from "@/assets/gift-packages.jpg";
import bulkImage from "@/assets/bulk.jpg";

const Products = () => {
  const products = [
    {
      name: "Premium Garri",
      category: "Cassava Products",
      description: "Our signature crispy garri, processed the traditional way with modern hygiene standards. Perfect for your family meals or commercial needs.",
      features: [
        "Crispy golden texture",
        "Traditional processing",
        "Hygienic production",
        "Available in bulk",
      ],
      image: garriImage,
      price: "From ₦2,500/kg",
    },
    {
      name: "Fresh Cassava Roots",
      category: "Raw Products",
      description: "Freshly harvested cassava roots, sourced directly from our farms. Perfect for those who prefer to process at home.",
      features: [
        "Freshly harvested",
        "Direct from farm",
        "Premium quality",
        "Bulk orders available",
      ],
      image: cassavaImage,
      price: "From ₦1,200/kg",
    },
    {
      name: "Maize Flour",
      category: "Grain Products",
      description: "Finely milled maize flour from handpicked grains. Perfect for making tuwo, pap, and other traditional dishes.",
      features: [
        "Finely milled",
        "Handpicked grains",
        "Versatile usage",
        "Fresh packaging",
      ],
      image: maizeImage,
      price: "From ₦1,800/kg",
    },
    {
      name: "Cassava Starch",
      category: "Processed Products",
      description: "High-quality cassava starch, perfect for industrial use or home cooking. Processed with care to maintain purity.",
      features: [
        "High purity",
        "Industrial grade",
        "Consistent quality",
        "Bulk packaging",
      ],
      image: cassavaImage,
      price: "From ₦3,000/kg",
    },
    {
      name: "Gift Packages",
      category: "Souvenirs",
      description: "Beautifully packaged gift sets perfect for special occasions. Includes our premium products in elegant packaging.",
      features: [
        "Elegant packaging",
        "Premium products",
        "Customizable",
        "Perfect for gifts",
      ],
      image: giftPackagesImage,
      price: "From ₦5,000",
    },
    {
      name: "Bulk Orders",
      category: "Wholesale",
      description: "Special pricing for bulk orders. Perfect for businesses, restaurants, and large families. Custom packaging available.",
      features: [
        "Volume discounts",
        "Custom packaging",
        "Flexible quantities",
        "Reliable supply",
      ],
      image: bulkImage,
      price: "Contact for pricing",
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
              src={productsPageHero}
              alt="Fresh farm produce display"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-[hsl(150,30%,10%,0.7)]" />
          </div>
          <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
              Our Products
            </h1>
            <p className="text-xl sm:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Premium agro products, from our farm to your table
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                <ShoppingBag className="w-4 h-4" />
                Product Catalog
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Quality Products You Can Trust
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our range of premium agro products, each crafted with care and attention to detail.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="group bg-background rounded-3xl overflow-hidden shadow-lg border border-primary/5 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className="bg-primary/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-primary border border-primary/30">
                        {product.category}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{product.description}</p>
                    <ul className="space-y-2 mb-4">
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between pt-4 border-t border-primary/5">
                      <span className="text-lg font-bold text-primary">{product.price}</span>
                      <Link to="/contact">
                        <Button size="sm" variant="outline">
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                  <Star className="w-4 h-4" />
                  Quality Assurance
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                  Every Product Meets Our High Standards
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We take quality seriously. Every product that leaves our facility has been carefully 
                  inspected and tested to ensure it meets our rigorous standards. From sourcing to 
                  packaging, we maintain strict quality control at every step.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-background rounded-xl p-4 border border-primary/5">
                    <Package className="w-8 h-8 text-primary mb-2" />
                    <div className="font-bold text-foreground">Fresh Packaging</div>
                    <div className="text-sm text-muted-foreground">Maintains quality</div>
                  </div>
                  <div className="bg-background rounded-xl p-4 border border-primary/5">
                    <Truck className="w-8 h-8 text-primary mb-2" />
                    <div className="font-bold text-foreground">Fast Delivery</div>
                    <div className="text-sm text-muted-foreground">Reliable service</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80"
                    alt="Quality control process"
                    className="w-full h-[500px] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary/5">
          <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Ready to Order?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Contact us today to place your order or request more information about our products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="default">
                  Place an Order
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

export default Products;



