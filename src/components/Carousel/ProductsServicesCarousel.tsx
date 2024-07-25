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
import Autoplay from "embla-carousel-autoplay"

const images = [
  "/gallery/images/Products-Services-Carousel-Picture1.jpg",
  "/gallery/images/Products-Services-Carousel-Picture2.jpg",
  "/gallery/images/Products-Services-Carousel-Picture3.jpg",
];

export function ProductsServicesCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <Carousel 
    plugins={[plugin.current]}
    onMouseEnter={plugin.current.stop}
    onMouseLeave={plugin.current.reset}
    className="w-[440px] h-[400px]">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className=" h-full"> {/* Ensure full width and height */}
            <div className="w-full h-full"> {/* Ensure the height is fully used */}
              <Card className="w-full h-[500px]"> {/* Fixed width and full height */}
                <CardContent className="flex items-center justify-center h-full p-0"> {/* Removed padding */}
                  <img src={image} alt={`Image ${index + 1}`} className="rounded-lg w-full h-full object-cover" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
