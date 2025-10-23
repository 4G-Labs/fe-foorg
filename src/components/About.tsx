import { Card } from "@/components/ui/card";
import { Shield, Users, Zap, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Secure & Transparent",
      description: "Smart contract-based staking ensures your assets are safe and all transactions are verifiable on-chain"
    },
    {
      icon: Users,
      title: "Win-Win Economy",
      description: "Users earn real rewards while merchants gain engaged customers and upfront campaign funding"
    },
    {
      icon: Zap,
      title: "Real-World Utility",
      description: "Bridge the gap between crypto and commerce with tangible products and services you can redeem"
    },
    {
      icon: Target,
      title: "Growing Network",
      description: "Expanding merchant partnerships across categories - from dining and retail to entertainment and wellness"
    }
  ];
  
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary">Foorganic</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Foorganic connects users and merchants through a revolutionary staking-to-redemption platform powered by blockchain technology.
              </p>
              <p>
                Users stake tokens or NFTs in merchant campaigns and receive $FOORG tokens (or equivalent redemption credits) to redeem real products and services. Merchants gain engaged customers and upfront capital, while users enjoy tangible rewards for their participation.
              </p>
              <p>
                Our platform creates a win-win ecosystem where blockchain meets real-world commerce, delivering value to both sides of every transaction.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-border p-8 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  $2.5M+
                </div>
                <div className="text-xl text-foreground">Total Value Staked</div>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div>
                    <div className="text-3xl font-bold text-primary">200+</div>
                    <div className="text-sm text-muted-foreground">Partner Merchants</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">15K+</div>
                    <div className="text-sm text-muted-foreground">Redemptions Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
