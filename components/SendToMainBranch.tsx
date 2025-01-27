"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { ExternalLink, SendHorizontal, Building2 } from "lucide-react"
import { toast } from "sonner"

export function SendToMainBranch() {
  const [orderDetails, setOrderDetails] = useState("")

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!orderDetails.trim()) {
      toast.error("Please enter order details")
      return
    }
    toast.success("Order sent to main branch successfully")
    setOrderDetails("")
  }

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building2 className="h-5 w-5" />
          Send T-Shirt Order to Main Branch
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSend} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="orderDetails">Order Details</Label>
            <Textarea
              id="orderDetails"
              value={orderDetails}
              onChange={(e) => setOrderDetails(e.target.value)}
              placeholder="Enter complete order details including size, color, design specifications..."
              className="min-h-[100px]"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button type="submit" className="flex-1">
              <SendHorizontal className="mr-2 h-4 w-4" />
              Send to Main Branch
            </Button>
            <Button variant="outline" type="button" className="flex-1">
              <ExternalLink className="mr-2 h-4 w-4" />
              Track Orders
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}