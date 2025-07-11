"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaPhone, FaArrowRight, FaLeaf } from 'react-icons/fa';

const EnhancedCTASection: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-lime-700 via-lime-800 to-secondary overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full" />
        <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-white/20 rounded-full" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FaLeaf className="absolute top-1/4 left-1/6 w-6 h-6 text-white/20 animate-bounce-subtle" style={{ animationDelay: '0s' }} />
        <FaLeaf className="absolute top-2/3 right-1/4 w-4 h-4 text-white/20 animate-bounce-subtle" style={{ animationDelay: '1s' }} />
        <FaLeaf className="absolute bottom-1/4 left-1/3 w-5 h-5 text-white/20 animate-bounce-subtle" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
            <span className="text-white/90 font-medium">Your Dream Home Awaits</span>
          </div>
          
          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Thread By Thread, <br />
            Leaf By Leaf,
            <br />
            We Weave A Tapestry of
            <br />
            <span className="text-lime-300">Holistic Living</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect harmony of luxury and nature. Join our community of 
            forward-thinking families who have chosen a sustainable, beautiful way of life.
          </p>
          
          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="text-center group">
              <div className="text-4xl font-bold text-lime-300 mb-2 group-hover:scale-110 transition-transform">
                500+
              </div>
              <div className="text-green-100 text-sm">Happy Families</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-lime-300 mb-2 group-hover:scale-110 transition-transform">
                4+
              </div>
              <div className="text-green-100 text-sm">Completed Projects</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-lime-300 mb-2 group-hover:scale-110 transition-transform">
                100%
              </div>
              <div className="text-green-100 text-sm">Customer Satisfaction</div>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="group bg-white text-green-800 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:scale-105 transition-all duration-300 min-w-[200px]"
              >
                <FaPhone className="mr-2 w-4 h-4" />
                Get Quick Callback
                <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link href="/projects">
              <Button
                variant="outline"
                size="lg"
                className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:scale-105 transition-all duration-300 min-w-[200px]"
              >
                View Projects
                <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-lime-300 text-sm mb-4">Trusted by leading families across the region</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-white text-sm">🏆 Award Winning</div>
              <div className="text-white text-sm">🌱 Eco Certified</div>
              <div className="text-white text-sm">⭐ 5-Star Rated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedCTASection;
