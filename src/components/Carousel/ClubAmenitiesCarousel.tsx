"use client"
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselApi,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
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
  const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
    setApi={setApi}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="w-[310px] sm:w-full py-6">
      <CarouselContent className="flex gap-4">
        {projects.map((project, index) => (
          <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/5">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt="Image"
                width={600}
                height={500}
                className="w-full h-[360px] sm:h-[310px] object-cover rounded-lg"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <button
                    className="absolute left-4 top-1/2 flex h-8 w-8 -translate-y-1/2 transform items-center justify-center font-bold"
                    onClick={() => api?.scrollTo(current - 1)}
                >
                    <FaAngleLeft className="h-6 w-6 text-white" />
                </button>
                <button
                    className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 transform items-center justify-center font-bold"
                    onClick={() => api?.scrollTo(current + 1)}
                >
                    <FaAngleRight className="h-6 w-6 text-white" />
                </button>
    </Carousel>
  );
}