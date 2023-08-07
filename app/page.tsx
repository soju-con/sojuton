import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import ScheduleSection from "@/components/home/ScheduleSection";
import SponsorSection from "@/components/home/SponsorSection";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <ScheduleSection />
      <SponsorSection />
    </div>
  );
};

export default HomePage;
