
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Lightbulb, TrendingUp, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface AIInsightCardProps {
  title: string;
  description: string;
  type: "opportunity" | "suggestion" | "trend" | "alert";
  className?: string;
}

const AIInsightCard = ({
  title,
  description,
  type,
  className,
}: AIInsightCardProps) => {
  // Icon and styling based on insight type
  const typeConfig = {
    opportunity: {
      icon: <Sparkles className="h-4 w-4" />,
      bgGradient: "from-violet-500 to-purple-700",
      textColor: "text-white",
    },
    suggestion: {
      icon: <Lightbulb className="h-4 w-4" />,
      bgGradient: "from-blue-500 to-indigo-700",
      textColor: "text-white",
    },
    trend: {
      icon: <TrendingUp className="h-4 w-4" />,
      bgGradient: "from-emerald-400 to-teal-700",
      textColor: "text-white",
    },
    alert: {
      icon: <AlertTriangle className="h-4 w-4" />,
      bgGradient: "from-amber-500 to-orange-700",
      textColor: "text-white",
    },
  };

  const currentType = typeConfig[type];

  return (
    <Card 
      className={cn(
        "overflow-hidden border-none shadow-lg", 
        className
      )}
    >
      <div className={`bg-gradient-to-r ${currentType.bgGradient} p-4`}>
        <div className="mb-3 flex items-center gap-2">
          {currentType.icon}
          <span className="text-xs font-medium uppercase tracking-wider text-white/80">
            AI {type}
          </span>
        </div>
        <CardTitle className={`mb-2 ${currentType.textColor}`}>{title}</CardTitle>
        <CardDescription className="text-white/80">{description}</CardDescription>
      </div>
    </Card>
  );
};

export default AIInsightCard;
