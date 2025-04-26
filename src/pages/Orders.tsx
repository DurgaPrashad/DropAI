
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
import { 
  Search, 
  Filter,
  ArrowDownUp,
  Package, 
  Truck, 
  CheckCircle, 
  AlertCircle,
  Download
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const orderStatuses = {
  processing: { label: "Processing", color: "bg-blue-100 text-blue-700 border-blue-200" },
  shipped: { label: "Shipped", color: "bg-amber-100 text-amber-700 border-amber-200" },
  delivered: { label: "Delivered", color: "bg-green-100 text-green-700 border-green-200" },
  cancelled: { label: "Cancelled", color: "bg-red-100 text-red-700 border-red-200" },
};

type OrderStatus = keyof typeof orderStatuses;

interface Order {
  id: string;
  date: string;
  customerName: string;
  customerEmail: string;
  amount: number;
  items: number;
  status: OrderStatus;
}

const orders: Order[] = [
  {
    id: "ORD-7291",
    date: "2025-04-26",
    customerName: "Sophie Taylor",
    customerEmail: "sophie.t@example.com",
    amount: 125.99,
    items: 2,
    status: "processing"
  },
  {
    id: "ORD-7290",
    date: "2025-04-25",
    customerName: "David Chen",
    customerEmail: "david.c@example.com",
    amount: 199.99,
    items: 1,
    status: "shipped"
  },
  {
    id: "ORD-7289",
    date: "2025-04-25",
    customerName: "Emily Johnson",
    customerEmail: "emily.j@example.com",
    amount: 84.50,
    items: 3,
    status: "delivered"
  },
  {
    id: "ORD-7288",
    date: "2025-04-24",
    customerName: "Michael Brown",
    customerEmail: "michael.b@example.com",
    amount: 49.99,
    items: 1,
    status: "cancelled"
  },
  {
    id: "ORD-7287",
    date: "2025-04-24",
    customerName: "Jessica White",
    customerEmail: "jessica.w@example.com",
    amount: 152.75,
    items: 4,
    status: "delivered"
  },
  {
    id: "ORD-7286",
    date: "2025-04-23",
    customerName: "Thomas Anderson",
    customerEmail: "thomas.a@example.com",
    amount: 68.25,
    items: 2,
    status: "shipped"
  },
  {
    id: "ORD-7285",
    date: "2025-04-23",
    customerName: "Sarah Miller",
    customerEmail: "sarah.m@example.com",
    amount: 215.50,
    items: 3,
    status: "processing"
  },
];

const Orders = () => {
  const getStatusIcon = (status: OrderStatus) => {
    switch (status) {
      case "processing":
        return <Package className="h-4 w-4" />;
      case "shipped":
        return <Truck className="h-4 w-4" />;
      case "delivered":
        return <CheckCircle className="h-4 w-4" />;
      case "cancelled":
        return <AlertCircle className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Orders</h1>
        
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-lg border p-4 text-center">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Total Orders</h3>
          <p className="text-2xl font-bold">125</p>
          <p className="text-xs text-muted-foreground mt-1">Last 30 days</p>
        </div>
        
        <div className="rounded-lg border p-4 text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <div className="flex justify-center mb-1">
            <Package className="h-4 w-4 text-blue-600" />
          </div>
          <h3 className="text-sm font-medium text-blue-900 mb-2">Processing</h3>
          <p className="text-2xl font-bold text-blue-900">24</p>
        </div>
        
        <div className="rounded-lg border p-4 text-center bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
          <div className="flex justify-center mb-1">
            <Truck className="h-4 w-4 text-amber-600" />
          </div>
          <h3 className="text-sm font-medium text-amber-900 mb-2">Shipped</h3>
          <p className="text-2xl font-bold text-amber-900">36</p>
        </div>
        
        <div className="rounded-lg border p-4 text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <div className="flex justify-center mb-1">
            <CheckCircle className="h-4 w-4 text-green-600" />
          </div>
          <h3 className="text-sm font-medium text-green-900 mb-2">Delivered</h3>
          <p className="text-2xl font-bold text-green-900">65</p>
        </div>
      </div>

      <Tabs defaultValue="all-orders" className="w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <TabsList>
            <TabsTrigger value="all-orders">All Orders</TabsTrigger>
            <TabsTrigger value="processing">Processing</TabsTrigger>
            <TabsTrigger value="shipped">Shipped</TabsTrigger>
            <TabsTrigger value="delivered">Delivered</TabsTrigger>
          </TabsList>
          
          <div className="flex flex-1 items-center gap-2 sm:max-w-sm">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search orders..."
                className="w-full pl-8"
              />
            </div>
            <Select defaultValue="date">
              <SelectTrigger className="w-[130px]">
                <ArrowDownUp className="mr-2 h-3.5 w-3.5" />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Date (New-Old)</SelectItem>
                <SelectItem value="dateAsc">Date (Old-New)</SelectItem>
                <SelectItem value="amountDesc">Amount (High-Low)</SelectItem>
                <SelectItem value="amountAsc">Amount (Low-High)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="all-orders" className="m-0">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead className="hidden md:table-cell">Email</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                    <TableCell>{order.customerName}</TableCell>
                    <TableCell className="hidden md:table-cell">{order.customerEmail}</TableCell>
                    <TableCell className="text-right">${order.amount.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge 
                        variant="outline" 
                        className={cn("flex items-center w-fit gap-1", orderStatuses[order.status].color)}
                      >
                        {getStatusIcon(order.status)}
                        {orderStatuses[order.status].label}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        {["processing", "shipped", "delivered", "cancelled"].map((status) => (
          <TabsContent key={status} value={status} className="m-0">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden md:table-cell">Email</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders
                    .filter((order) => order.status === status)
                    .map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                        <TableCell>{order.customerName}</TableCell>
                        <TableCell className="hidden md:table-cell">{order.customerEmail}</TableCell>
                        <TableCell className="text-right">${order.amount.toFixed(2)}</TableCell>
                        <TableCell>
                          <Badge 
                            variant="outline" 
                            className={cn("flex items-center w-fit gap-1", orderStatuses[order.status].color)}
                          >
                            {getStatusIcon(order.status as OrderStatus)}
                            {orderStatuses[order.status as OrderStatus].label}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Orders;
