import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { QrCode, CheckCircle, Coins, Image } from "lucide-react";

const RedemptionScanner = () => {
  const [code, setCode] = useState("");
  const [scannedItem, setScannedItem] = useState<any>(null);

  // Mock data for demonstration
  const mockStakedItems: Record<string, any> = {
    "TOKEN-001": {
      type: "token",
      amount: "1000 FOORG",
      user: "0x742d...35Bd",
      campaign: "Coffee Shop Rewards",
      stakedDate: "2025-01-10",
      value: "$50.00"
    },
    "NFT-001": {
      type: "nft",
      name: "Premium Access NFT #342",
      user: "0x89aB...7cD2",
      campaign: "VIP Restaurant Access",
      stakedDate: "2025-01-08",
      value: "$75.00"
    }
  };

  const handleScan = () => {
    if (!code.trim()) {
      toast.error("Please enter a code or token id");
      return;
    }

    const item = mockStakedItems[code];
    if (item) {
      setScannedItem(item);
      toast.success("Code validated successfully!");
    } else {
      toast.error("Invalid code or item not found");
      setScannedItem(null);
    }
  };

  const handleRedeem = () => {
    if (!scannedItem) return;

    toast.success("Item redeemed successfully!", {
      description: `${scannedItem.type === "token" ? scannedItem.amount : scannedItem.name} has been redeemed and ${scannedItem.type === "token" ? "FOORG credited" : "NFT benefits applied"}.`
    });
    
    setCode("");
    setScannedItem(null);
  };

  return (
    <div className="space-y-6">
  {/* Code / Token Input Section */}
      <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-border rounded-lg bg-muted/20">
        <QrCode className="h-16 w-16 text-muted-foreground mb-4" />
        <p className="text-sm text-muted-foreground mb-4">
          Validate a redemption code or token id from the user
        </p>
        
        <div className="w-full max-w-md space-y-4">
          <div className="space-y-2">
            <Label htmlFor="code">Code / Token ID</Label>
            <Input
              id="code"
              placeholder="Enter code (e.g., TOKEN-001 or NFT-001)"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleScan()}
            />
          </div>
          <Button onClick={handleScan} className="w-full">
            Validate Code
          </Button>
        </div>
      </div>

      {/* Scanned Item Display */}
      {scannedItem && (
        <Card className="p-6 border-primary/50">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              {scannedItem.type === "token" ? (
                <Coins className="h-8 w-8 text-primary" />
              ) : (
                <Image className="h-8 w-8 text-primary" />
              )}
              <div>
                <h3 className="font-semibold text-lg">
                  {scannedItem.type === "token" ? scannedItem.amount : scannedItem.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Campaign: {scannedItem.campaign}
                </p>
              </div>
            </div>
            <Badge variant="secondary" className="capitalize">
              {scannedItem.type}
            </Badge>
          </div>

          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">User Wallet:</span>
              <span className="font-mono">{scannedItem.user}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Staked Date:</span>
              <span>{scannedItem.stakedDate}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Redemption Value:</span>
              <span className="font-semibold text-primary">{scannedItem.value}</span>
            </div>
          </div>

          <Button onClick={handleRedeem} className="w-full" size="lg">
            <CheckCircle className="mr-2 h-5 w-5" />
            Redeem Now
          </Button>
        </Card>
      )}

      {/* Demo Instructions */}
      <div className="bg-muted/30 rounded-lg p-4">
        <p className="text-xs text-muted-foreground">
          <strong>Demo codes:</strong> Try "TOKEN-001" for token or "NFT-001" for NFT
        </p>
      </div>
    </div>
  );
};

export default RedemptionScanner;
