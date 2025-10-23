import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Coins, Image, Search, Clock } from "lucide-react";

interface StakedItem {
  id: string;
  type: "token" | "nft";
  name: string;
  user: string;
  campaign: string;
  stakedDate: string;
  value: string;
}

const StakedItemsList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data
  const stakedItems: StakedItem[] = [
    {
      id: "1",
      type: "token",
      name: "1000 FOORG",
      user: "0x742d...35Bd",
      campaign: "Coffee Shop Rewards",
      stakedDate: "2025-01-10",
      value: "$50.00",
    },
    {
      id: "2",
      type: "nft",
      name: "Premium Access NFT #342",
      user: "0x89aB...7cD2",
      campaign: "VIP Restaurant Access",
      stakedDate: "2025-01-08",
      value: "$75.00"
    },
    {
      id: "3",
      type: "token",
      name: "500 FOORG",
      user: "0x1f3a...9B2c",
      campaign: "Retail Discounts",
      stakedDate: "2025-01-12",
      value: "$25.00"
    },
    {
      id: "4",
      type: "nft",
      name: "Gold Member NFT #128",
      user: "0xDe4F...82Aa",
      campaign: "Spa & Wellness",
      stakedDate: "2025-01-09",
      value: "$100.00"
    }
  ];

  const filteredItems = stakedItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.campaign.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by user, campaign, or item..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Items List */}
      <div className="space-y-3">
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <Clock className="h-12 w-12 mx-auto mb-3 opacity-50" />
            <p>No pending items found</p>
          </div>
        ) : (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-primary/50 transition-colors bg-card"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center">
                  {item.type === "token" ? (
                    <Coins className="h-6 w-6 text-primary" />
                  ) : (
                    <Image className="h-6 w-6 text-primary" />
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold">{item.name}</h4>
                    <Badge variant="secondary" className="capitalize text-xs">
                      {item.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {item.campaign}
                  </p>
                  <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                    <span>User: {item.user}</span>
                    <span>•</span>
                    <span>Staked: {item.stakedDate}</span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="font-semibold text-primary mb-2">{item.value}</div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                  <Button size="sm" variant="ghost">
                    Show FOORG
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {filteredItems.length > 0 && (
        <p className="text-sm text-muted-foreground text-center pt-2">
          Showing {filteredItems.length} item(s)
        </p>
      )}
    </div>
  );
};

export default StakedItemsList;
