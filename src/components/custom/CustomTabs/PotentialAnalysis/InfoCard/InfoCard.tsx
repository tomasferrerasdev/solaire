"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components";
import { ANALYSIS_DATA, DATA } from "./data";
import { PotentialAnalysisChart } from "./PotentialAnalysisChart";

export const InfoCard = () => {
  return (
    <div className="flex flex-col gap-2">
      <Card className="w-[350px]">
        <CardHeader className="text-sm">
          <CardTitle>Solar potential analysis</CardTitle>
          <hr />
        </CardHeader>
        <CardContent className="grid gap-4 text-sm">
          {DATA.map((item) => (
            <div key={item.id} className="grid grid-cols-2">
              <div className="flex items-center gap-1">
                <span className="material-symbols-rounded">{item.icon}</span>
                <span>{item.title}</span>
              </div>
              <span className="text-end">{item.value}</span>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card className="w-[350px]">
        <CardHeader className="text-sm">
          <CardTitle>Cost analysis for 20 years</CardTitle>
          <hr />
        </CardHeader>
        <CardContent className="grid gap-4 text-sm">
          <PotentialAnalysisChart />
          {ANALYSIS_DATA.map((item) => (
            <div key={item.id} className="grid grid-cols-2">
              <div className="flex items-center gap-1">
                <span className="material-symbols-rounded">{item.icon}</span>
                <span>{item.title}</span>
              </div>
              <span className="text-end">{item.value}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
