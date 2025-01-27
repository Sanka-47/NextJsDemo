'use client'

import { TooltipProps } from 'recharts'
import {
  Card,
  CardContent,
} from "@/components/ui/card"

interface ChartTooltipProps extends TooltipProps<any, any> {
  indicator?: "line" | "dashed"
}

export function ChartTooltipContent({
  active,
  payload,
  label,
  indicator = "line",
}: ChartTooltipProps) {
  if (!active || !payload) return null

  return (
    <Card className="border-none shadow-none">
      <CardContent className="flex flex-col gap-2 p-3">
        <div className="text-sm font-medium">{label}</div>
        <div className="flex flex-col gap-1">
          {payload.map((item: any) => (
            <div key={item.name} className="flex items-center gap-2">
              <div className={`h-2 w-2 rounded-full`} 
                   style={{ backgroundColor: item.fill }} 
              />
              <span className="text-sm text-muted-foreground">
                {item.name}: {item.value}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}