"use client";

import React from "react";
import AnimatedHeroReusable from "@/components/Hero/AnimatedHeroReusable";

const NAPlotsPage = () => {
  return (
    <div className="flex grow flex-col items-center self-stretch overflow-x-hidden">
      <AnimatedHeroReusable
        backgroundImage="/gallery/images/hero.jpg"
        badge="Premium Plots"
        title="NA Plots"
        subtitle="Strategic Investment Opportunities"
        description="Discover premium NA plots in prime locations, offering excellent investment potential with clear titles and strategic positioning for future development."
        primaryButtonText="View Plots"
        primaryButtonLink="/contact"
        secondaryButtonText="Get Details"
        secondaryButtonLink="/contact"
        scrollTarget=".About"
      />
    </div>
  );
};

export default NAPlotsPage;
