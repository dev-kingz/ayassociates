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
import { ProjectHighlightsAccordian } from "@/components/Accordian/ProjectHighlightsAccordian";
import { ChooseProjectCarousel } from "@/components/Carousel/ChooseProject";
import { AboutTrulifeCarousel } from "@/components/Carousel/AboutTrulifeCarousel";
import { ClubAmenitiesCarousel } from "@/components/Carousel/ClubAmenitiesCarousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/Animation/AnimatedSection";
import FloatingElements from "@/components/Enhancement/FloatingElements";
import GlassMorphismCard from "@/components/Enhancement/GlassMorphismCard";
import AnimatedHeroReusable from "@/components/Hero/AnimatedHeroReusable";

const TruLife = () => {
  return (
    <div className="flex grow flex-col items-center self-stretch overflow-x-hidden">
      <AnimatedHeroReusable
        backgroundImage="/gallery/images/Trulife-Header-Image1.png"
        badge="Premium Project"
        title="TruLife"
        subtitle="Nature-Centric Villa Community"
        description="Discover resort-themed villas nestled around 45,000 sq ft of lush gardens. Choose from a range of 2/3/4 Bed villas, each meticulously designed for modern living in harmony with nature."
        primaryButtonText="Explore Villas"
        primaryButtonLink="/contact"
        secondaryButtonText="View Gallery"
        secondaryButtonLink="#gallery"
        scrollTarget=".About"
      />
      
      <AnimatedSection animation="fade-in" className="About relative py-16 flex flex-col items-center justify-center bg-gradient-to-br from-white via-green-50/20 to-gray-50 gap-5 sm:gap-12 overflow-hidden">
        <FloatingElements variant="dots" density="low" />
        
        <div className="relative z-10 flex flex-col px-4 sm:px-40 sm:flex-row gap-6 sm:gap-28">
          <div className="flex flex-col gap-6 basis-2/5 fade-in-left">
            <div className="w-full flex-col justify-start items-start inline-flex gap-3">
              <div className="flex justify-start items-center gap-4">
                <div className="w-[75px] h-[1px] bg-gradient-to-r from-secondary to-green-400" />
                <div className="text-secondary text-md font-normal font-secondary">
                  About Project
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
            <p className="text-left text-gray-600 text-sm sm:text-md font-normal font-secondary leading-9">
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
        
        <div className="relative z-10 flex px-4 sm:px-40 flex-wrap items-center justify-center gap-5 ">
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
        <AboutTrulifeCarousel />
      </AnimatedSection>
      <AnimatedSection animation="slide-in-left" className="w-full flex flex-col sm:flex-row items-center sm:items-start justify-center self-stretch px-14 sm:py-20 gap-8 sm:gap-36 bg-white">
        <div className="Col-1 flex flex-col items-start justify-start self-stretch gap-4 sm:gap-12 fade-in-left">
          <SectionHeader
            title="Project Highlights"
            subTitle="The Appreciation Of Value Addition"
            titleColor="text-secondary"
            subTitleColor="text-lime-900"
          />
          <ProjectHighlightsAccordian />
        </div>
        <div className="fade-in-right">
          <ProjectHighlightsCarousel />
        </div>
      </AnimatedSection>
      
      <AnimatedSection animation="fade-in" className="ClubAmenities relative w-full flex flex-col items-center justify-center self-stretch px-8 py-14 gap-8 bg-gradient-to-br from-green-50 via-white to-gray-50 overflow-hidden">
        <FloatingElements variant="shapes" density="low" />
        <div className="relative z-10 fade-in-up">
          <h2 className="text-2xl sm:text-4xl text-lime-900 font-semibold justify-center items-center text-center">
            The TRULIFE Club <span className="text-secondary">Amenities</span>
          </h2>
        </div>
        <div className="relative z-10 fade-in-up stagger-2">
          <ClubAmenitiesCarousel />
        </div>
      </AnimatedSection>
      
      <AnimatedSection animation="fade-in" className="ClubAmenities w-full flex flex-col items-start justify-start self-stretch px-6 sm:px-40 py-3 sm:py-14 gap-4 sm:gap-8 bg-white">
        <div className="fade-in-left">
          <SectionHeader
            title="Connectivity"
            subTitle="Explore the Landmark of Karjat"
            titleColor="text-secondary"
            subTitleColor="text-lime-900"
          />
        </div>
        <p className="text-gray-600 text-sm sm:text-md font-normal font-secondary leading-9 fade-in-right">
          Envision your holidays in the lap of luxury at TruLife, potentially
          sparking a transformative shift in the priorities of life. Addressing
          the current urban challenges of battling pollution and traffic chaos,
          TruLife offers an alternative narrative a harmonious blend of work and
          leisure. This exquisite Villa township, located in vibrant Karjat,
          strikes the perfect equilibrium between urban connectivity and serene
          seclusion.
        </p>
          <h1 className="text-2xl sm:text-4xl text-lime-900 font-medium justify-start text-start items-start fade-in-up">
            Nearby Locations
          </h1>
        
        <div className="fade-in-up flex w-full justify-center">
          <Image
            src="/gallery/images/Trulife-Resort-Map.png"
            alt="Trulife Resort Map"
            width={500}
            height={500}
            className="w-full rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </div>
      </AnimatedSection>
      
      <div className="Header relative px-4 sm:px-52 py-12 sm:py-16 justify-center flex self-stretch flex-col items-center gap-3 sm:gap-6 bg-gradient-to-br from-green-700 to-green-900 overflow-hidden">
        <FloatingElements variant="particles" density="low" />
        <div className="relative z-10 fade-in-up">
          <h2 className="text-2xl sm:text-4xl font-medium text-white text-center">
            Want to Know More About the Project? <br />
            <span className="text-secondary">We Are Here to Help!</span>
          </h2>
        </div>
        <Link href="/contact">
            <Button
                          variant="secondary"
                          size="lg"
                          className="group rounded-full shadow-xl bg-white text-secondary hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
            Instant Callback
          </Button>
        </Link>
      </div>
      
      <AnimatedSection animation="fade-in" className="OtherProjects w-full flex flex-col items-center justify-center self-stretch sm:py-20 gap-8 bg-gradient-to-br from-gray-50 via-white to-green-50/30">
        <div className="Header justify-center flex flex-col items-center gap-2 sm:gap-3 fade-in-up">
          <h2 className="text-2xl sm:text-4xl text-lime-900 font-semibold">
            Other <span className="text-secondary">Projects</span>
          </h2>
        </div>
        <div className="Carousel sm:px-16 fade-in-up stagger-2">
          <ChooseProjectCarousel />
        </div>
      </AnimatedSection>
    </div>
  );
};

export default TruLife;
