"use client";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import HeroSection from "./shared/HeroSection";
// ..
AOS.init();
export default function Home() {
  return (
    <>
      <Header></Header>
      <h1>hello world</h1>

      <HeroSection></HeroSection>

      <p>I am learning from Mobark Bhai doing an affiliate project.</p>
    </>
  );
}
