import AboutCard from "@/components/Cards/AboutCard";
import PhotoCard from "@/components/Cards/PhotoCard";
import PhotoTextCard from "@/components/Cards/PhotoTextCard";
import SectionHeader from "@/components/Header/SectionHeader";
import TitleHeader from "@/components/Header/TitleHeader";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuBedDouble } from "react-icons/lu";
import { FaUmbrellaBeach } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoPricetagOutline } from "react-icons/io5";
import { IoConstructOutline } from "react-icons/io5";
import { GrUserWorker } from "react-icons/gr";
import { ProjectHighlightsCarousel } from "@/components/Carousel/ProjectHighlightsCarousel";
import { TrulifeHeaderCarousel } from "@/components/Carousel/TrulifeHeaderCarousel";
import { TrulifeResortHeaderCarousel } from "@/components/Carousel/TrulifeResortHeaderCarousel";
import ContactForm from "@/components/Forms/ContactForm";
import { ClubAmenitiesCarousel } from "@/components/Carousel/ClubAmenitiesCarousel";

const TruLife = () => {
    return (
        <div className="flex grow flex-col items-center self-stretch">
            <TrulifeResortHeaderCarousel />
            <section className="About px-8 sm:px-40 py-12 flex flex-col sm:flex-row items-start justify-between bg-white gap-5 sm:gap-32 ">
                <div className="flex flex-col gap-6 basis-1/4">
                    <div className="w-full flex-col justify-start items-start inline-flex gap-3">
                        <div className="flex justify-start items-center gap-4">
                            <div className="w-[75px] h-[1px] bg-secondary" />
                            <div className={`text-secondary text-md font-normal font-secondary`}>
                                About Project
                            </div>
                        </div>
                        <div className="flex flex-col self-stretch gap-3">
                            <Image
                                src="/gallery/logo/Truelife-Resort-Logo.png"
                                alt="Trulife Logo"
                                width={200}
                                height={200}
                            />
                            <p className=" text-gray-600 text-sm sm:text-md font-normal font-secondary">
                                3 star boutique resort
                                situated in the heart of Karjat, Raigad.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6 basis-3/4">
                    <p className="text-gray-600 text-sm sm:text-md font-normal font-secondary leading-9">
                        TruLife Club Resort is a 3-star boutique destination with 4-star amenities, sprawling across 2 acres in a nature-centric setting. It features 42 fully furnished suites, each designed for ultimate comfort and luxury. Embrace an eco-friendly ethos with a focus on sports and wellness, ensuring a serene retreat for all guests.<br />

                        This project offers passive income opportunities for both domestic and international investors. Through an innovative partnership model, investors gain full ownership of the resort and enjoy its rewards without any maintenance responsibilities. Additionally, investors benefit from extra perks, making it an attractive investment in their homeland.
                    </p>
                </div>
            </section>
            {/* <section className="ContactUs w-full relative overflow-hidden flex justify-center items-center">
                <Image
                    src="/gallery/images/ContactUs-bg.png"
                    alt="Contact Us"
                    width={2000}
                    height={300}
                    className="w-full h-[600px] object-cover"
                />
                <div className="absolute w-[500px] h-[300px] inset-0 flex flex-col items-center justify-center text-center py-8 gap-3 bg-white">
                    <h1 className="text-4xl font-semibold text-secondary">Contact Us</h1>
                    <ContactForm />
                </div>
            </section > */}
            <section className="ClubAmenities w-[100vw] flex flex-col items-center justify-center self-stretch px-8 gap-2 sm:gap-8">
                <div className="flex flex-col gap-2 items-center justify-center self-stretch">
                    <p className="text-secondary text-sm sm:text-md font-secondary">
                        4 Star Level Services & Facilities
                    </p>
                    <h2 className="text-3xl sm:text-4xl text-black font-medium justify-center items-center ">
                        World Class Amenities
                    </h2>
                    <p className="sm:px-96 text-secondary text-sm sm:text-md font-normal font-secondary text-center">
                        Treat yourself to revitalizing spa therapies, relax beside the scenic pool, and delight in delicious meals at our renowned restaurant.
                    </p>
                </div>
                <ClubAmenitiesCarousel />
            </section>
            <section className="Luxury w-[100vw] flex flex-col items-center justify-center self-stretch px-4 sm:px-40 py-6 gap-4 sm:gap-8">
                <div className="flex flex-col gap-2 items-center justify-center self-stretch">
                    <p className= "text-gray-500 text-sm sm:text-md font-secondary text-center">
                        Surrounded by lush landscapes,<br/>
                        For those seeking a perfect blend of luxury and intimacy, our resort promises an unforgettable escape into<br/>
                        refined elegance and natural beauty.
                    </p>
                </div>
                <Image
                    src="/gallery/images/Luxury-Image.png"
                    alt="Trulife Resort Map"
                    width={500}
                    height={500}
                    className="w-full"
                />
            </section>
            <section className="About py-12 flex flex-col items-center justify-center bg-white gap-5 sm:gap-8">
                <div className="flex flex-col px-4 sm:px-40 sm:flex-row gap-6 basis-1/4 sm:gap-32">
                    <div className="flex flex-col gap-6 basis-1/4">
                        <div className="w-full flex-col justify-start items-start inline-flex gap-3">
                            <div className="flex justify-start items-center gap-4">
                                <div className="w-[75px] h-[1px] bg-secondary" />
                                <div className={`text-secondary text-md font-normal font-secondary`}>
                                    About Project
                                </div>
                            </div>
                            <div className="flex self-stretch gap-3">
                                <Image
                                    src="/gallery/logo/Trulife-Logo.png"
                                    alt="Trulife Logo"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 basis-3/4">
                        <p className="text-left text-gray-600 txt-sm sm:text-md font-normal font-secondary leading-9">
                            Picture yourself in one of 131 resort-themed villas, nestled around 45,000 sq ft of lush gardens. Choose from a range of 2/3/4 Bed villas, each meticulously designed with dimensions spanning 1400 to 3000 sq ft. TruLife is not just a residence; it&apos;s a landmark in Karjat, seamlessly connecting you to nature and modern living. Operated by Holistic Nature Homes LLP, The TruLife Club, spanning 22,000 sq ft, redefines holistic living with a landscaped track, state-of-the-art gym, Café, and a multi-cuisine restaurant. Welcome to TruLife, where every facet of life finds its perfect harmony.
                        </p>
                    </div>
                </div>
                <div className="flex px-4 sm:px-40 flex-wrap items-center justify-center gap-5 ">
                    <AboutCard title="Configuration" subTitle="2 | 3 | 4 Bed Villas" Icon={LuBedDouble} />
                    <AboutCard title="Price Range" subTitle="Starting ₹69.8 L" Icon={IoPricetagOutline} />
                    <AboutCard title="Upcoming Resort" subTitle="3 Star Boutique Resort" Icon={FaUmbrellaBeach} />
                    <AboutCard title="Prime Location" subTitle="Karjat" Icon={IoLocationOutline} />
                    <AboutCard title="Project Status" subTitle="On-going" Icon={IoConstructOutline} />
                    <AboutCard title="Architecture" subTitle="Sustainable Design" Icon={GrUserWorker} />
                </div>
                </section>
        </div >
    );
};

export default TruLife;
