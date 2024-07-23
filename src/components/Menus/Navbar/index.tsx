"use client";
import Link from "next/link";
import { NavigationMenuC } from "./NavigationMenuC";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-50 flex h-[80px] w-full items-center justify-center gap-20 px-6 md:px-20 bg-transparent">
      <Link href="/">
        <div className="text-white">
          <h1 className="text-xl font-semibold">AY Associates</h1>
        </div>
      </Link>
      <div className="flex items-center justify-center">
        <NavigationMenuC />
      </div>
        <Button asChild
          variant="secondary"
          size="lg"
          className="rounded-full shadow-xl bg-lime-800 text-white hover:text-lime-800"
        >
      <Link href="/">
          Call Us
      </Link>
        </Button>
    </nav>
  );
}
