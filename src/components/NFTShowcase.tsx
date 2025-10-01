import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

const NFTShowcase = () => {
  const nfts = [
    {
      id: 1,
      name: "Genesis Founder",
      price: "1000 FORG",
      rarity: "Legendary",
      image: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Digital Pioneer",
      price: "500 FORG",
      rarity: "Epic",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Creative Visionary",
      price: "250 FORG",
      rarity: "Rare",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&h=400&fit=crop"
    }
  ];
  
  return (
    <section id="nfts" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Exclusive <span className="text-accent">NFT Collection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Swap your tokens for premium digital assets with unique utilities and benefits
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {nfts.map((nft) => (
            <Card key={nft.id} className="overflow-hidden bg-card/30 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300 group">
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={nft.image} 
                  alt={nft.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary/90 backdrop-blur-sm">
                    {nft.rarity}
                  </Badge>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{nft.name}</h3>
                  <div className="flex items-center gap-2 text-accent font-semibold">
                    <Sparkles className="w-4 h-4" />
                    {nft.price}
                  </div>
                </div>
                <Button variant="glass" className="w-full">
                  Swap Tokens
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg">
            View Full Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NFTShowcase;
