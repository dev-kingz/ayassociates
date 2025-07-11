"use client";

import PhotoCard from "@/components/Cards/PhotoCard";
import PhotoTextCard from "@/components/Cards/PhotoTextCard";
import SectionHeader from "@/components/Header/SectionHeader";
import TitleHeader from "@/components/Header/TitleHeader";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnimatedSection from "@/components/Animation/AnimatedSection";
import FloatingElements from "@/components/Enhancement/FloatingElements";

const StoryPage = () => {
  return (
    <div className="flex grow flex-col items-center self-stretch overflow-x-hidden">
      <TitleHeader image="/gallery/images/About-Us-Header-Image.jpg" titleText="Our Story" subTitleText="at AY Associates Nature Homes" />
      <AnimatedSection animation="fade-in" className="About relative px-8 sm:px-48 py-24 flex flex-col sm:flex-row items-center justify-between bg-white gap-8 sm:gap-36 overflow-hidden">
        <FloatingElements variant="dots" density="low" />
        
        <div className="relative z-10 flex flex-col gap-8 max-w-lg fade-in-left">
          <SectionHeader title="Overview" subTitle="About AY Associates" titleColor="text-secondary" subTitleColor="text-lime-900" />
          <p className="text-left text-gray-600 text-lg font-normal font-secondary leading-relaxed">
            Holistic Group, specializes in building communities and providing end to end solutions to customers aspiring for a nature centric lifestyle. We Design, Build, Develop & Manage these communities.
            We specialize in creating spaces that seamlessly blend with nature, offering bespoke designs for homes, unparalleled hospitality experiences, and thoughtful solutions for senior living.
            In five years successful delivery of four projects is a testament of our commitment to Nature-Centric Lifestyle as a tangible and compelling reality for our valued customers.
          </p>
          <Link href="/about">
            <Button
              variant="secondary"
              size="lg"
              className="group rounded-full shadow-xl bg-secondary text-white hover:bg-secondary/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Meet Our Team
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </Link>
        </div>
        <div className="relative z-10 fade-in-right">
          <Image
            src="/gallery/images/Overview-Image.jpg"
            alt="About Us Image"
            width={500}
            height={600}
            className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </div>
      </AnimatedSection>
      <AnimatedSection animation="slide-in-left" className="Mission relative px-8 sm:px-48 py-24 flex flex-col sm:flex-row items-center justify-between bg-gradient-to-br from-gray-50 via-white to-green-50/30 gap-8 sm:gap-36 overflow-hidden">
        <FloatingElements variant="shapes" density="low" />
        
        <div className="relative z-10 flex flex-col gap-8 max-w-lg fade-in-left">
          <SectionHeader title="Our Mission" subTitle="Our Commitment to Quality Living" titleColor="text-secondary" subTitleColor="text-lime-900" />
          <p className="text-left text-gray-600 text-lg font-normal font-secondary leading-relaxed">
            Our mission is guided by honesty, unwavering integrity, and hands on experience. Our goal is to persist on this path of excellence, crafting spaces that enhance the lives of our clients.
          </p>
        </div>
        <div className="relative z-10 fade-in-right">
          <Image
            src="/gallery/images/Mission-Image.jpg"
            alt="About Us Image"
            width={500}
            height={600}
            className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </div>
      </AnimatedSection>
      <AnimatedSection animation="slide-in-right" className="Vision relative px-8 sm:px-48 py-24 flex flex-col sm:flex-row items-center justify-between bg-white gap-8 sm:gap-36 overflow-hidden">
        <FloatingElements variant="dots" density="low" />
        
        <div className="relative z-10 fade-in-left">
          <Image
            src="/gallery/images/Vision-Image.jpg"
            alt="About Us Image"
            width={500}
            height={600}
            className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </div>
        <div className="relative z-10 flex flex-col gap-8 max-w-lg fade-in-right">
          <SectionHeader title="Our Vision" subTitle="Sustainable Homes" titleColor="text-secondary" subTitleColor="text-lime-900" />
          <p className="text-left text-gray-600 text-lg font-normal font-secondary leading-relaxed">
            We are passionate about crafting nature-centric lifestyles, where the harmony of Mother Nature defines a true, enriched life. Our vision is to lead the way in curating every aspect of sustainable and personalized nature homes.
          </p>
        </div>
      </AnimatedSection>
      <AnimatedSection animation="fade-in" className="Timeline relative py-24 flex flex-col bg-gradient-to-br from-green-50 via-white to-gray-50 gap-10 sm:gap-16 overflow-hidden">
        <FloatingElements variant="shapes" density="medium" />
          
         <div className="relative z-10 Header justify-center flex flex-col items-center gap-6 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-lime-100 text-lime-700 px-4 py-2 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
            Our Values
          </div>
          <h2 className="text-3xl sm:text-5xl text-black font-bold text-center">
           Our <span className="text-secondary">Core Values</span>
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
            We are committed to delivering exceptional quality and service, ensuring that every aspect of our projects reflects our dedication to excellence and customer satisfaction.
          </p>
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row gap-8 sm:gap-12 px-4 sm:px-12 fade-in-up stagger-2">
          <PhotoTextCard image="/gallery/images/Innovation.jpg" title="Integrity" subTitle="Creativity, Belief for a Positive Change" />
          <PhotoTextCard image="/gallery/images/Integrity.jpg" title="Innovation" subTitle="Honesty, Transparency & Ethical Conduct" />
          <PhotoTextCard image="/gallery/images/Experience.png" title="Experience With Us" subTitle="Satisfaction, Expertise, Memorable Journey" />
        </div>
      </AnimatedSection>
      <AnimatedSection animation="fade-in" className="Timeline relative py-20 flex flex-col bg-white gap-8 sm:gap-16 overflow-hidden">
        <FloatingElements variant="dots" density="low" />
        
         <div className="relative z-10 Header justify-center flex flex-col items-center gap-4 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-lime-100 text-lime-700 px-4 py-2 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
            Our Journey
          </div>
          <h2 className="text-3xl sm:text-5xl text-black font-bold text-center">
           Our <span className="text-secondary">Timeline</span>
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
            From our humble beginnings to becoming a leader in nature-centric living, explore the milestones that define our journey.
          </p>
        </div>
        <div className="relative z-10 px-4 sm:px-12 fade-in-up">
          <Image
            src="/gallery/images/Timeline.jpg"
            alt="Our Timeline"
            width={1400}
            height={800}
            layout="responsive"
            className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full"
          />
        </div>
      </AnimatedSection>
      <AnimatedSection animation="fade-in" className="Team relative py-24 flex flex-col bg-gradient-to-br from-gray-50 via-white to-green-50/30 gap-10 sm:gap-16 overflow-hidden">
        <FloatingElements variant="shapes" density="low" />
        
        <div className="relative z-10 Header justify-center flex flex-col items-center gap-6 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-lime-100 text-lime-700 px-4 py-2 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
            Leadership
          </div>
          <h2 className="text-3xl sm:text-5xl text-black font-bold text-center">
           Our <span className="text-secondary">Management Team</span>
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
            Meet the visionary leaders behind AY Associates, whose expertise and passion drive our commitment to excellence in every project.
          </p>
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row gap-8 sm:gap-12 px-4 sm:px-12 fade-in-up stagger-2">
          <PhotoCard image="/gallery/images/Team-Member-1.png" name="Sanjoy Das" role="Founder & MD" />
          <PhotoCard image="/gallery/images/Team-Member-2.png" name="Subhankar Mitra" role="Co-founder & Director" />
          <PhotoCard image="/gallery/images/Team-Member-3.png" name="Mrityunjoy Aich" role="CEO Hospitality" />
        </div>
      </AnimatedSection>

    </div>
  );
};

export default StoryPage;
