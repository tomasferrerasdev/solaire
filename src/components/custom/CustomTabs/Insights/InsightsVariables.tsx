"use client";
import { Input, Slider, Switch } from "@/components/ui";
import { SolarPotential } from "@/interfaces/solar-api";
import { useBuildingInsightStore } from "@/store/insights-store";

export const InsightsVariables = ({
  solarPotential,
}: {
  solarPotential: SolarPotential;
}) => {
  const {
    panelCount,
    setPanelCount,
    panelCapacity,
    setPanelCapacity,
    panelVisibility,
  } = useBuildingInsightStore();
  return (
    <>
      <div className="w-full flex flex-col gap-4 mb-8">
        <div className="flex items-center justify-between text-sm font-semibold">
          <div>
            <p>Panel count</p>
          </div>
          <div>
            <p>{panelCount} panels</p>
          </div>
        </div>
        <Slider
          max={solarPotential.maxArrayPanelsCount}
          min={1}
          step={1}
          defaultValue={[1]}
          value={panelCount}
          onValueChange={(value) => setPanelCount(value)}
        />
      </div>
      <div className="w-full flex flex-col gap-4 mb-8">
        <p className="font-semibold text-sm">Solar panel capacity (Watts)</p>
        <Input
          type="number"
          placeholder="Panel capacity (Watts)"
          value={panelCapacity}
          onChange={(e) => setPanelCapacity(Number(e.target.value))}
        />
      </div>
      <div className="flex items-center gap-2">
        <Switch checked={panelVisibility} />
        <p className="font-semibold text-sm">Toggle panels visibility</p>
      </div>
    </>
  );
};
