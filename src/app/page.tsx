import Image from "next/image";
import { Loader } from "@googlemaps/js-api-loader";
import { NavbarMenu, AddressSearchbar, CustomTabs } from "@/components";
import { getClosestBuilding } from "@/actions/get-closest-building";

export default async function Home() {
  const res = await getClosestBuilding({
    lat: 37.7749,
    lng: -122.4194,
  });
  console.log(res);

  return (
    <main className="w-full bg-white">
      <section className="min-h-screen w-full grid grid-cols-12 gap-5 relative">
        <article className="col-span-4 px-5 w-full">
          <NavbarMenu />
          <AddressSearchbar />
          <CustomTabs />
        </article>
        <aside className="col-start-5 col-end-13 relative">
          <div className="sticky top-0 right-0 w-full h-screen">
            <Image
              src={`/images/placeholder/map.png`}
              fill
              alt="map"
              className="object-cover"
            />
          </div>
        </aside>
      </section>
    </main>
  );
}
