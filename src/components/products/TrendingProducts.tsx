
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TrendingUp } from "lucide-react";

interface TrendingProduct {
  id: string;
  name: string;
  image: string;
  category: string;
  growth: number;
}

const trendingProducts: TrendingProduct[] = [
  {
    id: "tp1",
    name: "Wireless Earbuds Pro",
    image: "/placeholder.svg",
    category: "Electronics",
    growth: 58,
  },
  {
    id: "tp2",
    name: "Smart Watch X1",
    image: "/placeholder.svg",
    category: "Electronics",
    growth: 43,
  },
  {
    id: "tp3",
    name: "Adjustable Desk Lamp",
    image: "/placeholder.svg",
    category: "Home",
    growth: 32,
  },
];

const TrendingProducts = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-2">
        <TrendingUp className="h-4 w-4 text-primary" />
        <CardTitle className="text-sm font-medium">Trending Products</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trendingProducts.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between space-x-4"
            >
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={product.image} />
                  <AvatarFallback>{product.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{product.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {product.category}
                  </p>
                </div>
              </div>
              <div className="text-sm font-medium text-emerald-500">
                +{product.growth}%
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TrendingProducts;
