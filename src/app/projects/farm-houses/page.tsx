"use client";

import React from "react";
import AnimatedHeroReusable from "@/components/Hero/AnimatedHeroReusable";

const FarmHousesPage = () => {
  return (
    <div className="flex grow flex-col items-center self-stretch overflow-x-hidden">
      <AnimatedHeroReusable
        backgroundImage="/gallery/images/hero.jpg"
        badge="Luxury Living"
        title="Farm Houses"
        subtitle="Spacious Luxury in Natural Settings"
        description="Experience the perfect blend of rural tranquility and modern luxury with our premium farm houses, designed for those who seek space, privacy, and connection with nature."
        primaryButtonText="Explore Properties"
        primaryButtonLink="/contact"
        secondaryButtonText="Schedule Visit"
        secondaryButtonLink="/contact"
        scrollTarget=".About"
      />
    </div>
  );
};

export default FarmHousesPage;
