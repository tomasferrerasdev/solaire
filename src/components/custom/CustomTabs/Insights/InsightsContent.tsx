import { TabsContent } from "@/components";
import { InfoCard } from "./InfoCard/InfoCard";
import { getClosestBuilding } from "@/actions/get-closest-building";
import { InsightsVariables } from "./InsightsVariables";

export const InsightsContent = async () => {
  const data = await getClosestBuilding({
    lat: 37.7749,
    lng: -122.4194,
  });

  const { solarPotential } = data;

  return (
    <TabsContent value="insights" className="w-full pl-[6px]">
      <div className="text-sm max-w-[370px] mb-8">
        <p className="font-semibold mb-1">Yearly energy: 124.61 MWh</p>
        <p>
          Building Insights endpoint provides data on the location, dimensions &
          solar potential of a building.
        </p>
      </div>
      <InsightsVariables solarPotential={solarPotential} />
      <div className="fixed right-6 top-6 z-10">
        <InfoCard data={data} />
      </div>
    </TabsContent>
  );
};
