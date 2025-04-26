
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
import { Plus, Search, Sparkles, Filter } from "lucide-react";
import ProductTable from "@/components/products/ProductTable";
import AIInsightCard from "@/components/dashboard/AIInsightCard";

const Products = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Products</h1>
        
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="h-9"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            AI Recommendations
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all-products" className="w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <TabsList>
            <TabsTrigger value="all-products">All Products</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="low-stock">Low Stock</TabsTrigger>
          </TabsList>
          
          <div className="flex flex-1 items-center gap-2 sm:max-w-sm">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full pl-8"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[120px]">
                <Filter className="mr-2 h-3.5 w-3.5" />
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="fashion">Fashion</SelectItem>
                <SelectItem value="home">Home</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="all-products" className="m-0">
          <div className="grid gap-4 grid-cols-1">
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
              <AIInsightCard
                type="opportunity"
                title="Inventory Optimization"
                description="AI suggests reducing 'Leather Crossbody Bag' inventory by 15% based on seasonal demand forecasts."
                className="lg:col-span-3"
              />
            </div>
            <ProductTable />
          </div>
        </TabsContent>

        <TabsContent value="trending" className="m-0">
          <div className="grid gap-4 grid-cols-1">
            <div className="rounded-lg border bg-card p-4">
              <h2 className="font-medium mb-2">Trending Products</h2>
              <p className="text-sm text-muted-foreground">Products with increasing demand in the last 30 days based on AI analysis.</p>
            </div>
            <ProductTable />
          </div>
        </TabsContent>

        <TabsContent value="low-stock" className="m-0">
          <div className="grid gap-4 grid-cols-1">
            <div className="rounded-lg border bg-card p-4">
              <h2 className="font-medium mb-2">Low Stock Products</h2>
              <p className="text-sm text-muted-foreground">Products that need to be reordered soon.</p>
            </div>
            <ProductTable />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Products;
