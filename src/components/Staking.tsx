import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Lock, Coins } from "lucide-react";
import { useStakedNFTs } from "@/hooks/useStaking";
import { useAccount } from "wagmi";
import { useTokenBalance } from "@/hooks/useTokenBalance";

const Staking = () => {
  const { isConnected } = useAccount();
  const { stakedTokens } = useStakedNFTs();
  const { balance } = useTokenBalance();

  const scrollToNFTs = () => {
    const el = document.getElementById("nfts");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.hash = "#nfts";
  };

  return (
    <section id="staking" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Staking <span className="text-primary">Options</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            NFT staking is supported for merchant campaigns. Direct staking of FOORG tokens is not available — buy FOORG to purchase NFTs, then stake the NFT to participate.
          </p>
          {isConnected && (
            <div className="mt-4 flex items-center justify-center gap-4">
              <Badge variant="secondary" className="text-sm">
                FOORG Balance: {parseFloat(balance).toFixed(2)}
              </Badge>
              <Badge variant="secondary" className="text-sm">
                Staked NFTs: {stakedTokens.length}
              </Badge>
            </div>
          )}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--accent)/0.2)]">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">NFT Staking</h3>
                <Badge variant="secondary" className="mb-4">Premium NFTs</Badge>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Stake your Foorganic NFTs in exclusive campaigns. Lock your NFT temporarily and receive premium redemption benefits and higher value rewards at partner merchants.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Premium campaign access</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Higher redemption values</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Exclusive merchant partnerships</span>
              </li>
            </ul>
            <Button variant="glass" className="w-full" onClick={scrollToNFTs}>
              Browse NFT Campaigns
            </Button>
          </Card>
          
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border opacity-60">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Coins className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Token Staking</h3>
                <Badge variant="secondary" className="mb-4">FOORG Tokens</Badge>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Direct staking of FOORG tokens is currently disabled. To participate in campaigns, buy FOORG and use it to purchase a Foorganic NFT — NFTs can be staked for premium campaign access and higher redemption values.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Use FOORG to purchase NFTs</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Token staking is unavailable — stake NFTs instead</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full" disabled>
              Token Staking Disabled
            </Button>
          </Card>
        </div>
        
        <div className="text-center">
          <Card className="inline-block p-6 bg-muted/20 border-border">
            <p className="text-sm text-muted-foreground max-w-xl">
              <Lock className="w-4 h-4 inline mr-2" />
              All staking is secured by smart contracts. Your assets are safely locked until redemption or campaign completion.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Staking;
