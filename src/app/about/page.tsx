"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaLeaf, FaUsers, FaAward, FaHandshake, FaArrowRight, FaEye, FaBullseye } from 'react-icons/fa';
import AnimatedSection from '@/components/Animation/AnimatedSection';
import FloatingElements from '@/components/Enhancement/FloatingElements';
import GlassMorphismCard from '@/components/Enhancement/GlassMorphismCard';

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
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-br from-green-800 via-green-700 to-green-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0" style={{
          backgroundImage: "url('/gallery/images/About-Us-Header-Image.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }} />
        
        {/* Floating Elements */}
        <FloatingElements variant="particles" density="medium" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              About <span className="text-secondary">Holistic Group</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-white/90 max-w-3xl mx-auto mb-8">
              Building communities that seamlessly blend with nature, creating spaces where luxury meets sustainability
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  View Our Projects
                  <FaArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full backdrop-blur-sm">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-in" className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <FaLeaf className="w-4 h-4" />
                  Our Story
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Holistic Nature Homes
                </h2>
                <div className="w-20 h-1 bg-green-500 mb-6" />
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
                  <Button size="lg" className="group bg-green-600 hover:bg-green-700 text-white px-6">
                    View Our Projects
                    <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50">
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
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-500 rounded-2xl flex items-center justify-center">
                  <FaLeaf className="w-12 h-12 text-white" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-700">
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
                  <stat.icon className="w-8 h-8 text-green-200" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-200">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection animation="slide-in-left" className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <div className="w-16 h-1 bg-green-500 mb-6" />
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
                <div className="w-16 h-1 bg-green-500 mb-6" />
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
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-800 to-green-900">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-in" className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Discover the perfect blend of luxury and nature in our thoughtfully designed communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
                <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100 px-8">
                  Explore Projects
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
