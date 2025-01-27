"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ScanLine, 
  Barcode,
  AlertTriangle,
  Send
} from "lucide-react"

export function ProductScanner() {
  const [productCode, setProductCode] = useState("")
  const [productType, setProductType] = useState("")

  const handleScan = () => {
    alert("Scanning...")
  }

  const handleManualInput = (e: React.FormEvent) => {
    e.preventDefault()
    setProductType(productCode === "TSHIRT" ? "T-Shirt" : "Mug")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ScanLine className="h-5 w-5" />
          Product Scanner
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Button 
          variant="outline" 
          onClick={handleScan} 
          className="w-full flex items-center gap-2 h-20 text-lg"
        >
          <Barcode className="h-6 w-6" />
          Scan QR/Barcode
        </Button>

        <div className="space-y-2">
          <Label htmlFor="productCode">Manual Input</Label>
          <form onSubmit={handleManualInput} className="flex gap-2">
            <Input
              id="productCode"
              value={productCode}
              onChange={(e) => setProductCode(e.target.value)}
              placeholder="Enter product code"
            />
            <Button type="submit">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>

        {productType && (
          <div className="space-y-2 pt-2 border-t">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Product Type:</span>
              <Badge variant="outline">{productType}</Badge>
            </div>
            {productType === "T-Shirt" && (
              <div className="flex items-center gap-2 text-sm text-red-500">
                <AlertTriangle className="h-4 w-4" />
                T-Shirt printing not available at this branch
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}