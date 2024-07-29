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
import { ProjectHighlightsAccordian } from "@/components/Accordian/ProjectHighlightsAccordian";
import { ChooseProjectCarousel } from "@/components/Carousel/ChooseProject";
import { AboutTrulifeCarousel } from "@/components/Carousel/AboutTrulifeCarousel";
import { ClubAmenitiesCarousel } from "@/components/Carousel/ClubAmenitiesCarousel";

const TruLife = () => {
    return (
        <div className="flex grow flex-col items-center self-stretch">
            <TrulifeHeaderCarousel />
            <section className="About px-8 sm:px-40 py-12 flex flex-col sm:flex-row items-start justify-between bg-white gap-5 sm:gap-32 ">
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
                            <div className="Text flex text-start justify-start flex-col gap-2">
                                <h1
                                    className="self-stretch text-black text-3xl sm:text-4xl font-semibold"
                                >
                                    Trulife
                                </h1>
                                <p className=" text-gray-600 text-sm sm:text-md font-normal font-secondary leading-9">
                                    Your Exquisite Sanctuary of Nature and Luxury
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6 basis-3/4">
                    <p className="text-left text-gray-600 text-md font-normal font-secondary leading-9">
                        Picture yourself in one of 131 resort-themed villas, nestled around 45,000 sq ft of lush gardens. Choose from a range of 2/3/4 Bed villas, each meticulously designed with dimensions spanning 1400 to 3000 sq ft. TruLife is not just a residence; it&apos;s a landmark in Karjat, seamlessly connecting you to nature and modern living. Operated by Holistic Nature Homes LLP, The TruLife Club, spanning 22,000 sq ft, redefines holistic living with a landscaped track, state-of-the-art gym, Café, and a multi-cuisine restaurant. Welcome to TruLife, where every facet of life finds its perfect harmony.
                    </p>
                </div>
            </section>
            <div className="flex flex-wrap items-center justify-center gap-5">
                <AboutCard title="Configuration" subTitle="2 | 3 | 4 Bed Villas" Icon={LuBedDouble} />
                <AboutCard title="Price Range" subTitle="Starting ₹69.8 L" Icon={IoPricetagOutline} />
                <AboutCard title="Upcoming Resort" subTitle="3 Star Boutique Resort" Icon={FaUmbrellaBeach} />
                <AboutCard title="Prime Location" subTitle="Karjat" Icon={IoLocationOutline} />
                <AboutCard title="Project Status" subTitle="On-going" Icon={IoConstructOutline} />
                <AboutCard title="Architecture" subTitle="Sustainable Design" Icon={GrUserWorker} />
            </div>
            <AboutTrulifeCarousel/>
            <section className="w-[100vw] flex flex-col sm:flex-row items-center sm:items-start justify-center self-stretch px-14 py-20 gap-8 sm:gap-36">
                <div className="Col-1 flex flex-col items-start justify-start self-stretch gap-4 sm:gap-12">
                    <SectionHeader
                        title="Project Highlights"
                        subTitle="The Appreciation Of Value Addition"
                        titleColor="text-secondary"
                        subTitleColor="text-lime-900"
                    />
                    <ProjectHighlightsAccordian />
                </div>
                <ProjectHighlightsCarousel />
            </section>
            <section className="ClubAmenities w-[100vw] flex flex-col items-center sm:items-start justify-center self-stretch px-8 py-14 gap-8">
                    <h2 className="text-2xl sm:text-4xl text-lime-900 font-semibold justify-center items-center ">
                       Trulife Club Amenities
                    </h2>
                <ClubAmenitiesCarousel/>
            </section>
            <section className="OtherProjects w-[100vw] flex flex-col items-center justify-center self-stretch py-20 gap-8">
                <div className="Header justify-center flex flex-col items-center gap-2 sm:gap-3">
                    <h2 className="text-2xl sm:text-4xl text-lime-900 font-semibold">
                       Other Projects
                    </h2>
                </div>
                <div className="Carousel sm:px-16">
                <ChooseProjectCarousel />
                </div>
            </section>
        </div >
    );
};

export default TruLife;
