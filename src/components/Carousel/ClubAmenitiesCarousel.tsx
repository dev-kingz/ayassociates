"use client"
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const projects = [
  {
    image: "/gallery/images/Restaurant.png",
  },
  {
    image: "/gallery/images/ConferenceHall.png",
  },
  {
    image: "/gallery/images/Cafe.png",
  },
  {
    image: "/gallery/images/SwimmingPool.png",
  },
  {
    image: "/gallery/images/BanquetHall.png",
  },
  {
    image: "/gallery/images/SpaCenter.png",
  },
  {
    image: "/gallery/images/PristineLawnSpace.png",
  },
  {
    image: "/gallery/images/Fitness&Wellness.png",
  },
];

export function ClubAmenitiesCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="w-[310px] sm:w-full py-6">
      <CarouselContent className="flex">
        {projects.map((project, index) => (
          <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/6">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt="Image"
                width={600}
                height={500}
                className="w-full h-[360px] sm:h-[270px] object-cover rounded-lg"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}