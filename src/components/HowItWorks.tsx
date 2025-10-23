import { Card } from "@/components/ui/card";
import { Coins, Store, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Coins,
      number: "01",
      title: "Stake Your Assets",
      description: "Choose a merchant campaign and stake your tokens or NFTs. Your assets are locked securely in the smart contract for the campaign duration.",
      color: "primary"
    },
    {
      icon: Coins,
      number: "02",
      title: "Receive FOORG Tokens",
      description: "Receive $FOORG tokens as staking rewards or as a redemption currency tied to your staked assets. These tokens can be used at participating merchants.",
      color: "accent"
    },
    {
      icon: Store,
      number: "03",
      title: "Redeem at Merchants",
      description: "Present your $FOORG tokens at partner merchants or have the merchant validate the token redemption. Your staked assets are released after successful redemption.",
      color: "primary"
    }
  ];
  
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-accent">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps from staking to redemption
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-24 left-full w-8 -ml-4 z-0">
                    <ArrowRight className="w-8 h-8 text-muted-foreground/30" />
                  </div>
                )}
                
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 relative z-10 h-full">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`w-16 h-16 rounded-full bg-${step.color}/10 flex items-center justify-center`}>
                      <step.icon className={`w-8 h-8 text-${step.color}`} />
                    </div>
                    
                    <div className="text-4xl font-bold text-muted-foreground/20">
                      {step.number}
                    </div>
                    
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <Card className="inline-block p-6 bg-primary/5 border-primary/20">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-primary">Note:</span> Both token and NFT staking work the same way. Choose campaigns that match your interests and start earning real-world rewards!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
