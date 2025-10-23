import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Coins, Image, Search, CheckCircle } from "lucide-react";

interface HistoryItem {
  id: string;
  type: "token" | "nft";
  name: string;
  user: string;
  campaign: string;
  redeemedDate: string;
  value: string;
  status: "completed" | "pending";
}

const RedemptionHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<string>("all");

  // Mock data
  const historyItems: HistoryItem[] = [
    {
      id: "1",
      type: "token",
      name: "1500 FOORG",
      user: "0x3c4d...12Ef",
      campaign: "Coffee Shop Rewards",
      redeemedDate: "2025-01-12 14:30",
      value: "$75.00",
      status: "completed"
    },
    {
      id: "2",
      type: "nft",
      name: "Premium Access NFT #201",
      user: "0xAb9F...44Ce",
      campaign: "VIP Restaurant Access",
      redeemedDate: "2025-01-12 12:15",
      value: "$75.00",
      status: "completed"
    },
    {
      id: "3",
      type: "token",
      name: "800 FOORG",
      user: "0x5e2a...78Bd",
      campaign: "Retail Discounts",
      redeemedDate: "2025-01-11 18:45",
      value: "$40.00",
      status: "completed"
    },
    {
      id: "4",
      type: "nft",
      name: "Gold Member NFT #087",
      user: "0xFf1c...93Da",
      campaign: "Spa & Wellness",
      redeemedDate: "2025-01-11 16:20",
      value: "$100.00",
      status: "completed"
    },
    {
      id: "5",
      type: "token",
      name: "2000 FOORG",
      user: "0x8b7e...56Ac",
      campaign: "Coffee Shop Rewards",
      redeemedDate: "2025-01-11 10:30",
      value: "$100.00",
      status: "completed"
    },
    {
      id: "6",
      type: "token",
      name: "600 FOORG",
      user: "0x2d9a...41Bf",
      campaign: "Retail Discounts",
      redeemedDate: "2025-01-10 15:00",
      value: "$30.00",
      status: "completed"
    }
  ];

  const filteredItems = historyItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.campaign.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = filterType === "all" || item.type === filterType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search history..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={filterType} onValueChange={setFilterType}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="token">Tokens</SelectItem>
            <SelectItem value="nft">NFTs</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* History List */}
      <div className="space-y-3">
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <CheckCircle className="h-12 w-12 mx-auto mb-3 opacity-50" />
            <p>No redemption history found</p>
          </div>
        ) : (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border border-border rounded-lg bg-card"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center">
                  {item.type === "token" ? (
                    <Coins className="h-6 w-6 text-primary" />
                  ) : (
                    <Image className="h-6 w-6 text-primary" />
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold truncate">{item.name}</h4>
                    <Badge variant="secondary" className="capitalize text-xs flex-shrink-0">
                      {item.type}
                    </Badge>
                    <Badge variant="outline" className="text-xs flex-shrink-0">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      {item.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">
                    {item.campaign}
                  </p>
                  <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                    <span className="truncate">User: {item.user}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="hidden sm:inline">{item.redeemedDate}</span>
                  </div>
                </div>
              </div>

              <div className="text-right ml-4 flex-shrink-0">
                <div className="font-semibold text-primary">{item.value}</div>
                <div className="text-xs text-muted-foreground sm:hidden mt-1">
                  {item.redeemedDate.split(' ')[0]}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {filteredItems.length > 0 && (
        <p className="text-sm text-muted-foreground text-center pt-2">
          Showing {filteredItems.length} redemption(s)
        </p>
      )}
    </div>
  );
};

export default RedemptionHistory;
