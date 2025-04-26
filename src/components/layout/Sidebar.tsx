
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Settings, 
  LogOut,
  Truck,
  TrendingUp,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  to: string;
  active?: boolean;
};

const NavItem = ({ icon, label, to, active }: NavItemProps) => (
  <Link
    to={to}
    className={cn(
      "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-all hover:text-sidebar-primary-foreground",
      active 
        ? "bg-sidebar-accent text-sidebar-primary-foreground font-medium" 
        : "text-sidebar-foreground hover:bg-sidebar-accent/50"
    )}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

const Sidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <aside className="hidden md:flex h-screen w-64 flex-col bg-sidebar fixed inset-y-0 z-10">
      <div className="flex h-14 items-center border-b border-sidebar-border px-4">
        <Link to="/" className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl text-white">DropAI</span>
        </Link>
      </div>
      
      <div className="flex-1 overflow-auto py-2 px-3">
        <nav className="flex flex-col gap-1">
          <NavItem 
            to="/dashboard"
            icon={<LayoutDashboard className="h-4 w-4" />}
            label="Dashboard"
            active={pathname === "/dashboard" || pathname === "/"}
          />
          <NavItem 
            to="/products"
            icon={<Package className="h-4 w-4" />}
            label="Products"
            active={pathname === "/products"}
          />
          <NavItem 
            to="/orders"
            icon={<ShoppingCart className="h-4 w-4" />}
            label="Orders"
            active={pathname === "/orders"}
          />
          <NavItem 
            to="/suppliers"
            icon={<Truck className="h-4 w-4" />}
            label="Suppliers"
            active={pathname === "/suppliers"}
          />
          <NavItem 
            to="/customers"
            icon={<Users className="h-4 w-4" />}
            label="Customers"
            active={pathname === "/customers"}
          />
          <NavItem 
            to="/analytics"
            icon={<BarChart3 className="h-4 w-4" />}
            label="Analytics"
            active={pathname === "/analytics"}
          />
          <NavItem 
            to="/marketing"
            icon={<TrendingUp className="h-4 w-4" />}
            label="Marketing"
            active={pathname === "/marketing"}
          />
        </nav>
      </div>
      
      <div className="mt-auto border-t border-sidebar-border p-3">
        <nav className="flex flex-col gap-1">
          <NavItem 
            to="/settings"
            icon={<Settings className="h-4 w-4" />}
            label="Settings"
            active={pathname === "/settings"}
          />
          <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-primary-foreground transition-all">
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </button>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
