import { Input, Slider, TabsContent } from "@/components";
import { InfoCard } from "./InfoCard/InfoCard";

export const PotentialAnalysis = () => {
  return (
    <TabsContent value="potential-analysis" className="w-full pl-[6px]">
      <div className="text-sm mb-8 pb-8">
        <div className="mb-4">
          <p>Values are only placeholders.</p>
          <p>Update with your own values.</p>
        </div>
        <div className="w-full p-3 bg-yellow-100 flex items-center gap-2 rounded-lg mb-8">
          <span className="material-symbols-rounded text-purple-800">info</span>
          <p className="text-purple-800">
            Projections use a USA financial model
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="grid w-full items-center gap-1.5">
            <label htmlFor="monthly-avg-bill">
              Monthly average energy bill
            </label>
            <Input type="text" id="monthly-avg-bill" />
          </div>
          <div className="grid w-full items-center gap-4 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-rounded">solar_power</span>
                <p>Panel count</p>
              </div>
              <p>31 panels</p>
            </div>
            <Slider max={300} min={1} step={1} />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <label htmlFor="solar-incentives">Solar incentives</label>
            <Input type="text" id="solar-incentives" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <label htmlFor="cost-per-kilowat">Energy cost per kWh</label>
            <Input type="text" id="cost-per-kilowat" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <label htmlFor="cost-per-watt">Installation cost per Watt</label>
            <Input type="text" id="cost-per-watt" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <label htmlFor="panel-capacity">Panel capacity</label>
            <Input type="text" id="panel-capacity" />
          </div>
        </div>
      </div>
      <div className="fixed right-6 top-6 z-10">
        <InfoCard />
      </div>
    </TabsContent>
  );
};
