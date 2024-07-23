"use client";

import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="h-auto w-7 text-xl text-white sm:hidden">
        <HamburgerMenuIcon />
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between w-full">
        <Cross1Icon
          className="absolute right-[14px] top-[13px] z-10 h-5 w-5 cursor-pointer"
          onClick={handleClose}
        />
        <div className="flex flex-col gap-8">
          <SheetHeader>
            <SheetTitle className="text-start">RK Tandoor</SheetTitle>
          </SheetHeader>
          <Accordion type="single" collapsible className="w-full">
            <Link href="/" onClick={handleClose}>
              <AccordionItem value="item-1" className="py-4">
                Home
              </AccordionItem>
            </Link>

            <AccordionItem value="item-3" className="py-1.5">
              <AccordionTrigger>Projects</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>

            <Link href="/about" onClick={handleClose}>
              <AccordionItem value="item-2" className="py-4">
                About Us
              </AccordionItem>
            </Link>

            <Link href="/contact" onClick={handleClose}>
              <AccordionItem value="item-4" className="py-4">
                Contact Us
              </AccordionItem>
            </Link>
          </Accordion>
        </div>
        <SheetFooter>
          <Button
            onClick={handleClose}
            size={"lg"}
            className="my-6 rounded-full border-2 bg-transparent"
            asChild
          >
            <Link href={"/shop"}>Shop Now</Link>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
