import Navbar from "@/components/Navbar";
import React from "react";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SafetySection from "./sections/SafetySection";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SafetySection />
    </div>
  );
};

export default Landing;
