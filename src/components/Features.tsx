import { CheckCircle2, Play, Pause } from "lucide-react";
import { useState } from "react";
import featuresVideo from "@/assets/A_realistic_cinematic_202512271326_yamfd.mp4";

const features = [
  "Hygienically processed in modern facilities",
  "Trusted sourcing from verified farms",
  "Quality packaging for freshness",
  "Reliable and timely supply chain",
];

export const Features = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (videoRef) {
      if (isPlaying) {
        videoRef.pause();
      } else {
        videoRef.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="products" className="section-padding bg-background relative overflow-hidden">
      {/* Curved Divider at Top */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 55C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0Z"
            fill="hsl(45, 25%, 97%)"
          />
        </svg>
      </div>

      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-secondary/30 -z-10" />

      {/* Organic Shape Accents */}
      <div className="absolute top-40 -left-20 w-40 h-40 bg-primary/5 organic-blob -z-10 hidden lg:block" />
      <div className="absolute bottom-40 -right-20 w-60 h-60 bg-accent/5 organic-blob-2 -z-10 hidden lg:block" />

      <div className="container-custom mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span 
              className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              Why Choose Us
            </span>
            
            <h2 
              className="text-display-sm text-foreground mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              We Want To Help You{" "}
              <span className="text-primary relative inline-block">
                Grow With Quality Produce
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-primary/20 rounded-full" />
              </span>
            </h2>

            <p 
              className="text-muted-foreground text-lg leading-relaxed mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              What makes us different? It's in the details. We don't just process—we curate. 
              Every batch undergoes rigorous quality checks, and our supply chain is designed 
              for speed without compromising freshness. When you choose Netcross, you're choosing 
              a partner who cares as much about your success as we do about our crops.
            </p>

            {/* Feature List - Asymmetric Staggered */}
            <div 
              className="space-y-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-4 p-5 rounded-2xl bg-card border border-primary/5 transform transition-all duration-300 ${
                    index % 2 === 0 ? 'translate-x-0' : 'translate-x-4'
                  } hover:translate-x-0 hover:scale-[1.02]`}
                >
                  {/* Styled Check Icon Container - Rotated */}
                  <div className="flex-shrink-0 relative">
                    <div className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center transform ${
                      index % 2 === 0 ? 'rotate-6' : '-rotate-6'
                    }`}>
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm transform -rotate-6">
                        <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                      </div>
                    </div>
                    {/* Decorative Ring - Animated */}
                    <div className="absolute inset-0 rounded-full border-2 border-primary/10 scale-125" />
                  </div>
                  <span className="text-foreground font-medium pt-2.5">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Video/Image Section */}
          <div 
            className="order-1 lg:order-2 relative opacity-0 animate-scale-in"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            {/* Decorative Circular Accent Behind Media */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full -z-10 blur-3xl" />

            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-background">
              {/* Video */}
              <video
                ref={setVideoRef}
                src={featuresVideo}
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loop
                muted
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
              
              {/* Enhanced Play/Pause Button Overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center z-20">
                  <button 
                    onClick={togglePlay}
                    className="relative w-24 h-24 rounded-full bg-primary flex items-center justify-center shadow-2xl"
                  >
                    {/* Ripple Effect */}
                    <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
                    
                    {/* Play Icon */}
                    <div className="relative z-10">
                      <Play className="w-10 h-10 text-primary-foreground ml-1" />
                    </div>
                    
                    {/* Outer Ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-primary-foreground/20 scale-125" />
                  </button>
                </div>
              )}
              
              {/* Pause Button - Appears when playing */}
              {isPlaying && (
                <div className="absolute bottom-4 right-4 z-20">
                  <button 
                    onClick={togglePlay}
                    className="w-14 h-14 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
                  >
                    <Pause className="w-6 h-6 text-primary-foreground" />
                  </button>
                </div>
              )}
            </div>

            {/* Enhanced Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 organic-blob shadow-lg -z-10" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/10 organic-blob-2 shadow-lg -z-10" />
            <div className="absolute top-1/4 -right-12 w-16 h-16 bg-accent/15 organic-blob-3 -z-10 hidden lg:block" />
          </div>
        </div>
      </div>

      {/* Curved Divider at Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(45, 25%, 97%)"
          />
        </svg>
      </div>
    </section>
  );
};