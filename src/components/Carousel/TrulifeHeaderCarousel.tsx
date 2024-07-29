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
        image: "/gallery/images/Trulife-Header-Image1.png",
    },
    {
        image: "/gallery/images/Trulife-Header-Image2.png",
    },
    {
        image: "/gallery/images/Trulife-Header-Image3.png",
    },
];

export function TrulifeHeaderCarousel() {
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
                                    className="w-full h-[600px] object-cover"
                                />
                                <CardContent className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 gap-3 bg-gradient-to-t from-black/50 to-transparent">
                                    <h1 className="text-3xl sm:text-5xl font-semibold text-white">TruLife</h1>
                                    <div className="Details flex flex-col">
                                        <p className="text-white">Karjat, Raigad</p>
                                        <div className="HeaderButtons flex flex-col sm:flex-row gap-4 mt-4">
                                            <Link href="/">
                                                <Button
                                                    variant="secondary"
                                                    size="lg"
                                                    className="bg-secondary text-white shadow-xl"
                                                >
                                                    Instant Callback
                                                </Button>
                                            </Link>
                                            <Link href="/">
                                                <Button variant="outline" size="lg" className="text-white shadow-xl border-white">
                                                    Download Brochure
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </CardContent>
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
