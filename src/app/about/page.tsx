"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaLeaf, FaUsers, FaAward, FaHandshake, FaArrowRight, FaEye, FaBullseye } from 'react-icons/fa';
import AnimatedSection from '@/components/Animation/AnimatedSection';
import FloatingElements from '@/components/Enhancement/FloatingElements';
import GlassMorphismCard from '@/components/Enhancement/GlassMorphismCard';
import AnimatedHeroReusable from '@/components/Hero/AnimatedHeroReusable';
import PhotoCard from "@/components/Cards/PhotoCard";
import PhotoTextCard from "@/components/Cards/PhotoTextCard";
import SectionHeader from "@/components/Header/SectionHeader";

const AboutPage = () => {
  const stats = [
    { icon: FaUsers, number: "500+", label: "Happy Families" },
    { icon: FaAward, number: "4+", label: "Completed Projects" },
    { icon: FaLeaf, number: "5+", label: "Years Experience" },
    { icon: FaHandshake, number: "100%", label: "Customer Satisfaction" }
  ];

  const values = [
    {
      title: "Innovation",
      description: "Pioneering sustainable design and eco-friendly construction practices that shape the future of living.",
      image: "/gallery/images/Innovation.jpg"
    },
    {
      title: "Integrity",
      description: "Building trust through transparent processes, honest communication, and ethical business practices.",
      image: "/gallery/images/Integrity.jpg"
    },
    {
      title: "Excellence",
      description: "Delivering unmatched quality in every project through meticulous attention to detail and craftsmanship.",
      image: "/gallery/images/Experience.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Animated Hero Section */}
      <AnimatedHeroReusable
        backgroundImage="/gallery/images/About-Us-Header-Image.jpg"
        badge="Our Story"
        title="About Holistic Group"
        subtitle="Building communities that seamlessly blend with nature"
        description="Creating spaces where luxury meets sustainability, offering bespoke designs for homes, unparalleled hospitality experiences, and thoughtful solutions for nature-centric living."
        primaryButtonText="View Our Projects"
        primaryButtonLink="/projects"
        secondaryButtonText="Get In Touch"
        secondaryButtonLink="/contact"
      />

      {/* Main Content */}
      <section className="py-20 px-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-in" className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-lime-100 text-lime-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <FaLeaf className="w-4 h-4" />
                  Our Story
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Holistic Nature Homes
                </h2>
                <div className="w-20 h-1 bg-lime-600 mb-6" />
              </div>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Holistic Group specializes in building communities and providing 
                  end-to-end solutions to customers aspiring for a nature-centric lifestyle. 
                  We Design, Build, Develop & Manage these communities with unparalleled expertise.
                </p>
                
                <p>
                  In five years, the successful delivery of four projects is a testament 
                  to our commitment to a Nature-Centric Lifestyle as a tangible and 
                  compelling reality for our valued customers.
                </p>
                
                <p>
                  We specialize in creating spaces that seamlessly blend with nature, 
                  offering bespoke designs for homes, unparalleled hospitality experiences, 
                  and thoughtful solutions for senior living.
                </p>
              </div>
              
              <div className="flex gap-4 pt-4">
                <Link href="/projects">
                  <Button size="lg" className="group bg-lime-600 hover:bg-lime-700 text-white px-6">
                    View Our Projects
                    <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="border-lime-600 text-lime-600 hover:bg-lime-50">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={200} className="relative">
              <div className="relative">
                <Image
                  src="/gallery/images/AboutTrulife-Image1.png"
                  alt="About Trulife"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-lime-600 rounded-2xl flex items-center justify-center">
                  <FaLeaf className="w-10 h-10 text-white" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <AnimatedSection animation="fade-in" className="Timeline relative py-24 flex flex-col bg-gradient-to-br from-lime-50 via-white to-gray-50 gap-10 sm:gap-16 overflow-hidden">
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

      {/* Timeline Section */}
      <AnimatedSection animation="fade-in" className="Timeline relative py-24 flex flex-col bg-white gap-8 sm:gap-16 overflow-hidden">
        <FloatingElements variant="dots" density="low" />
        
         <div className="relative z-10 Header justify-center flex flex-col items-center gap-6 fade-in-up">
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

      {/* Management Team Section */}
      <AnimatedSection animation="fade-in" className="Team relative py-24 flex flex-col bg-gradient-to-br from-gray-50 via-white to-lime-50/30 gap-10 sm:gap-16 overflow-hidden">
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

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-br from-lime-600 to-lime-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection 
                key={index}
                animation="scale-in" 
                delay={index * 100}
                className="text-center text-white"
              >
                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <stat.icon className="w-8 h-8 text-lime-200" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lime-200">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 px-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection animation="slide-in-left" className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <div className="w-16 h-1 bg-lime-600 mb-6" />
                <p className="text-gray-600 text-lg leading-relaxed">
                  To create sustainable, nature-integrated communities that enhance the quality 
                  of life for residents while preserving the environment for future generations. 
                  We are committed to delivering exceptional value through innovative design, 
                  superior construction, and ongoing community management.
                </p>
              </div>
              
              <Image
                src="/gallery/images/Mission-Image.jpg"
                alt="Mission"
                width={500}
                height={300}
                className="rounded-2xl shadow-xl"
              />
            </AnimatedSection>
            
            <AnimatedSection animation="slide-in-right" className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <div className="w-16 h-1 bg-lime-600 mb-6" />
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be the leading developer of nature-centric communities, setting new standards 
                  for sustainable living and community development. We envision a future where every 
                  family can enjoy the perfect balance of luxury, comfort, and environmental harmony.
                </p>
              </div>
              
              <Image
                src="/gallery/images/Vision-Image.jpg"
                alt="Vision"
                width={500}
                height={300}
                className="rounded-2xl shadow-xl"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-lime-100 text-lime-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FaAward className="w-4 h-4" />
              Our Values
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide every decision we make and every project we undertake.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection 
                key={index}
                animation="fade-in" 
                delay={index * 150}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={value.image}
                      alt={value.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
