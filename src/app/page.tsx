import {
  Input,
  NavbarMenu,
  Button,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full bg-white">
      <section className="min-h-screen w-full grid grid-cols-12 gap-5">
        <article className="col-span-5 px-5 w-full">
          <nav className="py-6 flex items-center gap-4 mb-10">
            <Link href="/">
              <Image src={`/logo.svg`} alt="logo" width={40} height={40} />
            </Link>
            <NavbarMenu />
          </nav>

          <div className="flex w-full items-center space-x-2 mb-6">
            <Input
              type="text"
              placeholder="Enter your address"
              className="py-6"
            />
            <Button type="submit" className="py-6">
              Search
            </Button>
          </div>
          <div>
            <Tabs defaultValue="account">
              <TabsList className="grid grid-cols-3 text-sm w-[400px]">
                <TabsTrigger value="insights">Building insights</TabsTrigger>
                <TabsTrigger value="data-layer">Data layer</TabsTrigger>
                <TabsTrigger value="potential-analysis">
                  Potential analysis
                </TabsTrigger>
              </TabsList>
              <TabsContent value="insights" className="w-full pl-[6px]">
                Building insights
              </TabsContent>
              <TabsContent value="data-layer" className="w-full pl-[6px]">
                Data layer
              </TabsContent>
              <TabsContent
                value="potential-analysis"
                className="w-full pl-[6px]"
              >
                potential-analysis
              </TabsContent>
            </Tabs>
          </div>
        </article>
        <aside className="col-span-7 bg-black relative">
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
