import { Tabs, TabsList, TabsTrigger } from "@/components";
import { InsightsContent } from "./Insights/InsightsContent";
import { DataLayer } from "./DataLayer/DataLayer";
import { PotentialAnalysis } from "./PotentialAnalysis/PotentialAnalysis";

export const CustomTabs = () => {
  return (
    <Tabs defaultValue="insights">
      <TabsList className="grid grid-cols-3 text-sm w-[400px] mb-6">
        <TabsTrigger value="insights">Building insights</TabsTrigger>
        <TabsTrigger value="data-layer">Data layer</TabsTrigger>
        <TabsTrigger value="potential-analysis">Potential analysis</TabsTrigger>
      </TabsList>
      <InsightsContent />
      <DataLayer />
      <PotentialAnalysis />
    </Tabs>
  );
};
