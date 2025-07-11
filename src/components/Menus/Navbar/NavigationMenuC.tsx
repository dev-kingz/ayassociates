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
import { ListItem } from "./ListItems";
import { projectList, hospitalityList } from "./ListItems/Lists";
import { cn } from "@/lib/utils";

interface NavigationMenuCProps {
  isScrolled?: boolean;
}

export function NavigationMenuC({ isScrolled = false }: NavigationMenuCProps) {
  const textColor = isScrolled 
    ? "text-lime-900 hover:text-secondary" 
    : "text-white hover:text-gray-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]";
  
  return (
    <NavigationMenu className="hidden sm:flex justify-center">
      <NavigationMenuList className="gap-7">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={cn("transition-colors duration-300 font-medium", textColor)}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

         <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={cn("transition-colors duration-300 font-medium", textColor)}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className={cn(
            "bg-transparent text-md rounded-full transition-colors duration-300 font-medium",
            isScrolled ? "text-lime-900 hover:text-secondary" : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:text-gray-300"
          )}>
            Projects
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid p-2 md:w-[230px] border-t-4 border-green-800">
              {projectList.map((projectItem) => (
                <ListItem
                  key={projectItem.title}
                  title={projectItem.title}
                  href={projectItem.href}
                 />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className={cn(
            "bg-transparent text-md rounded-full transition-colors duration-300 font-medium",
            isScrolled ? "text-lime-900 hover:text-secondary" : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:text-gray-300"
          )}>
            Hospitality
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid p-2 md:w-[230px] border-t-4 border-green-800">
              {hospitalityList.map((hospitalityItem) => (
                <ListItem
                  key={hospitalityItem.title}
                  title={hospitalityItem.title}
                  href={hospitalityItem.href}
                 />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={cn("transition-colors duration-300 font-medium", textColor)}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
