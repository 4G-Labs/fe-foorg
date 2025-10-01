import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Lock, Coins } from "lucide-react";

const Staking = () => {
  return (
    <section id="staking" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Stake Your <span className="text-primary">Tokens</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Lock your tokens to earn rewards while funding foorganice's growth and operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Lock & Earn</h3>
            <p className="text-muted-foreground mb-4">
              Stake your tokens for flexible periods and earn competitive APY rewards
            </p>
            <div className="text-2xl font-bold text-primary">Up to 12% APY</div>
          </Card>
          
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--accent)/0.2)]">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fund Growth</h3>
            <p className="text-muted-foreground mb-4">
              Your stake powers foorganice operations and agency development
            </p>
            <div className="text-2xl font-bold text-accent">100% Transparent</div>
          </Card>
          
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Coins className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Unlock NFTs</h3>
            <p className="text-muted-foreground mb-4">
              Use your rewards to swap for exclusive NFTs from our collection
            </p>
            <div className="text-2xl font-bold text-primary">Premium Access</div>
          </Card>
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="lg">
            Start Staking Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Staking;
