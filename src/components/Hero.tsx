import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Literary society library background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-poppins text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up text-balance">
          Welcome to the University Literary Society
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-in-up">
          Discover the joy of literature, engage with fellow enthusiasts, and be part of a vibrant community of readers and writers
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-6 text-lg"
            onClick={() => navigate("/contact")}
          >
            Join the Society
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-background/10 text-primary-foreground border-primary-foreground/30 hover:bg-background/20 backdrop-blur-sm font-semibold px-8 py-6 text-lg"
            onClick={() => navigate("/events")}
          >
            Discover Our Events
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
