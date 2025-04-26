
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface MarketingCampaignCardProps {
  campaign: {
    id: string;
    name: string;
    status: "active" | "scheduled" | "ended" | "draft";
    startDate: string;
    endDate: string;
    platform: string;
    budget: {
      spent: number;
      total: number;
      currency: string;
    };
    performance: {
      conversionRate: number;
      impressions: number;
      clicks: number;
      orders: number;
    };
    aiRecommendation?: string;
  };
  className?: string;
}

const MarketingCampaignCard: React.FC<MarketingCampaignCardProps> = ({
  campaign,
  className,
}) => {
  const statusStyles = {
    active: "bg-green-100 border-green-200 text-green-700",
    scheduled: "bg-blue-100 border-blue-200 text-blue-700",
    ended: "bg-gray-100 border-gray-200 text-gray-700",
    draft: "bg-amber-100 border-amber-200 text-amber-700"
  };

  const percentSpent = Math.round((campaign.budget.spent / campaign.budget.total) * 100);

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="p-4 pb-0 flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{campaign.name}</h3>
          <p className="text-sm text-muted-foreground">{campaign.platform}</p>
        </div>
        <Badge variant="outline" className={statusStyles[campaign.status]}>
          {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
        </Badge>
      </CardHeader>

      <CardContent className="p-4">
        <div className="space-y-4">
          <div>
            <div className="text-sm text-muted-foreground mb-1 flex justify-between">
              <span>Budget usage</span>
              <span className="text-foreground font-medium">
                {campaign.budget.spent.toLocaleString('en-US', {
                  style: 'currency',
                  currency: campaign.budget.currency,
                  minimumFractionDigits: 0
                })} / {campaign.budget.total.toLocaleString('en-US', {
                  style: 'currency',
                  currency: campaign.budget.currency,
                  minimumFractionDigits: 0
                })}
              </span>
            </div>
            <Progress value={percentSpent} className="h-2" />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-secondary rounded-md p-2">
              <p className="text-xs text-muted-foreground">Conversion Rate</p>
              <p className="font-medium">{campaign.performance.conversionRate}%</p>
            </div>
            <div className="bg-secondary rounded-md p-2">
              <p className="text-xs text-muted-foreground">Orders</p>
              <p className="font-medium">{campaign.performance.orders}</p>
            </div>
            <div className="bg-secondary rounded-md p-2">
              <p className="text-xs text-muted-foreground">Impressions</p>
              <p className="font-medium">{campaign.performance.impressions.toLocaleString()}</p>
            </div>
            <div className="bg-secondary rounded-md p-2">
              <p className="text-xs text-muted-foreground">Clicks</p>
              <p className="font-medium">{campaign.performance.clicks.toLocaleString()}</p>
            </div>
          </div>

          <div className="text-xs text-muted-foreground">
            {campaign.status !== "ended" ? (
              <>
                <span>Running: </span>
                <span>{campaign.startDate} - {campaign.endDate}</span>
              </>
            ) : (
              <>
                <span>Ran: </span>
                <span>{campaign.startDate} - {campaign.endDate}</span>
              </>
            )}
          </div>

          {campaign.aiRecommendation && (
            <div className="bg-accent p-2 rounded-md border border-accent-foreground/20">
              <div className="flex items-center gap-1 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                <p className="text-xs font-medium text-primary">AI Recommendation</p>
              </div>
              <p className="text-xs">{campaign.aiRecommendation}</p>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button variant="outline" size="sm" className="flex-1">Details</Button>
        {campaign.status === "active" && (
          <Button variant="default" size="sm" className="flex-1">Optimize</Button>
        )}
        {campaign.status === "draft" && (
          <Button variant="default" size="sm" className="flex-1">Launch</Button>
        )}
        {campaign.status === "scheduled" && (
          <Button variant="default" size="sm" className="flex-1">Edit</Button>
        )}
        {campaign.status === "ended" && (
          <Button variant="default" size="sm" className="flex-1">Report</Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default MarketingCampaignCard;
