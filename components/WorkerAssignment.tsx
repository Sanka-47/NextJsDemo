"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { UsersRound, UserCheck2, Users2 } from "lucide-react"

const initialWorkers = ["John Doe", "Jane Smith", "Bob Johnson"]

export function WorkerAssignment() {
  const [workers, setWorkers] = useState(initialWorkers)
  const [selectedWorker, setSelectedWorker] = useState("")
  const [assignedWorker, setAssignedWorker] = useState("")

  const handleAssign = () => {
    if (selectedWorker) {
      setAssignedWorker(selectedWorker)
      setWorkers(workers.filter((worker) => worker !== selectedWorker))
      setSelectedWorker("")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UsersRound className="h-5 w-5" />
          Worker Assignment
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Users2 className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Available Workers: {workers.length}
            </span>
          </div>
          <Select value={selectedWorker} onValueChange={setSelectedWorker}>
            <SelectTrigger>
              <SelectValue placeholder="Select a worker" />
            </SelectTrigger>
            <SelectContent>
              {workers.map((worker) => (
                <SelectItem key={worker} value={worker}>
                  {worker}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button 
          onClick={handleAssign} 
          disabled={!selectedWorker}
          className="w-full"
        >
          <UserCheck2 className="mr-2 h-4 w-4" />
          Assign Worker
        </Button>

        {assignedWorker && (
          <div className="pt-4 border-t space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Current Assignment:</span>
              <Badge variant="secondary">{assignedWorker}</Badge>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}