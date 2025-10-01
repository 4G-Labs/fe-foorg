import { Card } from "@/components/ui/card";
import { Shield, Users, Zap, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Transparent & Secure",
      description: "Full transparency in how staked funds power our agency operations with enterprise-grade security"
    },
    {
      icon: Users,
      title: "Community First",
      description: "Our success is your success. We grow together through aligned incentives and shared rewards"
    },
    {
      icon: Zap,
      title: "Innovation Driven",
      description: "Combining cutting-edge Web3 technology with proven digital agency expertise"
    },
    {
      icon: Target,
      title: "Results Focused",
      description: "Delivering exceptional value to both our stakers and our agency clients"
    }
  ];
  
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary">foorganic</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                We're pioneering a new model where digital agency growth is powered by community investment through Web3 technology.
              </p>
              <p>
                When you stake with foorganic, you're not just earning rewards - you're directly funding innovative digital projects and gaining access to exclusive NFTs that represent your role in our ecosystem.
              </p>
              <p>
                Our hybrid model combines traditional agency services with decentralized finance, creating sustainable value for everyone involved.
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
                    <div className="text-3xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Funded</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">98%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
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
