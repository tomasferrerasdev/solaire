import { Tabs, TabsList, TabsTrigger } from "@/components";
import { InsightsContent } from "./Insights/InsightsContent";
import { DataLayer } from "./DataLayer/DataLayer";
import { PotentialAnalysis } from "./PotentialAnalysis/PotentialAnalysis";
import { getClosestBuilding } from "@/actions/get-closest-building";

export const CustomTabs = async () => {
  const res = await getClosestBuilding({
    lat: 37.7749,
    lng: -122.4194,
  });
  console.log(res);
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
