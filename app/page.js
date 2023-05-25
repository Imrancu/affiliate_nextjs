"use client";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import HeroSection from "./shared/HeroSection";
import Header from "./shared/Header";
// ..
AOS.init();
export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>

      <p>I am learning from Mobark Bhai doing an affiliate project.</p>
    </>
  );
}
