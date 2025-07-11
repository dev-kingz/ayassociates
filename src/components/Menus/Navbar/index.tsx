"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { NavigationMenuC } from "./NavigationMenuC";
import { HamburgerMenu } from "./HamburgerMenu";
import { Button } from "@/components/ui/button";
import { FaPhoneAlt } from "react-icons/fa";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed left-0 top-0 z-50 flex h-[70px] w-full items-center justify-between self-stretch transition-all duration-300 ease-in-out px-4 lg:px-20",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-transparent"
      )}
    >
      <Link href={"/"}>
        <h1 className={cn(
          "text-xl font-bold transition-colors duration-300",
          isScrolled ? "text-lime-900" : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
        )}>
          AY Associates
        </h1>
      </Link>
      <NavigationMenuC isScrolled={isScrolled} />
      <div className="flex items-center justify-center gap-2">
        <Button className={cn(
          "font-medium px-3 py-2.5 rounded-full gap-2 transition-all duration-300",
          isScrolled 
            ? "bg-secondary text-primary-foreground hover:bg-secondary/90" 
            : "bg-secondary/90 text-white hover:bg-secondary shadow-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
        )}>
          <FaPhoneAlt />
          Call Now
        </Button>
        <HamburgerMenu isScrolled={isScrolled} />
      </div>
    </nav>
  );
}
