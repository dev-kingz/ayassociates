"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { ListItem } from "@/components/Menus/Navbar/ListItems";

export function NavigationMenuC() {
  return (
    <NavigationMenu className="hidden sm:flex">
      <NavigationMenuList className="flex space-x-4 items-center">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="px-3 text-white hover:text-gray-300">
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-primary-foreground">
            About Us
          </NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <ul className="grid w-[200px] gap-3 p-4">
              <ListItem href="/" title="Our Story" />
              <ListItem href="/" title="Blogs" />
              <ListItem href="/docs/primitives/typography" title="Careers" />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuViewport />
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-primary-foreground">
            Projects
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-3 p-4">
              <ListItem href="/" title="Trulife" />
              <ListItem href="/" title="Hoslistic Royal Farms" />
              <ListItem href="/" title="Evernest Prime" />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem asChild>
          <Link href="/bespoke" legacyBehavior passHref>
            <NavigationMenuLink className="px-3 text-white hover:text-gray-300">
              Bespoke
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/hospitality" legacyBehavior passHref>
            <NavigationMenuLink className="px-3 text-white hover:text-gray-300">
              Hospitality
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className="px-3 text-white hover:text-gray-300">
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
