import { Input, NavbarMenu, Button } from "@/components";
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

          <div className="flex w-full items-center space-x-2">
            <Input
              type="text"
              placeholder="Enter your address"
              className="py-6"
            />
            <Button type="submit" className="py-6">
              Search
            </Button>
          </div>
        </article>
        <aside className="col-span-7 bg-black">here goes a map</aside>
      </section>
    </main>
  );
}
