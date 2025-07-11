"use client";

import React from 'react';
import { IconType } from 'react-icons';
import { GiStarsStack } from "react-icons/gi";
import { RiPoliceBadgeLine } from "react-icons/ri";
import { FaRegHandshake, FaLeaf, FaShieldAlt, FaHeart } from "react-icons/fa";

interface FeatureCardProps {
  Icon: IconType;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ Icon, title, description, delay }) => {
  return (
    <div 
      className="group relative p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/50 overflow-hidden fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon */}
      <div className="relative mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-lime-600 to-secondary rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
          {description}
        </p>
      </div>
      
      {/* Decorative element */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-lime-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

const EnhancedUniquenessSection: React.FC = () => {
  const features = [
    {
      Icon: GiStarsStack,
      title: "Setting Ourselves Apart",
      description: "Discover unmatched expertise, impeccable quality, and tailored solutions crafted specifically for your unique lifestyle needs and aspirations."
    },
    {
      Icon: RiPoliceBadgeLine,
      title: "Elevate Your Experience",
      description: "Immerse yourself in a lifestyle curated by industry experts, ensuring unparalleled quality, attention to detail, and a personalized touch in every aspect."
    },
    {
      Icon: FaRegHandshake,
      title: "Partnership for Life",
      description: "Join us on an extraordinary journey! Experience guided excellence enriched by our unwavering commitment to creating lasting relationships and exceptional outcomes."
    },
    {
      Icon: FaLeaf,
      title: "Sustainable Living",
      description: "Embrace eco-friendly design and sustainable practices that harmonize with nature while providing modern luxury and comfort for generations to come."
    },
    {
      Icon: FaShieldAlt,
      title: "Trusted Security",
      description: "Experience peace of mind with our comprehensive security systems and gated community features designed to protect what matters most to you."
    },
    {
      Icon: FaHeart,
      title: "Community Wellness",
      description: "Join a thriving community focused on health, wellness, and meaningful connections that enrich your daily life and overall well-being."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="relative z-10 Header justify-center flex flex-col items-center gap-4 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-lime-100 text-lime-700 px-4 py-2 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl text-black font-bold text-center">
          Our<span className="text-secondary"> Uniqueness</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-center">
            Discover what sets us apart in creating exceptional nature-centric communities 
            that blend luxury, sustainability, and meaningful living experiences.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              Icon={feature.Icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
        
       
      </div>
    </section>
  );
};

export default EnhancedUniquenessSection;
