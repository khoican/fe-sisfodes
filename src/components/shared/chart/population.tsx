"use client"

import { population } from "#/data/population.data";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import type { ChartConfig } from "../../ui/chart";
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "../../ui/chart";

const chartConfig = {
  population: {
    label: "Jumlah Penduduk",
    color: "var(--primary)", 
  }
} satisfies ChartConfig

export function PopulationChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[40vh] w-full aspect-square">
      <BarChart 
        accessibilityLayer 
        data={population.age}
        margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
      >
        <CartesianGrid vertical={false} strokeDasharray="3 3"/>

        <XAxis
          dataKey="age"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 5)}
        />

        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar 
          dataKey="population" 
          fill="var(--primary)"
          radius={[4, 4, 0, 0]} 
        />
      </BarChart>
    </ChartContainer>
  )
}