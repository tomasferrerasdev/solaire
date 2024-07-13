import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components";
import Link from "next/link";
import Image from "next/image";
import { SOLAIRE_FUNCTIONS, WHY_SOLAIRE } from "./NavbarData";

export const NavbarMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Why solaire?</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex bg-green-100  h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image
                      src={`/logo.svg`}
                      alt="logo"
                      width={24}
                      height={24}
                    />
                    <div className="mb-2 mt-4 text-lg font-medium">Solaire</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Fueling growth together. Become an investor in our solar
                      vision
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {WHY_SOLAIRE.map(({ id, title, description }) => (
                <li key={id}>
                  <Link
                    href="/"
                    className="w-full flex flex-col gap-1 hover:bg-zinc-100 p-2 rounded-md"
                  >
                    <div className="text-sm font-semibold leading-none">
                      {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Principal functions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3 relative">
                <Image
                  src={`/images/menu/house-analysis.webp`}
                  alt="logo"
                  fill
                  className="object-cover rounded-md"
                />
              </li>
              {SOLAIRE_FUNCTIONS.map(({ id, title, description }) => (
                <li key={id}>
                  <Link
                    href="/"
                    className="w-full flex flex-col gap-1 hover:bg-zinc-100 p-2 rounded-md"
                  >
                    <div className="text-sm font-semibold leading-none">
                      {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
