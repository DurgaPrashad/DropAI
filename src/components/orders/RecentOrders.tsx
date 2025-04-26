
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Order {
  id: string;
  customerName: string;
  customerAvatar?: string;
  date: string;
  amount: number;
  items: number;
  status: "processing" | "shipped" | "delivered" | "cancelled";
}

const recentOrders: Order[] = [
  {
    id: "ORD-7291",
    customerName: "Sophie Taylor",
    customerAvatar: undefined,
    date: "26 Apr 2025",
    amount: 125.99,
    items: 2,
    status: "processing"
  },
  {
    id: "ORD-7290",
    customerName: "David Chen",
    customerAvatar: undefined,
    date: "25 Apr 2025",
    amount: 199.99,
    items: 1,
    status: "shipped"
  },
  {
    id: "ORD-7289",
    customerName: "Emily Johnson",
    customerAvatar: undefined,
    date: "25 Apr 2025",
    amount: 84.50,
    items: 3,
    status: "delivered"
  },
  {
    id: "ORD-7288",
    customerName: "Michael Brown",
    customerAvatar: undefined,
    date: "24 Apr 2025",
    amount: 49.99,
    items: 1,
    status: "cancelled"
  }
];

const RecentOrders = () => {
  const getStatusConfig = (status: Order["status"]) => {
    switch (status) {
      case "processing":
        return {
          label: "Processing",
          className: "bg-blue-100 text-blue-700 border-blue-200"
        };
      case "shipped":
        return {
          label: "Shipped",
          className: "bg-amber-100 text-amber-700 border-amber-200"
        };
      case "delivered":
        return {
          label: "Delivered",
          className: "bg-green-100 text-green-700 border-green-200"
        };
      case "cancelled":
        return {
          label: "Cancelled",
          className: "bg-red-100 text-red-700 border-red-200"
        };
      default:
        return {
          label: status,
          className: "bg-gray-100 text-gray-700 border-gray-200"
        };
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {recentOrders.map((order) => (
            <div key={order.id} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={order.customerAvatar} />
                  <AvatarFallback>
                    {order.customerName.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{order.customerName}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{order.id}</span>
                    <span>•</span>
                    <span>{order.date}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm font-medium">${order.amount.toFixed(2)}</p>
                  <p className="text-xs text-muted-foreground">{order.items} items</p>
                </div>
                <Badge 
                  variant="outline" 
                  className={cn(getStatusConfig(order.status).className)}
                >
                  {getStatusConfig(order.status).label}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentOrders;
