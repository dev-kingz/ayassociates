"use client";

import React from "react";
import AnimatedHeroReusable from "@/components/Hero/AnimatedHeroReusable";

const BunglowsPage = () => {
  return (
    <div className="flex grow flex-col items-center self-stretch overflow-x-hidden">
      <AnimatedHeroReusable
        backgroundImage="/gallery/images/hero.jpg"
        badge="Premium Homes"
        title="Bungalows"
        subtitle="Elegant Independent Living"
        description="Discover our collection of premium bungalows that offer the perfect combination of privacy, luxury, and modern amenities in beautifully landscaped communities."
        primaryButtonText="View Bungalows"
        primaryButtonLink="/contact"
        secondaryButtonText="Book Site Visit"
        secondaryButtonLink="/contact"
        scrollTarget=".About"
      />
    </div>
  );
};

export default BunglowsPage;
