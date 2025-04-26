
import React from "react";
import { ShoppingBag, Users, ArrowRight, TrendingUp, PackageCheck, Truck } from "lucide-react";
import StatsCard from "@/components/dashboard/StatsCard";
import AIInsightCard from "@/components/dashboard/AIInsightCard";
import PerformanceChart from "@/components/dashboard/PerformanceChart";
import RecentOrders from "@/components/orders/RecentOrders";
import TrendingProducts from "@/components/products/TrendingProducts";

const Dashboard = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Sales"
          value="$16,943"
          icon={ShoppingBag}
          change={{ value: "12.3%", positive: true }}
        />
        <StatsCard
          title="Active Customers"
          value="1,436"
          icon={Users}
          change={{ value: "8.1%", positive: true }}
        />
        <StatsCard
          title="Avg. Order Value"
          value="$74.28"
          icon={TrendingUp}
          change={{ value: "3.2%", positive: true }}
        />
        <StatsCard
          title="Products Shipped"
          value="892"
          icon={PackageCheck}
          change={{ value: "14.5%", positive: true }}
        />
      </div>

      {/* Main Content */}
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-12">
        <PerformanceChart />
        
        <div className="col-span-12 lg:col-span-4 grid gap-4">
          <RecentOrders />
        </div>
      </div>

      {/* AI Insights */}
      <h2 className="text-xl font-semibold mt-8 mb-4">AI Insights</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AIInsightCard
          type="opportunity"
          title="Product Bundle Opportunity"
          description="Based on customer buying patterns, bundling 'Wireless Earbuds Pro' with 'Smart Watch X1' could increase average order value by 28%."
        />
        <AIInsightCard
          type="trend"
          title="Rising Category Detected"
          description="Home fitness equipment is trending up 34% this month. Consider expanding your inventory in this category."
        />
        <AIInsightCard
          type="alert"
          title="Inventory Optimization"
          description="The 'Portable Bluetooth Speaker' is showing decreased demand. Consider reducing reorder quantity by 15%."
        />
      </div>

      {/* Additional Stats */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
        <TrendingProducts />
        
        <div className="col-span-1 md:col-span-1 lg:col-span-2">
          <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-4 h-full">
            <div className="flex items-center gap-2 mb-4">
              <Truck className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-lg">Supplier Performance</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-border">
                <span className="font-medium">Supplier</span>
                <div className="flex gap-8">
                  <span className="font-medium">On-time</span>
                  <span className="font-medium">Quality</span>
                </div>
              </div>
              
              {[
                { name: "TechGear Inc.", onTime: "98%", quality: "99%" },
                { name: "GadgetWorld", onTime: "94%", quality: "97%" },
                { name: "HomeEssentials", onTime: "100%", quality: "95%" },
              ].map((supplier, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span>{supplier.name}</span>
                  <div className="flex gap-8">
                    <span className="text-emerald-600">{supplier.onTime}</span>
                    <span className="text-emerald-600">{supplier.quality}</span>
                  </div>
                </div>
              ))}
              
              <div className="pt-2 mt-2">
                <a href="/suppliers" className="inline-flex items-center text-sm text-primary hover:underline">
                  View all suppliers
                  <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
