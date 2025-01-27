"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { 
  UserPlus, 
  Users, 
  Pencil,
  BadgeCheck,
  X
} from "lucide-react"

const mockEmployees = [
  { id: 1, name: "John Doe", position: "Printer", contactNumber: "123-456-7890" },
  { id: 2, name: "Jane Smith", position: "Designer", contactNumber: "098-765-4321" },
]

export default function EmployeesPage() {
  return (
    <div className="space-y-8 p-4 md:p-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Users className="h-8 w-8" />
          Employee Management
        </h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full sm:w-auto">
              <UserPlus className="mr-2 h-4 w-4" /> Add New Employee
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Employee</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="position">Position</Label>
                <Input id="position" placeholder="Enter position" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactNumber">Contact Number</Label>
                <Input id="contactNumber" placeholder="Enter contact number" />
              </div>
              <Button className="w-full">
                <UserPlus className="mr-2 h-4 w-4" /> Add Employee
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Employee List
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[500px] rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Name</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Contact Number</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockEmployees.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell className="font-medium">{employee.name}</TableCell>
                    <TableCell>{employee.position}</TableCell>
                    <TableCell>{employee.contactNumber}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Pencil className="h-5 w-5" />
            Edit Employee
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <Label htmlFor="editName">Name</Label>
              <Input id="editName" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="editPosition">Position</Label>
              <Input id="editPosition" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="editContactNumber">Contact Number</Label>
              <Input id="editContactNumber" />
            </div>
            <div className="flex items-end gap-2">
              <Button className="flex-1">
                <BadgeCheck className="mr-2 h-4 w-4" /> Save
              </Button>
              <Button variant="outline" className="flex-1">
                <X className="mr-2 h-4 w-4" /> Cancel
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}