import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  TrendingUp,
  Scan,
  Send,
  ExternalLink,
  Users,
  LayoutDashboard,
  ClipboardList,
  Package,
  Clock,
} from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { BarChartComponent } from "@/components/barchartcomponent";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function Home() {
  return (
    <>
      <div className="flex w-full h-screen">
  {/* Sidebar */}
  <div className="w-1/4 h-full border-r">
    <SidebarProvider>
      <Sidebar className="h-full">
        <SidebarHeader className="border-b p-4">
          <h1 className="text-xl font-semibold">Printing Center</h1>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive>
                <a href="#" className="flex items-center gap-3">
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#" className="flex items-center gap-3">
                  <ClipboardList className="h-4 w-4" />
                  View Tasks
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#" className="flex items-center gap-3">
                  <Package className="h-4 w-4" />
                  Inventory
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#" className="flex items-center gap-3">
                  <Users className="h-4 w-4" />
                  Employees
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#" className="flex items-center gap-3">
                  <Clock className="h-4 w-4" />
                  Attendance
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  </div>

  {/* Main Content */}
  <div className="w-full p-6">
    <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

    <div className="grid gap-6 md:grid-cols-2 mb-6">
      {/* Product Scanner */}
      <Card className="shadow-none border">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-medium flex items-center gap-2">
            <Scan className="h-4 w-4" />
            Product Scanner
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            variant="outline"
            className="w-full justify-center gap-2 h-[100px] text-muted-foreground hover:text-foreground"
          >
            <Scan className="h-4 w-4" />
            Scan QR/Barcode
          </Button>

          <div className="space-y-2">
            <h3 className="text-sm">Manual Input</h3>
            <div className="flex gap-2">
              <Input
                placeholder="Enter product code"
                className="flex-1"
              />
              <Button
                size="icon"
                variant="default"
                className="shrink-0 bg-black hover:bg-black/90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Worker Assignment */}
      <Card className="shadow-none border">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-medium flex items-center gap-2">
            <Users className="h-4 w-4" />
            Worker Assignment
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            Available Workers: 3
          </div>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a worker" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="worker1">Worker 1</SelectItem>
              <SelectItem value="worker2">Worker 2</SelectItem>
              <SelectItem value="worker3">Worker 3</SelectItem>
            </SelectContent>
          </Select>

          <Button className="w-full bg-gray-500 hover:bg-gray-600">
            <Users className="h-4 w-4 mr-2" />
            Assign Worker
          </Button>
        </CardContent>
      </Card>
    </div>

    {/* T-Shirt Order Section */}
    <Card className="shadow-none border">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-medium flex items-center gap-2">
          <Send className="h-4 w-4" />
          Send T-Shirt Order to Main Branch
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-sm">Order Details</h3>
          <Textarea
            placeholder="Enter complete order details including size, color, design specifications..."
            className="min-h-[150px] resize-none"
          />
        </div>

        <div className="flex gap-4">
          <Button className="flex-1 bg-black hover:bg-black/90">
            <Send className="h-4 w-4 mr-2" />
            Send to Main Branch
          </Button>
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-foreground"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Track Orders
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
</div>
    </>
  );
}
