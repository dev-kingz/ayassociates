"use client";

import React from 'react';
import { useEffect, useRef } from 'react';

interface ParallaxContainerProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

const ParallaxContainer: React.FC<ParallaxContainerProps> = ({ 
  children, 
  className = '',
  speed = 0.5 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrolled = window.pageYOffset;
      const parallax = scrolled * speed;
      
      containerRef.current.style.transform = `translateY(${parallax}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={containerRef} className={`parallax ${className}`}>
      {children}
    </div>
  );
};

export default ParallaxContainer;
