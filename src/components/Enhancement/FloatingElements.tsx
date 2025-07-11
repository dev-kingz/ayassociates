"use client";

import React from 'react';

interface FloatingElementsProps {
  variant?: 'dots' | 'shapes' | 'particles';
  density?: 'low' | 'medium' | 'high';
  className?: string;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ 
  variant = 'dots', 
  density = 'medium',
  className = '' 
}) => {
  const getDensityCount = () => {
    switch (density) {
      case 'low': return 8;
      case 'medium': return 12;
      case 'high': return 20;
      default: return 12;
    }
  };

  const renderDots = () => {
    const count = getDensityCount();
    return Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className={`absolute w-2 h-2 bg-lime-400/20 rounded-full animate-bounce-subtle`}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${3 + Math.random() * 2}s`
        }}
      />
    ));
  };

  const renderShapes = () => {
    const count = getDensityCount();
    return Array.from({ length: count }).map((_, i) => {
      const isCircle = i % 3 === 0;
      const isSquare = i % 3 === 1;
      
      return (
        <div
          key={i}
          className={`absolute bg-gradient-to-br from-green-300/10 to-green-500/20 animate-pulse-slow ${
            isCircle ? 'rounded-full w-8 h-8' : 
            isSquare ? 'rounded-lg w-6 h-6' : 'rounded-2xl w-10 h-4'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${4 + Math.random() * 2}s`
          }}
        />
      );
    });
  };

  const renderParticles = () => {
    const count = getDensityCount();
    return Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-white/30 rounded-full animate-shimmer"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
          animationDuration: `${2 + Math.random() * 3}s`
        }}
      />
    ));
  };

  const renderElements = () => {
    switch (variant) {
      case 'dots': return renderDots();
      case 'shapes': return renderShapes();
      case 'particles': return renderParticles();
      default: return renderDots();
    }
  };

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {renderElements()}
    </div>
  );
};

export default FloatingElements;
