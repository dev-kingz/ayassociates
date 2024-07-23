"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { NavigationMenuC } from "./NavigationMenuC";
import { NavigationMenuMobileC } from "./HamburgerMenu";
import { Button } from "@/components/ui/button";
import { FaPhoneAlt } from "react-icons/fa";

export function Navbar() {
  const route = usePathname();
  const [isHomepage, setIsHomepage] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (route === "/") setIsHomepage(true);
    else setIsHomepage(false);

    // Event listener to update scrollY state
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add event listener to window scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [route]);

  return (
    <nav
      className={cn("absolute left-0 top-0 z-50 flex h-[70px] w-full items-center justify-between self-stretch px-6  transition-transform duration-300 ease-in-out md:px-20"
      )}
    >
      <Link href={"/"}>
        <h1 className="text-xl font-bold text-white">AY Associates</h1>
      </Link>
      <NavigationMenuC />
      <div className="flex items-center justify-center gap-2">
        <Button className="font-semibold px-3 py-2.5 bg-primary rounded-full text-primary-foreground gap-2">
          <FaPhoneAlt />
          Call Now
        </Button>
        <NavigationMenuMobileC />
      </div>
    </nav>
  );
}
