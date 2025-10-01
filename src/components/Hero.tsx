import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/30 backdrop-blur-md border border-border">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Digital Agency Meets Web3</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Stake, Earn, and Own
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Premium NFTs
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join foorganice - where your stake powers our growth and your rewards unlock exclusive digital assets. Buy tokens, earn through staking, and swap for premium NFTs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="gap-2">
              Start Staking
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="glass" size="lg">
              Explore NFTs
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">12%</div>
              <div className="text-sm text-muted-foreground">APY Staking</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">500+</div>
              <div className="text-sm text-muted-foreground">NFTs Available</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">2.5K+</div>
              <div className="text-sm text-muted-foreground">Active Stakers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
