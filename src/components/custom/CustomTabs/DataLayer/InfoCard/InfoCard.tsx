import { Card, CardHeader, CardTitle, CardContent, Slider } from "@/components";

export const InfoCard = () => {
  return (
    <div className="flex flex-col gap-2">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Data layer</CardTitle>
          <hr />
        </CardHeader>
        <CardContent className="text-sm">
          <p className="pb-6">
            <span className="font-semibold">Monthly sunshine: </span>The monthly
            flux map (sunlight on roofs, broken down by month) of the region.
            Values are kWh/kW/year. The GeoTIFF imagery file pointed to by this
            URL will contain twelve bands, corresponding to January...December,
            in order.
          </p>

          <div>
            <div className="h-5 w-full uv-gradient border border-black rounded-lg mb-1"></div>
            <div className="flex items-center justify-between">
              <p>shady</p>
              <p>sunny</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="w-[350px]">
        <CardContent className="text-sm pt-6 flex flex-col gap-2 text-center">
          <Slider min={1} max={12} step={1} />
          <p className="font-semibold">January</p>
        </CardContent>
      </Card>
    </div>
  );
};
