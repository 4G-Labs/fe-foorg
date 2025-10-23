import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Wallet } from "lucide-react";
import { useUserNFTs } from "@/hooks/useNFTs";
import { useTokenBalance } from "@/hooks/useTokenBalance";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { useStakeNFT } from "@/hooks/useStaking";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { CONTRACTS, BLOCK_EXPLORER } from "@/lib/contracts";
import { ERC20_ABI, NFT_SALE_ABI } from "@/lib/abis";
import { parseUnits } from "viem";

const NFTShowcase = () => {
  const { address, isConnected } = useAccount();
  const { nfts, isLoading: nftsLoading, balance: nftBalance } = useUserNFTs();
  const { balance, balanceRaw } = useTokenBalance();
  const { stakeNFT, isPending, isSuccess } = useStakeNFT();
  const { toast } = useToast();
  const [isPurchasing, setIsPurchasing] = useState(false);
  
  // Read current allowance of FOORG tokens to the NFT Marketplace contract
  const { data: allowanceData } = useReadContract({
    address: CONTRACTS.FOORG_TOKEN,
    abi: ERC20_ABI,
    functionName: 'allowance',
    args: address ? [address, CONTRACTS.NFT_MARKETPLACE] : undefined,
  } as any);

  // Single write hook used for approve and purchase calls
  const { writeContractAsync, data: txHash } = useWriteContract();

  const handlePurchaseNFT = (nftId: number, price: string) => {
    (async () => {
      try {
        setIsPurchasing(true);

        // price like "1000 FOORG" -> extract numeric
        const numeric = Number(price.split(" ")[0]);
        const amount = parseUnits(numeric.toString(), 18);

        // check user's FOORG balance
        if (!balanceRaw || balanceRaw < amount) {
          toast({ title: 'Insufficient FOORG', description: `You need ${numeric} FOORG to purchase this NFT.`, variant: 'destructive' });
          setIsPurchasing(false);
          return;
        }

        const allowance = (allowanceData as bigint) || BigInt(0);

        if (allowance < amount) {
          // request approval
          const approveResp = await writeContractAsync({
            address: CONTRACTS.FOORG_TOKEN,
            abi: ERC20_ABI,
            functionName: 'approve',
            args: [CONTRACTS.NFT_MARKETPLACE, amount],
          } as any);

          // If the response includes a wait() method (ethers TransactionResponse), wait for it
          if (approveResp && typeof (approveResp as any).wait === 'function') {
            toast({ title: 'Approval submitted', description: `Waiting for approval to be mined...` });
            await (approveResp as any).wait();
            toast({ title: 'Approval confirmed', description: `Approval transaction mined` });
          }
        }

        // After approval (or if allowance already sufficient), call purchase
        const purchaseResp = await writeContractAsync({
          address: CONTRACTS.NFT_MARKETPLACE,
          abi: NFT_SALE_ABI,
          functionName: 'purchase',
          args: [BigInt(nftId)],
        } as any);

        const purchaseHash = (purchaseResp as any)?.hash ?? purchaseResp;
        toast({ title: 'Purchase submitted', description: purchaseHash ? `Tx: ${purchaseHash}` : `Token ${nftId} purchase submitted` });
      } catch (error: any) {
        // Try to extract transaction hash from various error shapes
        const txHash = error?.transactionHash ?? error?.hash ?? error?.receipt?.transactionHash ?? error?.cause?.receipt?.transactionHash;
        const explorerLink = txHash ? BLOCK_EXPLORER.tx(txHash as string) : undefined;

        console.error('Purchase error', error);
        toast({
          title: 'Purchase failed',
          description: error?.message || 'Could not purchase NFT',
          variant: 'destructive',
        });

        if (txHash) {
          // show explorer link in console and as a toast
          console.info('Tx hash:', txHash, 'Explorer:', explorerLink);
          toast({ title: 'View transaction', description: explorerLink });
        }
      } finally {
        setIsPurchasing(false);
      }
    })();
  };

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: 'Success!',
        description: 'NFT staked successfully',
      });
    }
  }, [isSuccess, toast]);

  // Mock NFTs for display - replace with real data when contract supports enumeration
  const displayNFTs = nftBalance > 0 ? Array.from({ length: nftBalance }, (_, i) => ({
    tokenId: (i + 1).toString(),
    tokenURI: '',
  })) : [];

  const mockNFTs = [
    {
      id: 1,
      name: "Platinum Member",
      price: "1000 FOORG",
      rarity: "Legendary",
      image: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?w=400&h=400&fit=crop",
      benefit: "2x Redemption Value"
    },
    {
      id: 2,
      name: "Gold Member",
      price: "500 FOORG",
      rarity: "Epic",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop",
      benefit: "1.5x Redemption Value"
    },
    {
      id: 3,
      name: "Silver Member",
      price: "250 FOORG",
      rarity: "Rare",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&h=400&fit=crop",
      benefit: "Premium Campaigns"
    }
  ];
  
  return (
    <section id="nfts" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-accent">NFTs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Own premium NFTs that unlock exclusive staking campaigns and higher redemption values at partner merchants
          </p>
          {isConnected && (
            <div className="mt-4 flex items-center justify-center gap-4 text-sm">
              <Badge variant="secondary">
                Your Balance: {parseFloat(balance).toFixed(2)} FOORG
              </Badge>
              <Badge variant="secondary">
                NFTs Owned: {nftBalance}
              </Badge>
            </div>
          )}
        </div>

        {/* Show user's owned NFTs if connected and has NFTs */}
        {isConnected && nftBalance > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Your NFTs</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {displayNFTs.map((nft) => (
                <Card key={nft.tokenId} className="overflow-hidden bg-card/30 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
                  <div className="relative overflow-hidden aspect-square bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Sparkles className="w-12 h-12 mx-auto mb-2 text-primary" />
                        <p className="text-sm text-muted-foreground">Token #{nft.tokenId}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Foorganic NFT</h3>
                      <p className="text-sm text-muted-foreground">Token ID: {nft.tokenId}</p>
                    </div>
                    <Button 
                      variant="glass" 
                      className="w-full"
                      onClick={() => stakeNFT(BigInt(nft.tokenId))}
                      disabled={isPending}
                    >
                      {isPending ? 'Staking...' : 'Stake NFT'}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
        
        {/* Available NFTs for purchase */}
        <h3 className="text-2xl font-semibold mb-6 text-center">
          {isConnected && nftBalance > 0 ? 'Available NFTs' : 'Featured NFTs'}
        </h3>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {mockNFTs.map((nft) => (
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
                  <div className="flex items-center gap-2 text-accent font-semibold mb-2">
                    <Sparkles className="w-4 h-4" />
                    {nft.price}
                  </div>
                  <p className="text-sm text-muted-foreground">{nft.benefit}</p>
                </div>
                {isConnected ? (
                  <Button 
                    variant="glass" 
                    className="w-full"
                    onClick={() => handlePurchaseNFT(nft.id, nft.price)}
                    disabled={isPurchasing}
                  >
                    {isPurchasing ? 'Processing...' : 'Purchase NFT'}
                  </Button>
                ) : (
                  <Button variant="glass" className="w-full gap-2">
                    <Wallet className="w-4 h-4" />
                    Connect Wallet to Purchase
                  </Button>
                )}
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
