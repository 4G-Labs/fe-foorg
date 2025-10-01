import { Card } from "@/components/ui/card";
import { Wallet, ArrowRight, RefreshCw, Image } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Wallet,
      title: "Buy FORG Tokens",
      description: "Purchase foorganice tokens through our platform using crypto or fiat"
    },
    {
      icon: RefreshCw,
      title: "Stake & Earn",
      description: "Lock your tokens in staking pools to earn rewards and fund our agency"
    },
    {
      icon: Image,
      title: "Swap for NFTs",
      description: "Use your earned tokens to acquire exclusive NFTs from our collection"
    }
  ];
  
  return (
    <section id="how-it-works" className="py-24 relative bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to join the foorganice ecosystem
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border text-center h-full hover:border-primary/50 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-semibold text-accent mb-3">Step {index + 1}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-primary/50" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
