import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { Apple } from "lucide-react";
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

import { TrendingUp } from "lucide-react";
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

import {BarChartComponent} from "@/components/barchartcomponent";

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
      <div className="flex h-screen">
        <div className="w-[20%] bg-white">
          <div className="w-full">
            <NavigationMenu className="h-full p-1">
              <NavigationMenuList className="flex flex-col space-y-3">
                <NavigationMenuItem>
                  <h1 className="w-full justify-start text-4xl mb-6 px-4 font-bold">
                    Main Branch
                  </h1>
                  <hr />
                  <Button
                    variant="ghost"
                    className="w-full text-gray-500  justify-start px-4 hover:bg-[rgb(245,246,248)]"
                  >
                    <Apple />
                    Branch Tasks
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full  text-gray-500  justify-start px-4 hover:bg-[rgb(245,246,248)]"
                  >
                    <Apple />
                    Orders
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full  text-gray-500  justify-start px-4 hover:bg-[rgb(245,246,248)]"
                  >
                    <Apple />
                    Inventory
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full  text-gray-500  justify-start px-4 hover:bg-[rgb(245,246,248)]"
                  >
                    <Apple />
                    Employees
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full   text-gray-500 justify-start px-4 hover:bg-[rgb(245,246,248)]"
                  >
                    <Apple />
                    Task Assignments
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full  text-gray-500 justify-start px-4 hover:bg-[rgb(245,246,248)]"
                  >
                    <Apple />
                    Task Assignments
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full  text-gray-500  justify-start px-4 hover:bg-[rgb(245,246,248)]"
                  >
                    <Apple />
                    Task Assignments
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full  text-gray-500  justify-start px-4 hover:bg-[rgb(245,246,248)]"
                  >
                    <Apple />
                    Task Assignments
                  </Button>
                  <NavigationMenuContent className="w-full mt-2">
                    <div className="p-2 hover:bg-[rgb(245,246,248)]">Link</div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        <div className="w-[80%] bg-gray-100">
        <BarChartComponent chartData={chartData} chartConfig={chartConfig} />
        </div>
      </div>
    </>
  );
}
