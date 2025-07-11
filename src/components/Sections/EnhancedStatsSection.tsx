"use client";

import React, { useState, useEffect, useRef } from 'react';
import { FaHome, FaUsers, FaAward, FaCalendarAlt } from 'react-icons/fa';
import FloatingElements from '../Enhancement/FloatingElements';

interface StatCardProps {
  icon: React.ReactNode;
  number: number;
  label: string;
  suffix?: string;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon, number, label, suffix = '', delay }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setCount(prev => {
            const increment = Math.ceil(number / 50);
            const next = prev + increment;
            if (next >= number) {
              clearInterval(interval);
              return number;
            }
            return next;
          });
        }, 50);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, number, delay]);

  return (
    <div 
      ref={cardRef}
      className={`group relative p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl border border-gray-100/50 transition-all duration-700 hover:-translate-y-3 overflow-hidden fade-in-up ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-green-400/20 to-transparent rounded-bl-full" />
      
      {/* Icon */}
      <div className="relative mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          {icon}
        </div>
      </div>
      
      {/* Stats */}
      <div className="relative">
        <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-secondary transition-colors">
          {count.toLocaleString()}{suffix}
        </div>
        <div className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors">
          {label}
        </div>
      </div>
      
      {/* Sparkle effect */}
      <div className="absolute bottom-4 right-4 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" />
    </div>
  );
};

const EnhancedStatsSection: React.FC = () => {
  const stats = [
    {
      icon: <FaHome className="w-8 h-8 text-white" />,
      number: 500,
      suffix: '+',
      label: 'Homes Delivered'
    },
    {
      icon: <FaUsers className="w-8 h-8 text-white" />,
      number: 1200,
      suffix: '+',
      label: 'Happy Families'
    },
    {
      icon: <FaAward className="w-8 h-8 text-white" />,
      number: 15,
      suffix: '+',
      label: 'Awards Won'
    },
    {
      icon: <FaCalendarAlt className="w-8 h-8 text-white" />,
      number: 5,
      suffix: '',
      label: 'Years of Excellence'
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-green-50/20 to-white overflow-hidden">
      {/* Floating Elements */}
      <FloatingElements variant="shapes" density="low" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Our Achievements
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Numbers That <span className="text-secondary">Speak</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Building trust through consistent delivery and exceptional results
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              number={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedStatsSection;
