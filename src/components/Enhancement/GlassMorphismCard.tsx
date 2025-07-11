"use client";

import React from 'react';

interface GlassMorphismCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'heavy';
}

const GlassMorphismCard: React.FC<GlassMorphismCardProps> = ({ 
  children, 
  className = '',
  intensity = 'medium'
}) => {
  const getIntensityClasses = () => {
    switch (intensity) {
      case 'light':
        return 'bg-white/10 backdrop-blur-sm border-white/10';
      case 'medium':
        return 'bg-white/20 backdrop-blur-md border-white/20';
      case 'heavy':
        return 'bg-white/30 backdrop-blur-lg border-white/30';
      default:
        return 'bg-white/20 backdrop-blur-md border-white/20';
    }
  };

  return (
    <div className={`glass ${getIntensityClasses()} rounded-2xl border ${className}`}>
      {children}
    </div>
  );
};

export default GlassMorphismCard;
