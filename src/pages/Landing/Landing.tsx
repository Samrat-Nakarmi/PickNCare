import Navbar from "@/components/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SafetySection from "./sections/SafetySection";
import WhySection from "./sections/WhySection";
import TestimonialSection from "./sections/TestimonialSection";
import PreviewSection from "./sections/PreviewSection";
import Footer from "@/components/Footer";

const Landing = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SafetySection />
      <WhySection />
      <TestimonialSection />
      <PreviewSection />
      <Footer />
    </>
  );
};

export default Landing;
