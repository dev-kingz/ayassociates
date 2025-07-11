"use client";

import React, { useState } from 'react';
import { 
  FaLeaf, 
  FaShieldAlt, 
  FaHome, 
  FaSwimmingPool, 
  FaDumbbell, 
  FaUtensils,
  FaWifi,
  FaCar,
  FaTree,
  FaWater,
  FaCamera
} from 'react-icons/fa';
import { FaSolarPanel } from 'react-icons/fa6';
import { MdSpa, MdSecurity } from 'react-icons/md';
import { GiTreehouse } from 'react-icons/gi';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import FloatingElements from '../Enhancement/FloatingElements';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  category: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    icon: <FaLeaf className="w-6 h-6" />,
    title: "Eco-Friendly Living",
    description: "Sustainable homes with solar power, rainwater harvesting, and organic waste management systems.",
    category: "Sustainability",
    image: "/gallery/images/AboutTrulife-Image1.png"
  },
  {
    icon: <FaShieldAlt className="w-6 h-6" />,
    title: "24/7 Security",
    description: "Advanced security systems with CCTV surveillance, access control, and trained security personnel.",
    category: "Security",
    image: "/gallery/images/AboutTrulife-Image2.png"
  },
  {
    icon: <FaSwimmingPool className="w-6 h-6" />,
    title: "Resort Amenities",
    description: "World-class facilities including swimming pools, spa, fitness center, and recreational areas.",
    category: "Amenities",
    image: "/gallery/images/SwimmingPool.png"
  },
  {
    icon: <FaDumbbell className="w-6 h-6" />,
    title: "Fitness & Wellness",
    description: "Modern gym facilities, yoga studios, and wellness centers for a healthy lifestyle.",
    category: "Wellness",
    image: "/gallery/images/Fitness&Wellness.png"
  },
  {
    icon: <FaUtensils className="w-6 h-6" />,
    title: "Fine Dining",
    description: "Premium restaurants and cafes offering organic, locally-sourced cuisine.",
    category: "Dining",
    image: "/gallery/images/Restaurant.png"
  },
  {
    icon: <GiTreehouse className="w-6 h-6" />,
    title: "Nature Integration",
    description: "Homes designed to blend seamlessly with natural surroundings and preserve local ecosystems.",
    category: "Nature",
    image: "/gallery/images/AboutTrulife-Image3.png"
  }
];

const categories = ['All', 'Sustainability', 'Security', 'Amenities', 'Wellness', 'Dining', 'Nature'];

const FeatureCard: React.FC<{ feature: FeatureProps; index: number }> = ({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
          {feature.category}
        </div>
        
        {/* Icon */}
        <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-secondary shadow-lg">
          {feature.icon}
        </div>
      </div>
      
      {/* Content */}
      <div className="relative p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-secondary transition-colors">
          {feature.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {feature.description}
        </p>
        
        {/* Hover Effect */}
        <div className={`absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-green-400/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

const EnhancedFeatureShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredFeatures = activeCategory === 'All' 
    ? features 
    : features.filter(feature => feature.category === activeCategory);

  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-gray-50/50 to-green-50/30 overflow-hidden">
      {/* Floating Elements */}
      <FloatingElements variant="shapes" density="medium" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-lime-100 text-lime-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
            Premium Features
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Experience <span className="text-secondary">Luxury Living</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover the exceptional features that make our communities the perfect choice for modern living
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 fade-in-up">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-secondary text-white shadow-lg hover:bg-secondary/90' 
                  : 'border-secondary/20 text-gray-700 hover:bg-secondary/10 hover:border-secondary/30'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredFeatures.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedFeatureShowcase;
