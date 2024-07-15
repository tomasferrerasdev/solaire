"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components";
const chartData = [
  { month: "January", solar: 186, no_solar: 80 },
  { month: "February", solar: 305, no_solar: 200 },
  { month: "March", solar: 237, no_solar: 120 },
  { month: "April", solar: 73, no_solar: 190 },
  { month: "May", solar: 209, no_solar: 130 },
  { month: "June", solar: 214, no_solar: 140 },
];

const chartConfig = {
  solar: {
    label: "Solar",
    color: "#2563eb",
  },
  no_solar: {
    label: "No solar",
    color: "#dc2626",
  },
} satisfies ChartConfig;

export const PotentialAnalysisChart = () => {
  return (
    <ChartContainer config={chartConfig}>
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Line
          dataKey="solar"
          type="monotone"
          stroke={chartConfig.solar.color}
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="no_solar"
          type="monotone"
          stroke={chartConfig.no_solar.color}
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
};
