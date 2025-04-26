
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Package, Clock, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface SupplierCardProps {
  supplier: {
    id: string;
    name: string;
    image: string;
    location: string;
    categories: string[];
    rating: number;
    products: number;
    averageShipping: string;
    status: "active" | "inactive" | "pending";
  };
}

const SupplierCard = ({ supplier }: SupplierCardProps) => {
  const statusConfig = {
    active: {
      label: "Active",
      className: "bg-green-100 text-green-700 border-green-200",
    },
    inactive: {
      label: "Inactive",
      className: "bg-gray-100 text-gray-700 border-gray-200",
    },
    pending: {
      label: "Pending",
      className: "bg-amber-100 text-amber-700 border-amber-200",
    },
  };

  const currentStatus = statusConfig[supplier.status];

  return (
    <Card className="overflow-hidden">
      <div className="h-2 bg-primary" />
      <CardContent className="p-6">
        <div className="flex justify-between">
          <Avatar className="h-14 w-14 border-2 border-border">
            <AvatarImage src={supplier.image} alt={supplier.name} />
            <AvatarFallback>{supplier.name.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <Badge 
            variant="outline" 
            className={cn("mt-1", currentStatus.className)}
          >
            {currentStatus.label}
          </Badge>
        </div>

        <h3 className="mt-4 text-lg font-semibold">{supplier.name}</h3>

        <div className="mt-1 flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-1 h-3.5 w-3.5" />
          {supplier.location}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {supplier.categories.map((category, index) => (
            <Badge key={index} variant="secondary" className="bg-secondary">
              {category}
            </Badge>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 divide-x">
          <div className="flex flex-col items-center px-2">
            <div className="flex items-center text-amber-500">
              <Star className="mr-1 h-4 w-4 fill-current" />
              <span className="font-medium">{supplier.rating.toFixed(1)}</span>
            </div>
            <span className="text-xs text-muted-foreground">Rating</span>
          </div>
          
          <div className="flex flex-col items-center px-2">
            <div className="flex items-center">
              <Package className="mr-1 h-4 w-4 text-primary" />
              <span className="font-medium">{supplier.products}</span>
            </div>
            <span className="text-xs text-muted-foreground">Products</span>
          </div>
          
          <div className="flex flex-col items-center px-2">
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4 text-primary" />
              <span className="font-medium">{supplier.averageShipping}</span>
            </div>
            <span className="text-xs text-muted-foreground">Shipping</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SupplierCard;
