
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  change?: {
    value: string;
    positive: boolean;
  };
  description?: string;
  loading?: boolean;
  className?: string;
}

const StatsCard = ({
  title,
  value,
  icon: Icon,
  change,
  description,
  loading = false,
  className,
}: StatsCardProps) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="h-4 w-4">
          <Icon className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="h-7 w-28 animate-pulse rounded bg-muted"></div>
        ) : (
          <div className="text-2xl font-bold">{value}</div>
        )}
      </CardContent>
      {(change || description) && (
        <CardFooter className="pb-3 pt-0">
          {change && (
            <div
              className={cn(
                "flex items-center text-xs",
                change.positive ? "text-emerald-500" : "text-rose-500"
              )}
            >
              {change.positive ? "+" : "-"}{change.value}{" "}
              <span className="ml-1 text-muted-foreground">
                from last month
              </span>
            </div>
          )}
          {description && (
            <div className="text-xs text-muted-foreground">
              {description}
            </div>
          )}
        </CardFooter>
      )}
    </Card>
  );
};

export default StatsCard;
