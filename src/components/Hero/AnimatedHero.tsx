"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaPlay, FaChevronDown } from "react-icons/fa";

const AnimatedHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    const aboutSection = document.querySelector('.About');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex h-[100vh] grow items-center justify-center self-stretch bg-hero bg-cover bg-center bg-fixed overflow-hidden">
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-2 h-2 bg-white/20 rounded-full animate-bounce-subtle top-1/4 left-1/4" style={{ animationDelay: '0s' }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-bounce-subtle top-1/3 right-1/4" style={{ animationDelay: '1s' }} />
        <div className="absolute w-3 h-3 bg-white/10 rounded-full animate-bounce-subtle bottom-1/4 left-1/3" style={{ animationDelay: '2s' }} />
        <div className="absolute w-1.5 h-1.5 bg-white/25 rounded-full animate-bounce-subtle top-2/3 right-1/3" style={{ animationDelay: '0.5s' }} />
      </div>
      
      {/* Main content */}
      <div className={`relative z-10 text-center text-white px-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6 fade-in-down">
            <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium">Building Nature Communities Since 2019</span>
          </div>
          
          {/* Main headline */}
          <h1 className="mb-6 text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight fade-in-up stagger-1">
            Building{" "}
            <span className="relative inline-block">
              <span className="bg-secondary bg-clip-text text-transparent">
                Nature
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-20 blur-lg" />
            </span>
            <br />
            Communities
          </h1>
          
          {/* Subtitle */}
          <p className="mb-8 text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto fade-in-up stagger-2">
            Invest in Tranquility, Live in Luxury
          </p>
          
          {/* Description */}
          <p className="mb-10 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed fade-in-up stagger-3">
            Experience holistic living in nature-centric communities designed for modern luxury. 
            From farm houses to integrated resort estates, discover your perfect sanctuary.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 fade-in-up stagger-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="group bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover-lift transition-all duration-300"
              >
                <span>Enquire Now</span>
                <FaPlay className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button 
                variant="outline" 
                size="lg" 
                className="group bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover-lift transition-all duration-300"
              >
                Explore Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer group fade-in-up stagger-5"
        onClick={scrollToContent}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">Scroll to explore</span>
          <FaChevronDown className="w-4 h-4 animate-bounce group-hover:text-green-400 transition-colors" />
        </div>
      </div>
    </section>
  );
};

export default AnimatedHero;
