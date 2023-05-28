"use client";

import AOS from "aos";
import "aos/dist/aos.css"; 
import HeroSection from "./shared/HeroSection";
import Testimonial from "@/components/Testimonial";
// ..
AOS.init();
export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      {/* <Testimonial></Testimonial> */}
    </>
  );
}
