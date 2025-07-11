"use client"
import * as React from "react";
import { CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { Button } from "../ui/button";
import Link from "next/link";

const projects = [
    {
        image: "/gallery/images/Trulife-Resort-Header-Image1.png",
    },
    {
        image: "/gallery/images/Trulife-Resort-Header-Image2.png",
    },
    {
        image: "/gallery/images/Trulife-Resort-Header-Image3.png",
    },
];

export function TrulifeResortHeaderCarousel() {
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
        <div className="relative w-full">
            <Carousel
                setApi={setApi}
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                className="w-full">
                <CarouselContent className="flex">
                    {projects.map((project, index) => (
                        <CarouselItem key={index} className="basis-full">
                            <div className="relative overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt="TruLife Header Image"
                                    width={2000}
                                    height={300}
                                    className="w-full h-[100vh] object-cover"
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
        </div>
    );
}
