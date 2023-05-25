"use client";

import Image from "next/image";
import Header from "./shared/Header";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
export default function Home() {
  return (
    <div>
      <Header></Header>
      <h1>hello world</h1>
      <p>I am learning from Mobark Bhai doing an affiliate project.</p>
    </div>
  );
}
