"use client"

import type { Population } from "#/types/population";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import type { ChartConfig } from "../../ui/chart";
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "../../ui/chart";

const chartConfig = {
  count: {
    label: "Jumlah Penduduk",
    color: "hsl(var(--primary))", 
  }
} satisfies ChartConfig

interface PopulationChartProps {
  data: Population['by_age']
}

/**
 * Komponen grafik batang untuk menampilkan distribusi penduduk berdasarkan usia.
 * 
 * @param {PopulationChartProps} props - Properti komponen.
 * @returns {JSX.Element} Elemen grafik kependudukan.
 */
export function PopulationChart({ data }: PopulationChartProps) {
  return (
    <ChartContainer config={chartConfig} className="h-[300px] w-full">
      <BarChart 
        accessibilityLayer 
        data={data}
        margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
      >
        <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="hsl(var(--border))" />

        <XAxis
          dataKey="label"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          fontSize={12}
        />
        
        <YAxis 
          tickLine={false}
          axisLine={false}
          fontSize={12}
        />

        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar 
          dataKey="count" 
          name="Jumlah Penduduk"
          fill="var(--primary)"
          radius={[4, 4, 0, 0]} 
        />
      </BarChart>
    </ChartContainer>
  )
}
