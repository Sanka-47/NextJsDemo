"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, PackagePlus, Edit, Grid2X2, List } from "lucide-react"
import Image from "next/image"

const mockInventory = [
  {
    id: 1,
    category: "Mug",
    subCategory: "Ceramic",
    quantity: 100,
    available: true,
    image: "/ceramic-mug.jpeg",
  },
  {
    id: 2,
    category: "Mug",
    subCategory: "Glass",
    quantity: 50,
    available: true,
    image: "/glass-mug.jpeg",
  },
]

function InventoryItemCard({ item }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative aspect-square">
        <Image
          src={item.image}
          alt={`${item.category} - ${item.subCategory}`}
          fill
          className="object-cover"
        />
        <Badge 
          className="absolute top-2 right-2" 
          variant={item.available ? "default" : "destructive"}
        >
          {item.available ? "Available" : "Out of Stock"}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2">
          {item.category} - {item.subCategory}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Quantity:</p>
          <Badge variant="outline">{item.quantity}</Badge>
        </div>
      </CardContent>
    </Card>
  )
}

export default function InventoryPage() {
  return (
    <div className="space-y-8 p-4 md:p-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Package className="h-8 w-8" />
          Inventory Management
        </h1>
        <div className="flex gap-2 w-full sm:w-auto">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex-1 sm:flex-none">
                <PackagePlus className="mr-2 h-4 w-4" /> Add New Item
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Inventory Item</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Mug">Mug</SelectItem>
                      <SelectItem value="Plate">Plate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Sub-Category</Label>
                  <Input placeholder="Enter sub-category" />
                </div>
                <div className="space-y-2">
                  <Label>Quantity</Label>
                  <Input type="number" placeholder="Enter quantity" />
                </div>
                <div className="space-y-2">
                  <Label>Image URL</Label>
                  <Input placeholder="Enter image URL" />
                </div>
                <Button>Add Item</Button>
              </div>
            </DialogContent>
          </Dialog>
          <div className="border rounded-md p-1">
            <Button variant="default" size="sm" className="px-3">
              <Grid2X2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="px-3">
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="inventory" className="space-y-4">
        <TabsList>
          <TabsTrigger value="inventory">Inventory Grid</TabsTrigger>
          <TabsTrigger value="details">Detailed List</TabsTrigger>
        </TabsList>
        <TabsContent value="inventory">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {mockInventory.map((item) => (
              <InventoryItemCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="details">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Detailed Inventory
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px] w-full rounded-md">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Category</TableHead>
                      <TableHead>Sub-Category</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockInventory.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.category}</TableCell>
                        <TableCell>{item.subCategory}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>
                          <Badge variant={item.available ? "default" : "destructive"}>
                            {item.available ? "Available" : "Out of Stock"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Input
                              type="number"
                              defaultValue={item.quantity}
                              className="w-20"
                            />
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}