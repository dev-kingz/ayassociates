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
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { IoIosArrowDown } from "react-icons/io";
import { ListItem } from "@/components/Menus/Navbar/ListItems";

export function NavigationMenuC() {
  return (
    <NavigationMenu className="hidden sm:flex">
      <NavigationMenuList className="flex space-x-4 items-center">
        <NavigationMenuItem>
          <Link href="/" passHref>
            <NavigationMenuLink className="px-3 text-white hover:text-gray-300">
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="gap-3 p-6 md:w-[100px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/" title="Our Story"/>
              <ListItem href="/" title="Blogs"/>
              <ListItem href="/docs/primitives/typography" title="Careers"/>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="gap-3 p-6 md:w-[100px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/" title="Trulife"/>
              <ListItem href="/" title="Hoslistic Royal Farms"/>
              <ListItem href="/" title="Evernest Prime"/>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/bespoke" passHref>
            <NavigationMenuLink className="px-3 text-white hover:text-gray-300">
              Bespoke
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/hospitality" passHref>
            <NavigationMenuLink className="px-3 text-white hover:text-gray-300">
              Hospitality
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contact" passHref>
            <NavigationMenuLink className="px-3 text-white hover:text-gray-300">
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
