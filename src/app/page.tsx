import { NavbarMenu, AddressSearchbar, CustomTabs } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full bg-white">
      <section className="min-h-screen w-full grid grid-cols-12 gap-5 relative">
        <article className="col-span-4 px-5 w-full">
          <NavbarMenu />
          <AddressSearchbar />
          <CustomTabs />
        </article>
        <aside className="col-start-6 col-end-13 bg-black relative">
          <Image
            src={`/images/placeholder/map.png`}
            fill
            alt="map"
            className="object-cover"
          />
        </aside>
      </section>
    </main>
  );
}
