"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  ChartConfig,
  ChartContainer,
} from "@/components";
import { INFOCARD_INSIGHTS } from "./data";
import { RadialBarChart, RadialBar, Label, PolarRadiusAxis } from "recharts";

export const InfoCard = () => {
  const { id, title, info } = INFOCARD_INSIGHTS[0];
  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    safari: {
      label: "Safari",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;
  const chartData = [
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  ];
  return (
    <div className="flex flex-col gap-2">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <hr />
        </CardHeader>
        <CardContent className="grid gap-4 text-sm">
          <ul className="flex flex-col gap-1">
            {info.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span className="font-semibold">{item.title}</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card className="w-[350px]">
        <CardContent className="pt-6 flex items-center justify-between">
          <div className="flex flex-col gap-4 items-center text-sm flex-1 relative">
            <span className="material-symbols-rounded text-2xl center-element">
              solar_power
            </span>
            <p className="font-semibold">Panels count</p>
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[110px] w-full"
            >
              <RadialBarChart
                startAngle={270}
                endAngle={0}
                innerRadius={40}
                outerRadius={48}
                data={chartData}
              >
                <RadialBar dataKey="visitors" background cornerRadius={10} />
              </RadialBarChart>
            </ChartContainer>
            <p>209 / 315</p>
          </div>
          <div className="flex flex-col gap-4 items-center text-sm flex-1 relative">
            <span className="material-symbols-rounded text-2xl center-element">
              energy_savings_leaf
            </span>
            <p className="font-semibold">Yearly energy</p>
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[110px] w-full relative"
            >
              <RadialBarChart
                startAngle={270}
                endAngle={0}
                innerRadius={40}
                outerRadius={48}
                data={chartData}
              >
                <RadialBar dataKey="visitors" background cornerRadius={10} />
              </RadialBarChart>
            </ChartContainer>
            <p>124.613.1 KWh</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
