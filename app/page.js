"use client";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import HeroSection from "./shared/HeroSection";
import Home from "../app/Home/Home";
// import Home from './Home/Home';
// ..
AOS.init();
export default function page() {
  return (
    <>
      <HeroSection></HeroSection>
      <Home></Home>
      <p>I am learning from Mobark Bhai doing an affiliate project.</p>
    </>
  );
}
