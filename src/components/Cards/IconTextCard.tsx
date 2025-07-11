"use client";

import React from 'react';
import { IconType } from 'react-icons';
import { useState } from 'react';

interface IconTextCardProps {
  title: string;
  text: string;
  bgColor?: string;
  Icon: IconType;
  delay?: number;
}

const IconTextCard: React.FC<IconTextCardProps> = ({ 
  Icon, 
  title, 
  text, 
  bgColor = 'bg-white',
  delay = 0 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const textColor = bgColor === 'bg-white' ? 'text-gray-500' : 'text-gray-200';
  const titleColor = bgColor === 'bg-white' ? 'text-secondary' : 'text-white';
  const iconColor = bgColor === 'bg-white' ? 'text-secondary' : 'text-white';
  const hoverBg = bgColor === 'bg-white' ? 'hover:bg-gray-50' : 'hover:bg-secondary/90';

  return (
    <div 
      className={`group w-[330px] sm:w-[280px] h-[220px] sm:h-[320px] px-6 py-8 flex flex-col rounded-2xl ${bgColor} ${hoverBg} shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-gray-100/50 fade-in-up overflow-hidden relative`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
      
      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon section */}
      <div className="relative flex justify-end mb-4">
        <div className={`p-3 rounded-xl ${bgColor === 'bg-white' ? 'bg-green-50 group-hover:bg-green-100' : 'bg-white/10 group-hover:bg-white/20'} transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3`}>
          <Icon className={`h-8 w-8 ${iconColor} transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}/>
        </div>
      </div>
      
      {/* Content section */}
      <div className="relative flex-1 flex flex-col justify-between">
        <div className="text-start mb-4">
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-8 h-0.5 ${bgColor === 'bg-white' ? 'bg-lime-400' : 'bg-white/60'} transition-all duration-500 group-hover:w-12`} />
            <h3 className={`text-xs font-medium uppercase tracking-wider ${titleColor} opacity-70`}>
              Premium Offerings
            </h3>
          </div>
          <h1 className={`text-xl sm:text-2xl font-bold ${titleColor} leading-tight group-hover:text-secondary transition-colors duration-300`}>
            {title}
          </h1>
        </div>
        
        <p className={`text-start text-sm sm:text-base ${textColor} leading-relaxed transition-all duration-300 group-hover:text-gray-600`}>
          {text}
        </p>
        
        {/* Learn more indicator */}
        <div className={`mt-4 text-xs ${titleColor} opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex items-center gap-1`}>
          <span>Learn more</span>
          <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default IconTextCard;
