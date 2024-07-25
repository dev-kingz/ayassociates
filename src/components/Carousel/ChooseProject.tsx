import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  return (
    <Carousel className="w-full">
      <CarouselContent className="flex">
        {projects.map((project, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
            <div className="rounded-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-[380px] object-cover rounded-lg" />
              <CardContent className="flex flex-col items-center justify-center px-6 py-3">
                <div className="flex flex-col justify-between items-center">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className={`status ${project.status.toLowerCase()}`}>{project.status}</span>
                </div>
                <p className="text-gray-500">{project.location}</p>
                <p className="text-gray-700">{project.description}</p>
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
