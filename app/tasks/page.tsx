"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const mockTasks = [
  { id: 1, product: "Mug", worker: "John Doe", status: "In Progress" },
  { id: 2, product: "Plate", worker: "Jane Smith", status: "Pending" },
]

export default function TasksPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Assigned Tasks</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Worker</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockTasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>{task.product}</TableCell>
              <TableCell>{task.worker}</TableCell>
              <TableCell>{task.status}</TableCell>
              <TableCell>
                <Select defaultValue={task.status}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}