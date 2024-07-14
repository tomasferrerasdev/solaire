import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Switch,
  TabsContent,
} from "@/components";
import { InfoCard } from "./InfoCard/InfoCard";

export const DataLayer = () => {
  return (
    <TabsContent value="data-layer" className="w-full pl-[6px]">
      <div className="text-sm max-w-[370px] mb-8 flex flex-col gap-4">
        <p>
          Data Layers endpoint provides raw and processed imagery and granular
          details on an area surrounding a location.
        </p>
        <div>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue
                className="font-semibold"
                placeholder="Select desired layer"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Layers</SelectLabel>
                <SelectItem value="no-layer">No layer</SelectItem>
                <SelectItem value="rooof-mask">Roof mask</SelectItem>
                <SelectItem value="digital-surface-model">
                  Digital surface model
                </SelectItem>
                <SelectItem value="aerial-image">Aerial image</SelectItem>
                <SelectItem value="annual-sunshine">Anual sunshine</SelectItem>
                <SelectItem value="monthly-sunshine">
                  Monthly sunshine
                </SelectItem>
                <SelectItem value="hourly-shade">Hourly shade</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <p>
          <span className="font-semibold">
            Low altitude aerial imagery available
          </span>
          . Imagery and DSM data were processed at 10 cm/pixel.
        </p>
        <div className="flex items-center gap-2">
          <Switch />
          <p>Solar panels</p>
        </div>
        <div className="flex items-center gap-2">
          <Switch />
          <p>Roof only</p>
        </div>
        <div className="flex items-center gap-2">
          <Switch />
          <p>Play yearly months animation</p>
        </div>
      </div>
      <div className="fixed right-6 top-6 z-10">
        <InfoCard />
      </div>
    </TabsContent>
  );
};
