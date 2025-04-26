
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, ArrowUpDown, Sparkles } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  image: string;
  sku: string;
  price: number;
  stock: number;
  category: string;
  demandScore: number;
  supplier: string;
  status: "in-stock" | "low-stock" | "out-of-stock";
}

const products: Product[] = [
  {
    id: "p1",
    name: "Wireless Earbuds Pro",
    image: "/placeholder.svg",
    sku: "EARBUD-PRO",
    price: 99.99,
    stock: 42,
    category: "Electronics",
    demandScore: 94,
    supplier: "TechGear Inc.",
    status: "in-stock"
  },
  {
    id: "p2",
    name: "Smart Watch X1",
    image: "/placeholder.svg",
    sku: "WATCH-X1",
    price: 149.99,
    stock: 18,
    category: "Electronics",
    demandScore: 89,
    supplier: "GadgetWorld",
    status: "low-stock"
  },
  {
    id: "p3",
    name: "Portable Bluetooth Speaker",
    image: "/placeholder.svg",
    sku: "SPEAKER-BT2",
    price: 79.99,
    stock: 35,
    category: "Electronics",
    demandScore: 78,
    supplier: "AudioMaster",
    status: "in-stock"
  },
  {
    id: "p4",
    name: "Leather Crossbody Bag",
    image: "/placeholder.svg",
    sku: "BAG-CB2",
    price: 59.99,
    stock: 0,
    category: "Fashion",
    demandScore: 72,
    supplier: "StyleHub",
    status: "out-of-stock"
  },
  {
    id: "p5",
    name: "Adjustable Desk Lamp",
    image: "/placeholder.svg",
    sku: "LAMP-AD1",
    price: 39.99,
    stock: 27,
    category: "Home",
    demandScore: 65,
    supplier: "HomeEssentials",
    status: "in-stock"
  }
];

const ProductTable = () => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">
              <div className="flex items-center gap-1">
                Product
                <Button variant="ghost" size="xs" className="h-8 px-2">
                  <ArrowUpDown className="h-3 w-3" />
                </Button>
              </div>
            </TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead className="hidden md:table-cell">Status</TableHead>
            <TableHead>
              <div className="flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-primary" />
                AI Demand
              </div>
            </TableHead>
            <TableHead className="hidden md:table-cell">Supplier</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={product.image} alt={product.name} />
                    <AvatarFallback>{product.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{product.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {product.sku}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell className="hidden md:table-cell">
                <Badge 
                  variant="outline" 
                  className={cn(
                    "bg-opacity-20",
                    product.status === "in-stock" && "bg-green-100 text-green-700 border-green-200",
                    product.status === "low-stock" && "bg-amber-100 text-amber-700 border-amber-200",
                    product.status === "out-of-stock" && "bg-red-100 text-red-700 border-red-200",
                  )}
                >
                  {product.status === "in-stock" && "In Stock"}
                  {product.status === "low-stock" && "Low Stock"}
                  {product.status === "out-of-stock" && "Out of Stock"}
                </Badge>
              </TableCell>
              <TableCell>
                <div 
                  className={cn(
                    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                    product.demandScore >= 80 ? "bg-green-100 text-green-800" : 
                    product.demandScore >= 60 ? "bg-amber-100 text-amber-800" : 
                    "bg-gray-100 text-gray-800"
                  )}
                >
                  {product.demandScore}%
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">{product.supplier}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Edit product</DropdownMenuItem>
                    <DropdownMenuItem>View supplier</DropdownMenuItem>
                    <DropdownMenuItem>Order inventory</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      Unpublish product
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductTable;
