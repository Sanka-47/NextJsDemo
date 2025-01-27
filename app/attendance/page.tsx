"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { CalendarDays, UserCheck, UserMinus, UserX, Users, UserPlus } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

const mockAttendance = [
  { id: 1, employeeName: "John Doe", date: "2023-06-01", status: "Present" },
  { id: 2, employeeName: "Jane Smith", date: "2023-06-01", status: "Late" },
  { id: 3, employeeName: "John Doe", date: "2023-06-02", status: "Present" },
  { id: 4, employeeName: "Jane Smith", date: "2023-06-02", status: "Absent" },
]

const mockStats = [
  { name: "John Doe", present: 2, absent: 0, late: 0 },
  { name: "Jane Smith", present: 0, absent: 1, late: 1 },
]

const statusIcons = {
  Present: <UserCheck className="h-4 w-4 text-green-500" />,
  Absent: <UserX className="h-4 w-4 text-red-500" />,
  Late: <UserMinus className="h-4 w-4 text-yellow-500" />,
}

export default function AttendancePage() {
  return (
    <div className="space-y-8 p-4 md:p-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Users className="h-8 w-8" />
          Attendance Management
        </h1>
        <Button className="w-full sm:w-auto">
          <UserPlus className="mr-2 h-4 w-4" /> Add New Record
        </Button>
      </div>

      <ScrollArea className="h-[400px] rounded-md border p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockAttendance.map((record) => (
            <Card key={record.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="flex items-center p-4">
                {statusIcons[record.status]}
                <div className="ml-4 flex-1">
                  <p className="font-semibold">{record.employeeName}</p>
                  <p className="text-sm text-muted-foreground">{record.date}</p>
                </div>
                <Badge
                  variant={record.status === "Present" ? "default" : record.status === "Late" ? "warning" : "destructive"}
                >
                  {record.status}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Attendance Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockStats} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="present" fill="#4ade80" name="Present" />
              <Bar dataKey="absent" fill="#f87171" name="Absent" />
              <Bar dataKey="late" fill="#fbbf24" name="Late" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card id="addRecordForm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5" />
            Add New Attendance Record
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <Label htmlFor="employeeName">Employee Name</Label>
              <Input
                id="employeeName"
                placeholder="Enter employee name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Present">Present</SelectItem>
                  <SelectItem value="Absent">Absent</SelectItem>
                  <SelectItem value="Late">Late</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button className="w-full">Add Record</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}