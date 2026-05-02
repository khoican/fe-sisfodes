"use client"

import type { SdgsChart as SdgsChartType } from "#/types/sdgs";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import type { ChartConfig } from "../../ui/chart";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../../ui/chart";

const chartConfig = {
  score: {
    label: "Skor SDGs",
    color: "hsl(var(--primary))", 
  }
} satisfies ChartConfig

interface SdgsChartProps {
  data: SdgsChartType[]
}

/**
 * Komponen grafik batang untuk menampilkan skor SDGs Desa.
 * 
 * @param {SdgsChartProps} props - Properti komponen.
 * @returns {JSX.Element} Elemen grafik SDGs.
 */
export function SdgsChart({ data }: SdgsChartProps) {
  return (
    <ChartContainer config={chartConfig} className="h-full w-full">
      <BarChart 
        accessibilityLayer 
        data={data}
        margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
      >
        <CartesianGrid vertical={false} strokeDasharray="3 3" />

        <XAxis dataKey="label" hide />
        
        <YAxis 
          tickLine={false}
          axisLine={false}
          fontSize={12}
          domain={[0, 100]}
          tick={{ fill: 'hsl(var(--muted-foreground))' }}
        />

        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar 
          dataKey="score" 
          name="Skor SDGs"
          fill="var(--primary)"
          radius={[4, 4, 0, 0]} 
        />
      </BarChart>
    </ChartContainer>
  )
}
