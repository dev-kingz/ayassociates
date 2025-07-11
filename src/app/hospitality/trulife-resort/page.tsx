"use client";

import AboutCard from "@/components/Cards/AboutCard";
import Image from "next/image";
import React from "react";
import { LuBedDouble } from "react-icons/lu";
import { FaUmbrellaBeach } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoPricetagOutline } from "react-icons/io5";
import { IoConstructOutline } from "react-icons/io5";
import { GrUserWorker } from "react-icons/gr";
import { TrulifeResortHeaderCarousel } from "@/components/Carousel/TrulifeResortHeaderCarousel";
import { ClubAmenitiesCarousel } from "@/components/Carousel/ClubAmenitiesCarousel";
import AnimatedSection from "@/components/Animation/AnimatedSection";
import FloatingElements from "@/components/Enhancement/FloatingElements";

const TruLife = () => {
  return (
    <div className="flex grow flex-col items-center self-stretch overflow-x-hidden">
      <TrulifeResortHeaderCarousel />
      <AnimatedSection animation="fade-in" className="About relative px-8 sm:px-48 py-24 flex flex-col sm:flex-row items-start justify-between bg-white gap-8 sm:gap-36 overflow-hidden">
        <FloatingElements variant="dots" density="low" />
        
        <div className="relative z-10 flex flex-col gap-8 basis-1/4 fade-in-left">
          <div className="w-full flex-col justify-start items-start inline-flex gap-6">
            <div className="inline-flex items-center gap-2 bg-lime-100 text-lime-700 px-4 py-2 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
              About Project
            </div>
            <div className="flex flex-col self-stretch gap-6">
              <Image
                src="/gallery/logo/Truelife-Resort-Logo.png"
                alt="Trulife Logo"
                width={200}
                height={200}
                className="hover:scale-105 transition-transform duration-300"
              />
              <p className="text-gray-600 text-lg font-normal font-secondary leading-relaxed">
                3 star boutique resort situated in the heart of Karjat, Raigad.
              </p>
            </div>
          </div>
        </div>
        <div className="relative z-10 flex flex-col gap-8 basis-3/4 fade-in-right">
          <p className="text-gray-600 text-lg font-normal font-secondary leading-relaxed">
            TruLife Club Resort is a 3-star boutique destination with 4-star
            amenities, sprawling across 2 acres in a nature-centric setting. It
            features 42 fully furnished suites, each designed for ultimate
            comfort and luxury. Embrace an eco-friendly ethos with a focus on
            sports and wellness, ensuring a serene retreat for all guests.
            <br />
            This project offers passive income opportunities for both domestic
            and international investors. Through an innovative partnership
            model, investors gain full ownership of the resort and enjoy its
            rewards without any maintenance responsibilities. Additionally,
            investors benefit from extra perks, making it an attractive
            investment in their homeland.
          </p>
        </div>
      </AnimatedSection>
      <AnimatedSection animation="fade-in" className="ClubAmenities relative w-[100vw] flex flex-col items-center justify-center self-stretch px-8 py-24 gap-8 sm:gap-16 bg-gradient-to-br from-green-50 via-white to-gray-50/30 overflow-hidden">
        <FloatingElements variant="shapes" density="medium" />
        
        <div className="relative z-10 flex flex-col gap-6 items-center justify-center self-stretch fade-in-up">
          <div className="inline-flex items-center gap-2 bg-lime-100 text-lime-700 px-4 py-2 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
            4 Star Level Services & Facilities
          </div>
          <h2 className="text-3xl sm:text-5xl text-black font-bold text-center">
            World Class <span className="text-secondary">Amenities</span>
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
            Treat yourself to revitalizing spa therapies, relax beside the
            scenic pool, and delight in delicious meals at our renowned
            restaurant.
          </p>
        </div>
        <div className="relative z-10 w-full fade-in-up">
          <ClubAmenitiesCarousel />
        </div>
      </AnimatedSection>
      <AnimatedSection animation="slide-in-right" className="About relative py-24 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-white to-green-50/30 gap-8 sm:gap-16 overflow-hidden">
        <FloatingElements variant="shapes" density="low" />
        
        <div className="relative z-10 flex flex-col px-4 sm:px-48 sm:flex-row gap-8 basis-1/4 sm:gap-36 fade-in-up">
          <div className="flex flex-col gap-8 basis-1/4">
            <div className="w-full flex-col justify-start items-start inline-flex gap-6">
              <div className="inline-flex items-center gap-2 bg-lime-100 text-lime-700 px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
                About Project
              </div>
              <div className="flex self-stretch gap-6">
                <Image
                  src="/gallery/logo/Trulife-Logo.png"
                  alt="Trulife Logo"
                  width={300}
                  height={300}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 basis-3/4">
            <p className="text-left text-gray-600 text-lg font-normal font-secondary leading-relaxed">
              Picture yourself in one of 131 resort-themed villas, nestled
              around 45,000 sq ft of lush gardens. Choose from a range of 2/3/4
              Bed villas, each meticulously designed with dimensions spanning
              1400 to 3000 sq ft. TruLife is not just a residence; it&apos;s a
              landmark in Karjat, seamlessly connecting you to nature and modern
              living. Operated by Holistic Nature Homes LLP, The TruLife Club,
              spanning 22,000 sq ft, redefines holistic living with a landscaped
              track, state-of-the-art gym, Café, and a multi-cuisine restaurant.
              Welcome to TruLife, where every facet of life finds its perfect
              harmony.
            </p>
          </div>
        </div>
        <div className="relative z-10 flex px-4 sm:px-48 flex-wrap items-center justify-center gap-8 fade-in-up stagger-3">
          <AboutCard
            title="Configuration"
            subTitle="2 | 3 | 4 Bed Villas"
            Icon={LuBedDouble}
          />
          <AboutCard
            title="Price Range"
            subTitle="Starting ₹69.8 L"
            Icon={IoPricetagOutline}
          />
          <AboutCard
            title="Upcoming Resort"
            subTitle="3 Star Boutique Resort"
            Icon={FaUmbrellaBeach}
          />
          <AboutCard
            title="Prime Location"
            subTitle="Karjat"
            Icon={IoLocationOutline}
          />
          <AboutCard
            title="Project Status"
            subTitle="On-going"
            Icon={IoConstructOutline}
          />
          <AboutCard
            title="Architecture"
            subTitle="Sustainable Design"
            Icon={GrUserWorker}
          />
        </div>
      </AnimatedSection>
    </div>
  );
};

export default TruLife;
