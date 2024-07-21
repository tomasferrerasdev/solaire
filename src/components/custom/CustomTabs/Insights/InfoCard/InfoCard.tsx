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
import { SolarApiProps } from "@/interfaces/solar-api";

export const InfoCard = ({ data }: SolarApiProps) => {
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

  const {
    solarPotential: {
      maxSunshineHoursPerYear,
      maxArrayAreaMeters2,
      maxArrayPanelsCount,
      carbonOffsetFactorKgPerMwh,
    },
  } = data;

  return (
    <div className="flex flex-col gap-2">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Building Insights</CardTitle>
          <hr />
        </CardHeader>
        <CardContent className="grid gap-4 text-sm">
          <ul className="flex flex-col gap-1">
            <li className="flex justify-between">
              <span className="font-semibold">Annual sunshine</span>
              <span>{Math.trunc(maxSunshineHoursPerYear)} m2</span>
            </li>
            <li className="flex justify-between">
              <span className="font-semibold">Roof area</span>
              <span>{Math.trunc(maxArrayAreaMeters2)} m2</span>
            </li>
            <li className="flex justify-between">
              <span className="font-semibold">Max. panel count</span>
              <span>{Math.trunc(maxArrayPanelsCount)} panels</span>
            </li>
            <li className="flex justify-between">
              <span className="font-semibold">Potential CO2 savings</span>
              <span>{Math.trunc(carbonOffsetFactorKgPerMwh)} Kg/MWh</span>
            </li>
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
            <p>209 / {maxArrayPanelsCount}</p>
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
