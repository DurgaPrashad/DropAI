
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Filter } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AIInsightCard from "@/components/dashboard/AIInsightCard";
import SupplierCard from "@/components/suppliers/SupplierCard";

const suppliers = [
  {
    id: "s1",
    name: "TechGear Inc.",
    image: "/placeholder.svg",
    location: "Shenzhen, China",
    categories: ["Electronics", "Gadgets"],
    rating: 4.8,
    products: 124,
    averageShipping: "5-7 days",
    status: "active" as const,
  },
  {
    id: "s2",
    name: "GadgetWorld",
    image: "/placeholder.svg",
    location: "Hong Kong, China",
    categories: ["Electronics", "Smart Home"],
    rating: 4.6,
    products: 87,
    averageShipping: "7-10 days",
    status: "active" as const,
  },
  {
    id: "s3",
    name: "AudioMaster",
    image: "/placeholder.svg",
    location: "Tokyo, Japan",
    categories: ["Audio", "Electronics"],
    rating: 4.5,
    products: 52,
    averageShipping: "8-12 days",
    status: "active" as const,
  },
  {
    id: "s4",
    name: "StyleHub",
    image: "/placeholder.svg",
    location: "Milan, Italy",
    categories: ["Fashion", "Accessories"],
    rating: 4.7,
    products: 93,
    averageShipping: "6-9 days",
    status: "active" as const,
  },
  {
    id: "s5",
    name: "HomeEssentials",
    image: "/placeholder.svg",
    location: "Delhi, India",
    categories: ["Home", "Decor"],
    rating: 4.4,
    products: 61,
    averageShipping: "8-14 days",
    status: "active" as const,
  },
  {
    id: "s6",
    name: "FitLife Products",
    image: "/placeholder.svg",
    location: "Los Angeles, USA",
    categories: ["Fitness", "Health"],
    rating: 4.9,
    products: 38,
    averageShipping: "4-7 days",
    status: "pending" as const,
  }
];

const Suppliers = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Suppliers</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Supplier
        </Button>
      </div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 mb-6">
        <AIInsightCard
          type="suggestion"
          title="New Supplier Recommendation"
          description="Based on rising demand for fitness products, consider onboarding 'FitnessPro Gear' from Canada with 94% reliability rating."
          className="lg:col-span-3"
        />
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-4 items-center justify-between">
        <div className="relative w-full sm:max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search suppliers..."
            className="w-full pl-8"
          />
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[140px]">
              <Filter className="mr-2 h-3.5 w-3.5" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="fashion">Fashion</SelectItem>
              <SelectItem value="home">Home</SelectItem>
              <SelectItem value="fitness">Fitness</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="active">
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {suppliers.map((supplier) => (
          <SupplierCard key={supplier.id} supplier={supplier} />
        ))}
      </div>
    </div>
  );
};

export default Suppliers;
