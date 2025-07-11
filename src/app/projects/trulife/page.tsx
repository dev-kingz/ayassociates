"use client";

import React from "react";
import AboutCard from "@/components/Cards/AboutCard";
import SectionHeader from "@/components/Header/SectionHeader";
import Image from "next/image";
import { LuBedDouble } from "react-icons/lu";
import { FaUmbrellaBeach, FaLeaf, FaSwimmingPool, FaShieldAlt } from "react-icons/fa";
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
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/Animation/AnimatedSection";
import FloatingElements from "@/components/Enhancement/FloatingElements";
import GlassMorphismCard from "@/components/Enhancement/GlassMorphismCard";

const TruLife = () => {
  return (
    <div className="flex grow flex-col items-center self-stretch overflow-x-hidden">
      <TrulifeHeaderCarousel />
      
      <AnimatedSection animation="fade-in" className="About relative py-20 flex flex-col items-center justify-center bg-gradient-to-br from-white via-green-50/20 to-gray-50 gap-8 sm:gap-16 overflow-hidden">
        <FloatingElements variant="dots" density="low" />
        
        <div className="relative z-10 flex flex-col px-4 sm:px-40 sm:flex-row gap-6 sm:gap-28">
          <div className="flex flex-col gap-6 basis-2/5 fade-in-left">
            <div className="w-full flex-col justify-start items-start inline-flex gap-3">
              <div className="flex justify-start items-center gap-4">
                <div className="relative z-10 Header justify-center flex flex-col items-center gap-4 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-lime-100 text-lime-700 px-4 py-2 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
            About Project
          </div>
        </div>
              </div>
              <div className="flex self-stretch gap-3">
                <div className="Text flex text-start justify-start flex-col gap-2">
                  <h1 className="self-stretch text-black text-3xl sm:text-4xl font-semibold">
                    Trulife <span className="text-secondary">Resort</span>
                  </h1>
                  <p className="text-gray-500 text-sm sm:text-md font-normal font-secondary">
                    Your Exquisite Sanctuary of
                    <br />
                    Nature and Luxury
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 basis-3/5 fade-in-right">
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
        
        <div className="relative z-10 flex px-4 sm:px-40 flex-wrap items-center justify-center gap-5 fade-in-up stagger-2">
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
        <div className="relative z-10 fade-in-up">
          <AboutTrulifeCarousel />
        </div>
      </AnimatedSection>
      <AnimatedSection animation="slide-in-left" className="w-full flex flex-col sm:flex-row items-center sm:items-start justify-center self-stretch px-14 sm:py-20 gap-8 sm:gap-36 bg-white">
        <div className="Col-1 flex flex-col items-start justify-start self-stretch gap-4 sm:gap-12 fade-in-left">
          <div className="relative z-10 Header justify-start flex flex-col items-start gap-4 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-lime-100 text-lime-700 px-4 py-2 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
            Project Highlights
          </div>
          <h2 className="text-3xl sm:text-4xl text-black font-bold">
           The Appreciation Of <span className="text-secondary">Value Addition</span>
          </h2>
        </div>
          <ProjectHighlightsAccordian />
        </div>
        <div className="fade-in-right">
          <ProjectHighlightsCarousel />
        </div>
      </AnimatedSection>
      
      <AnimatedSection animation="fade-in" className="ClubAmenities relative w-full flex flex-col items-center justify-center self-stretch px-8 py-14 gap-8 bg-gradient-to-br from-green-50 via-white to-gray-50 overflow-hidden">
        <FloatingElements variant="shapes" density="low" />
        <div className="relative z-10 fade-in-up">
          <h2 className="text-2xl sm:text-4xl text-black font-semibold justify-center items-center text-center">
            The TRULIFE Club <span className="text-secondary">Amenities</span>
          </h2>
        </div>
        <div className="relative z-10 fade-in-up stagger-2">
          <ClubAmenitiesCarousel />
        </div>
      </AnimatedSection>
      
      <AnimatedSection animation="fade-in" className="ClubAmenities relative w-full flex flex-col items-start justify-start self-stretch px-6 sm:px-40 py-20 gap-8 sm:gap-12 bg-white overflow-hidden">
        <FloatingElements variant="dots" density="low" />
        <div className="relative z-10 Header justify-start flex flex-col items-start gap-4 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-lime-100 text-lime-700 px-4 py-2 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
            Connectivity
          </div>
          <h2 className="text-3xl sm:text-4xl text-black font-bold text-center">
           Explore the <span className="text-secondary">Landmark of Karjat</span>
          </h2>
        </div>
        <p className="relative z-10 text-gray-600 text-lg font-normal font-secondary leading-relaxed fade-in-right">
          Envision your holidays in the lap of luxury at TruLife, potentially
          sparking a transformative shift in the priorities of life. Addressing
          the current urban challenges of battling pollution and traffic chaos,
          TruLife offers an alternative narrative a harmonious blend of work and
          leisure. This exquisite Villa township, located in vibrant Karjat,
          strikes the perfect equilibrium between urban connectivity and serene
          seclusion.
        </p>
        
        <div className="relative z-10 Header justify-start flex flex-col items-start gap-4 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-lime-100 text-lime-700 px-4 py-2 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
            Location Map
          </div>
          <h2 className="text-3xl sm:text-4xl text-black font-bold text-center">
           Nearby <span className="text-secondary">Locations</span>
          </h2>
        </div>
        
        <div className="relative z-10 fade-in-up flex w-full justify-center">
          <Image
            src="/gallery/images/Trulife-Resort-Map.png"
            alt="Trulife Resort Map"
            width={500}
            height={500}
            className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
          />
        </div>
      </AnimatedSection>
      
      <AnimatedSection animation="fade-in" className="Header relative px-4 sm:px-52 py-16 sm:py-20 justify-center flex self-stretch flex-col items-center gap-6 sm:gap-8 bg-gradient-to-br from-green-700 to-green-900 overflow-hidden">
        <FloatingElements variant="particles" density="low" />
        <div className="relative z-10 fade-in-up">
          <h2 className="text-2xl sm:text-4xl font-medium text-white text-center">
            Want to Know More About the Project? <br />We Are Here to Help!
          </h2>
        </div>
        <Link href="/contact">
          <Button
            variant="secondary"
            size="lg"
            className="shadow-xl bg-secondary text-white hover:bg-secondary/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Instant Callback
          </Button>
        </Link>
      </AnimatedSection>
      
      <AnimatedSection animation="fade-in" className="OtherProjects relative w-full flex flex-col items-center justify-center self-stretch py-20 gap-8 bg-gradient-to-br from-gray-50 via-white to-green-50/30 overflow-hidden">
        <FloatingElements variant="shapes" density="low" />
        
        <div className="relative z-10 Header justify-center flex flex-col items-center gap-4 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-lime-100 text-lime-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
            Explore More
          </div>
          <h2 className="text-3xl sm:text-5xl text-lime-900 font-bold text-center">
            Other <span className="text-secondary">Projects</span>
          </h2>
        </div>
        <div className="relative z-10 Carousel px-4 sm:px-16 fade-in-up stagger-2">
          <ChooseProjectCarousel />
        </div>
      </AnimatedSection>
    </div>
  );
};

export default TruLife;
