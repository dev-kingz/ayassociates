"use client";

import SectionHeader from "@/components/Header/SectionHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MdSecurity } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { FaMapLocationDot, FaHouseChimney } from "react-icons/fa6";
import IconTextCard from "@/components/Cards/IconTextCard";
import { ProductsServicesAccordian } from "@/components/Accordian/ProductsServicesAccordian";
import { ProductsServicesCarousel } from "@/components/Carousel/ProductsServicesCarousel";
import { ChooseProjectCarousel } from "@/components/Carousel/ChooseProject";
import Image from "next/image";
import AnimatedHero from "@/components/Hero/AnimatedHero";
import AnimatedSection from "@/components/Animation/AnimatedSection";
import EnhancedUniquenessSection from "@/components/Sections/EnhancedUniquenessSection";
import EnhancedCTASection from "@/components/Sections/EnhancedCTASection";
import EnhancedStatsSection from "@/components/Sections/EnhancedStatsSection";
import EnhancedTestimonialsSection from "@/components/Sections/EnhancedTestimonialsSection";
import EnhancedFeatureShowcase from "@/components/Sections/EnhancedFeatureShowcase";
import FloatingElements from "@/components/Enhancement/FloatingElements";

export default function Home() {
  return (
    <div className="flex grow flex-col items-center self-stretch overflow-x-hidden">
      {/* Modern Animated Hero Section */}
      <AnimatedHero />
      
      {/* About Section with Animation */}
      <AnimatedSection animation="fade-in" className="About relative px-8 sm:px-48 py-20 flex flex-col sm:flex-row items-start justify-between bg-white gap-5 sm:gap-36 overflow-hidden">
        {/* Floating Elements */}
        <FloatingElements variant="dots" density="low" />
        
        <div className="relative z-10 fade-in-left">
          <SectionHeader
            title="About Us"
            subTitle="About Holistic Nature Homes"
            titleColor="text-secondary"
            subTitleColor="text-lime-900"
          />
        </div>
        <div className="relative z-10 flex flex-col gap-6 max-w-lg fade-in-right">
          <p className="text-left text-gray-600 text-lg font-normal font-secondary leading-relaxed">
            Holistic Group specializes in building communities and providing
            end-to-end solutions to customers aspiring for a nature-centric
            lifestyle. We Design, Build, Develop & Manage these communities. In
            five years, the successful delivery of four projects is a testament
            to our commitment to a Nature-Centric Lifestyle as a tangible and
            compelling reality for our valued customers. We specialize in
            creating spaces that seamlessly blend with nature, offering bespoke
            designs for homes, unparalleled hospitality experiences, and
            thoughtful solutions for senior living.
          </p>
          <Link href="/about">
            <Button
              variant="secondary"
              size="lg"
              className="group rounded-full shadow-xl bg-secondary text-white hover:bg-secondary/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Learn More
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </Link>
        </div>
      </AnimatedSection>

      {/* Why Choose Us Section with Enhanced Cards */}
      <AnimatedSection animation="fade-in" className="WhyChooseUs relative px-4 sm:px-12 py-20 flex flex-col items-center justify-center self-stretch bg-gradient-to-br from-gray-50 via-white to-green-50/30 overflow-hidden">
        {/* Floating Elements */}
        <FloatingElements variant="shapes" density="medium" />
        
        <div className="relative z-10 Header justify-center flex flex-col items-center gap-4 mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-lime-100 text-lime-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
            Our Advantages
          </div>
          <h2 className="text-3xl sm:text-4xl text-black font-bold text-center">
            Why Choose <span className="text-secondary">Us?</span>
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-3xl leading-relaxed">
            We provide end to end solutions & undertake Design, Approval,
            Procurement, Construction and Maintenance of all projects with our
            in house team of experts
          </p>
        </div>
        <div className="relative z-10 Cards py-8 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-8 flex-wrap">
          <IconTextCard
            Icon={MdSecurity}
            title="Secured & Fenced"
            text="Round-the-Clock Safety and Security for All residents with advanced surveillance systems"
            bgColor="bg-secondary"
            delay={0}
          />
          <IconTextCard
            Icon={GrUserManager}
            title="Managed & Maintained"
            text="Hassle Free & Cost Effective community management with professional maintenance teams"
            bgColor="bg-white"
            delay={100}
          />
          <IconTextCard
            Icon={FaMapLocationDot}
            title="Prime Location & Smart Investment"
            text="Connectivity & Well-Thought-Out Returns with strategic location advantages"
            bgColor="bg-secondary"
            delay={200}
          />
          <IconTextCard
            Icon={FaHouseChimney}
            title="Integrated Resort Community Estates"
            text="Robust Amenities & Infrastructure with world-class facilities and services"
            bgColor="bg-white"
            delay={300}
          />
        </div>
      </AnimatedSection>

      {/* Enhanced Stats Section */}
      <EnhancedStatsSection />

      {/* Enhanced Feature Showcase */}
      <EnhancedFeatureShowcase />

      {/* Products & Services Section */}
      <AnimatedSection animation="slide-in-left" className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center self-stretch px-8 sm:px-12 py-20 gap-8 lg:gap-36 bg-white">
        <div className="Col-1 flex flex-col items-start justify-start self-stretch gap-8 lg:gap-12 fade-in-left">
          <div className="relative z-10 Header justify-start flex flex-col items-start gap-4 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-lime-100 text-lime-700 px-4 py-2 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
            Our Products & Services
          </div>
          <h2 className="text-3xl sm:text-4xl text-black font-bold text-center">
            Explore Our <span className="text-secondary">Diverse Properties</span>
          </h2>
          {/* <p className="text-center text-lg text-gray-600 max-w-3xl leading-relaxed">
            We provide end to end solutions & undertake Design, Approval,
            Procurement, Construction and Maintenance of all projects with our
            in house team of experts
          </p> */}
        </div>
          <ProductsServicesAccordian />
        </div>
        <div className="fade-in-right">
          <ProductsServicesCarousel />
        </div>
      </AnimatedSection>

      {/* Choose Project Section */}
      <AnimatedSection animation="fade-in" className="ChooseProject relative w-full px-8 md:px-24 lg:px-52 py-20 flex flex-col items-center justify-center self-stretch gap-16 bg-gradient-to-br from-green-50 via-white to-gray-50 overflow-hidden">
        {/* Floating Elements */}
        <FloatingElements variant="dots" density="low" />
        
          <div className="relative z-10 Header justify-center flex flex-col items-center gap-4 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-lime-100 text-lime-700 px-4 py-2 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
            Choose Your Project
          </div>
          <h2 className="text-3xl sm:text-4xl text-black font-bold text-center">
           Discover Your<span className="text-secondary"> Ideal Nature Home</span>
          </h2>
        </div>
        <div className="relative z-10 fade-in-up stagger-2">
          <ChooseProjectCarousel />
        </div>
      </AnimatedSection>

      {/* Enhanced Testimonials Section */}
      <EnhancedTestimonialsSection />

      {/* Enhanced CTA Section */}
      <EnhancedCTASection />

      {/* Enhanced Uniqueness Section */}
      <EnhancedUniquenessSection />
    </div>
  );
}
