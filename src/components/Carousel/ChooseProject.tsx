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
    image: "/gallery/images/Choose-Project-Picture1.jpg",
    status: "Completed",
    title: "Holistic Royal Farms",
    location: "Karjat, Raigad",
    description: "1/2 & 1 Acre Developed Farm Plots",
  },
  {
    image: "/gallery/images/Choose-Project-Picture2.jpg",
    status: "Completed",
    title: "Evernest Farms",
    location: "Roha, Raigad",
    description: "1/2 & 1 Acre Developed Farm Plots",
  },
  {
    image: "/gallery/images/Choose-Project-Picture3.jpg",
    status: "On Going",
    title: "Evernest Prime",
    location: "Roha, Raigad",
    description: "Farmland Project with integrated resort",
  },
  {
    image: "/gallery/images/Choose-Project-Picture4.jpg",
    status: "On Going",
    title: "TruLife",
    location: "Karjat, Raigad",
    description: "Integrated Resort Themed Villa Estate",
  },
  {
    image: "/gallery/images/Choose-Project-Picture1.jpg",
    status: "Completed",
    title: "Holistic Royal Farms",
    location: "Karjat, Raigad",
    description: "1/2 & 1 Acre Developed Farm Plots",
  },
  {
    image: "/gallery/images/Choose-Project-Picture2.jpg",
    status: "Completed",
    title: "Evernest Farms",
    location: "Roha, Raigad",
    description: "1/2 & 1 Acre Developed Farm Plots",
  },
];

export function ChooseProjectCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="w-[280px] sm:w-full">
      <CarouselContent className="flex">
        {projects.map((project, index) => (
          <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={500}
                className="w-full h-[360px] sm:h-[380px] object-cover rounded-lg"
              />
              <span
                className={`absolute top-2 left-2 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-sm font-semibold ${project.status.toLowerCase()}`}
              >
                {project.status}
              </span>
              <CardContent className="flex flex-col text-start justify-start py-3 gap-3">
                <div className="Title flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-semibold text-secondary">{project.title}</h3>
                </div>
                <div className="Details flex flex-col">
                  <p className="text-gray-500">{project.location}</p>
                  <p className="text-md text-gray-700">{project.description}</p>
                </div>
              </CardContent>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}