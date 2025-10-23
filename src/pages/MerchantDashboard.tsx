import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import RedemptionScanner from "@/components/merchant/RedemptionScanner";
import StakedItemsList from "@/components/merchant/StakedItemsList";
import RedemptionHistory from "@/components/merchant/RedemptionHistory";
import { Store, TrendingUp, Clock, CheckCircle } from "lucide-react";

const MerchantDashboard = () => {
  const [stats] = useState({
    totalRedemptions: 142,
    pendingRedemptions: 8,
    todayRedemptions: 12,
    successRate: 98.5
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Store className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">Merchant Dashboard</h1>
              <p className="text-sm text-muted-foreground">Foorganic Redemption Portal</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Redemptions</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.totalRedemptions}</div>
              <p className="text-xs text-muted-foreground">All time</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">{stats.pendingRedemptions}</div>
              <p className="text-xs text-muted-foreground">Awaiting redemption</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.todayRedemptions}</div>
              <p className="text-xs text-muted-foreground">+12% from yesterday</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
              <Badge variant="secondary">{stats.successRate}%</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.successRate}%</div>
              <p className="text-xs text-muted-foreground">Successful redemptions</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="scan" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="scan">Validate Redemption</TabsTrigger>
            <TabsTrigger value="pending">Pending Items</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="scan" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Validate Redemption</CardTitle>
                <CardDescription>
                  Validate a customer's redemption code or token id to process FOORG token or NFT redemptions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RedemptionScanner />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pending" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Available for Redemption</CardTitle>
                <CardDescription>
                  Staked items ready to be redeemed at your location
                </CardDescription>
              </CardHeader>
              <CardContent>
                <StakedItemsList />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Redemption History</CardTitle>
                <CardDescription>
                  View all past redemptions and transactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RedemptionHistory />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MerchantDashboard;
