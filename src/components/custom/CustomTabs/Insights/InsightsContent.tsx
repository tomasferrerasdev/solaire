import { Input, Slider, Switch, TabsContent } from "@/components";

export const InsightsContent = () => {
  return (
    <TabsContent value="insights" className="w-full pl-[6px]">
      <div className="text-sm max-w-[370px] mb-8">
        <p className="font-semibold mb-1">Yearly energy: 124.61 MWh</p>
        <p>
          Building Insights endpoint provides data on the location, dimensions &
          solar potential of a building.
        </p>
      </div>
      <div className="w-full flex flex-col gap-4 mb-8">
        <div className="flex items-center justify-between text-sm font-semibold">
          <div>
            <p>Panel count</p>
          </div>
          <div>
            <p>100 panels</p>
          </div>
        </div>
        <Slider max={315} step={1} defaultValue={[100]} />
      </div>
      <div className="w-full flex flex-col gap-4 mb-8">
        <p className="font-semibold text-sm">Solar panel capacity (Watts)</p>
        <Input type="number" placeholder="Panel capacity (Watts)" />
      </div>
      <div className="flex items-center gap-2">
        <Switch />
        <p className="font-semibold text-sm">Toggle panels visibility</p>
      </div>
    </TabsContent>
  );
};
