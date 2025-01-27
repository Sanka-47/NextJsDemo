"use client"

import { ProductScanner } from "@/components/ProductScanner"
import { WorkerAssignment } from "@/components/WorkerAssignment"
import { SendToMainBranch } from "@/components/SendToMainBranch"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, CartesianGrid, XAxis, Bar } from "recharts"
import {
  TrendingUp,
  Send,
  Users,
  Package,
  Clock,
} from "lucide-react"

const chartData = [
  { month: "Jan", desktop: 150, mobile: 90 },
  { month: "Feb", desktop: 180, mobile: 100 },
  { month: "Mar", desktop: 200, mobile: 110 },
  { month: "Apr", desktop: 190, mobile: 120 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
]

export default function Page() {
  return (
    <div>
    <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ProductScanner />
      <WorkerAssignment />
    </div>
    <SendToMainBranch />
  </div>
  )
}