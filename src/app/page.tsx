import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full bg-white">
      <section className="min-h-screen w-full grid grid-cols-12 gap-5">
        <article className="col-span-5 px-5">
          <nav className="py-6">
            <Link href="/">
              <Image src={`/logo.svg`} alt="logo" width={40} height={40} />
            </Link>
          </nav>
        </article>
        <aside className="col-span-7">here goes a map</aside>
      </section>
    </main>
  );
}
