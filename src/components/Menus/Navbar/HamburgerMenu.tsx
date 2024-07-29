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
import { projectList, aboutList, hospitalityList } from "./ListItems/Lists";
import { RiArrowRightWideFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";

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
            <SheetTitle className="text-start text-primary text-xl font-bold">
              AY Associates
            </SheetTitle>
          </SheetHeader>
          <Accordion type="single" collapsible className="w-full">
            <Link href="/" onClick={handleClose}>
              <AccordionItem
                value="item-1"
                className="py-4 active:bg-neutral-200 active:text-accent active:scale-105"
              >
                Home
              </AccordionItem>
            </Link>

            <AccordionItem value="item-1" className="py-1.5">
              <AccordionTrigger className="font-[400] text-base">
                About
              </AccordionTrigger>
              <AccordionContent className="flex flex-col justify-center">
                {aboutList.map((aboutItem) => (
                  <>
                    <div
                      key={aboutItem.title}
                      className="h-[1px] bg-neutral-200 self-stretch"
                    ></div>
                    <Link
                      key={aboutItem.title}
                      href={aboutItem.href}
                      onClick={handleClose}
                      className="flex items-center justify-between py-3 active:bg-neutral-200 active:text-accent active:scale-105"
                    >
                      <div className="flex flex-col gap-2">
                        <h3 className="text-sm font-medium leading-none">
                          {aboutItem.title}
                        </h3>
                      </div>
                      <RiArrowRightWideFill className="fill-primary w-3 h-3" />
                    </Link>
                  </>
                ))}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="py-1.5">
              <AccordionTrigger className="font-[400] text-base">
                Projects
              </AccordionTrigger>
              <AccordionContent className="flex flex-col justify-center">
                {projectList.map((projectItem) => (
                  <>
                    <div className="h-[1px] bg-neutral-200 self-stretch"></div>
                    <Link
                      key={projectItem.title}
                      href={projectItem.href}
                      onClick={handleClose}
                      className="flex items-center justify-between py-3 active:bg-neutral-200 active:text-accent active:scale-105"
                    >
                      <div className="flex flex-col gap-2">
                        <h3 className="text-sm font-medium leading-none">
                          {projectItem.title}
                        </h3>
                      </div>
                      <RiArrowRightWideFill className="fill-primary w-3 h-3" />
                    </Link>
                  </>
                ))}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="py-1.5">
              <AccordionTrigger className="font-[400] text-base">
                Hospitality
              </AccordionTrigger>
              <AccordionContent className="flex flex-col justify-center">
                {hospitalityList.map((hospitalityItem) => (
                  <>
                    <div className="h-[1px] bg-neutral-200 flex self-stretch "></div>
                    <Link
                      key={hospitalityItem.title}
                      href={hospitalityItem.href}
                      onClick={handleClose}
                      className="flex items-center justify-between py-3 active:bg-neutral-200 active:text-accent active:scale-105"
                    >
                      <div className="flex flex-col ">
                        <h3 className="text-sm font-medium leading-none">
                          {hospitalityItem.title}
                        </h3>
                      </div>
                      <RiArrowRightWideFill className="fill-primary w-3 h-3" />
                    </Link>
                  </>
                ))}
              </AccordionContent>
            </AccordionItem>

            <Link href="/contact" onClick={handleClose}>
              <AccordionItem
                value="item-4"
                className="py-4 active:bg-neutral-200 active:text-accent active:scale-105"
              >
                Contact Us
              </AccordionItem>
            </Link>
          </Accordion>
        </div>
        <SheetFooter>
          <Button
            onClick={handleClose}
            size={"lg"}
            className="my-6 rounded-full border-2 font-semibold px-3 py-2.5 bg-primary text-primary-foreground gap-2"
            asChild
          >
            <Link href={"/"}>
              <FaPhoneAlt />
              Call now
            </Link>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
