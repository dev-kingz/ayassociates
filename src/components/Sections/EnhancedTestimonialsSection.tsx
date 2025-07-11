"use client";

import React, { useState } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import FloatingElements from '../Enhancement/FloatingElements';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
  project: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    content: "The attention to detail and commitment to sustainable living at Trulife Resort is exceptional. Our family has found the perfect balance between luxury and nature.",
    rating: 5,
    avatar: "/gallery/images/Team-Member-1.png",
    project: "Trulife Resort"
  },
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    content: "Moving to the Nature Farm Houses was the best decision we made. The organic farming facilities and modern amenities create an ideal lifestyle for our family.",
    rating: 5,
    avatar: "/gallery/images/Team-Member-2.png",
    project: "Farm Houses"
  },
  {
    name: "Dr. Vikram Singh",
    role: "Medical Professional",
    content: "The premium bungalows offer a perfect retreat from city life. The smart home features and landscaped gardens provide a serene environment for relaxation.",
    rating: 5,
    avatar: "/gallery/images/Team-Member-3.png",
    project: "Premium Bungalows"
  }
];

const TestimonialCard: React.FC<{ testimonial: TestimonialProps; isActive: boolean }> = ({ 
  testimonial, 
  isActive 
}) => {
  return (
    <div className={`transition-all duration-700 ${isActive ? 'opacity-100 scale-100' : 'opacity-60 scale-95'}`}>
      <div className="relative p-8 bg-white rounded-3xl shadow-xl border border-gray-100/50 overflow-hidden hover:shadow-2xl transition-all duration-500">
        {/* Quote Icon */}
        <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center">
          <FaQuoteLeft className="w-6 h-6 text-white" />
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-transparent" />
        
        {/* Content */}
        <div className="relative">
          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <FaStar key={i} className="w-5 h-5 text-yellow-400" />
            ))}
          </div>
          
          {/* Testimonial Text */}
          <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
            "{testimonial.content}"
          </p>
          
          {/* Author Info */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-green-100">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
              <p className="text-gray-600">{testimonial.role}</p>
              <p className="text-secondary text-sm font-medium">{testimonial.project}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EnhancedTestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-green-50/30 to-gray-50 overflow-hidden">
      {/* Floating Elements */}
      <FloatingElements variant="dots" density="medium" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Client Stories
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-secondary">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Real experiences from families who chose to live the nature-centric lifestyle
          </p>
        </div>
        
        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="mb-8 fade-in-up">
              <TestimonialCard 
                testimonial={testimonials[currentIndex]} 
                isActive={true}
              />
            </div>
            
            {/* Navigation */}
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border-secondary/20 hover:bg-secondary/10 hover:border-secondary/30"
              >
                <FaChevronLeft className="w-4 h-4" />
              </Button>
              
              {/* Indicators */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-secondary scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border-secondary/20 hover:bg-secondary/10 hover:border-secondary/30"
              >
                <FaChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedTestimonialsSection;
