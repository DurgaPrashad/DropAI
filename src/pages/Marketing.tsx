
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search, Sparkles } from "lucide-react";
import MarketingCampaignCard from "@/components/marketing/MarketingCampaignCard";
import AIInsightCard from "@/components/dashboard/AIInsightCard";

const campaigns = [
  {
    id: "c1",
    name: "Summer Sale 2025",
    status: "active" as const,
    startDate: "Apr 20, 2025",
    endDate: "May 20, 2025",
    platform: "Facebook & Instagram",
    budget: {
      spent: 2450,
      total: 5000,
      currency: "USD"
    },
    performance: {
      conversionRate: 8.3,
      impressions: 124580,
      clicks: 8964,
      orders: 743
    },
    aiRecommendation: "Increasing ad spend on carousel ads could improve ROAS by ~15% based on current performance."
  },
  {
    id: "c2",
    name: "New Collection Launch",
    status: "scheduled" as const,
    startDate: "May 10, 2025",
    endDate: "Jun 10, 2025",
    platform: "Google Ads",
    budget: {
      spent: 0,
      total: 3500,
      currency: "USD"
    },
    performance: {
      conversionRate: 0,
      impressions: 0,
      clicks: 0,
      orders: 0
    }
  },
  {
    id: "c3",
    name: "Back to School",
    status: "draft" as const,
    startDate: "Jul 15, 2025",
    endDate: "Aug 30, 2025",
    platform: "TikTok Ads",
    budget: {
      spent: 0,
      total: 4000,
      currency: "USD"
    },
    performance: {
      conversionRate: 0,
      impressions: 0,
      clicks: 0,
      orders: 0
    },
    aiRecommendation: "Based on previous campaigns, consider increasing video content budget by 20% for better engagement."
  },
  {
    id: "c4",
    name: "Spring Collection Promotion",
    status: "ended" as const,
    startDate: "Mar 01, 2025",
    endDate: "Apr 15, 2025",
    platform: "Facebook & Instagram",
    budget: {
      spent: 3800,
      total: 4000,
      currency: "USD"
    },
    performance: {
      conversionRate: 7.2,
      impressions: 145320,
      clicks: 10456,
      orders: 752
    },
    aiRecommendation: "Campaign performed 22% better than average. Consider similar targeting for your Summer Sale."
  },
  {
    id: "c5",
    name: "Email Marketing - Loyal Customers",
    status: "active" as const,
    startDate: "Apr 10, 2025",
    endDate: "May 10, 2025",
    platform: "Email Campaign",
    budget: {
      spent: 1200,
      total: 2000,
      currency: "USD"
    },
    performance: {
      conversionRate: 12.8,
      impressions: 50000,
      clicks: 9850,
      orders: 1260
    }
  },
  {
    id: "c6",
    name: "Flash Sale Weekend",
    status: "scheduled" as const,
    startDate: "May 5, 2025",
    endDate: "May 7, 2025",
    platform: "All Platforms",
    budget: {
      spent: 0,
      total: 2500,
      currency: "USD"
    },
    performance: {
      conversionRate: 0,
      impressions: 0,
      clicks: 0,
      orders: 0
    }
  }
];

const Marketing = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Marketing</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="hidden sm:flex">
            <Sparkles className="mr-2 h-4 w-4" />
            AI Campaign Suggestion
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Campaign
          </Button>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 mb-4">
        <AIInsightCard
          type="trend"
          title="Audience Insight"
          description="Based on recent campaign performance, targeting 25-34 age demographic with home decor items shows 34% higher conversion rates."
          className="lg:col-span-3"
        />
      </div>

      <Tabs defaultValue="all-campaigns" className="w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <TabsList>
            <TabsTrigger value="all-campaigns">All Campaigns</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
            <TabsTrigger value="ended">Ended</TabsTrigger>
          </TabsList>
          
          <div className="flex flex-1 items-center gap-2 sm:max-w-sm">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search campaigns..."
                className="w-full pl-8"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Platforms</SelectItem>
                <SelectItem value="facebook">Facebook</SelectItem>
                <SelectItem value="google">Google</SelectItem>
                <SelectItem value="tiktok">TikTok</SelectItem>
                <SelectItem value="email">Email</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="all-campaigns" className="m-0">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {campaigns.map((campaign) => (
              <MarketingCampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        </TabsContent>

        {["active", "scheduled", "ended", "draft"].map((status) => (
          <TabsContent key={status} value={status} className="m-0">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {campaigns
                .filter((campaign) => campaign.status === status)
                .map((campaign) => (
                  <MarketingCampaignCard key={campaign.id} campaign={campaign} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Marketing;
