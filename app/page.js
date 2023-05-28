"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Home/Home";
// ..
AOS.init();
export default function page() {
  return (
    <>
      <Home></Home>
    </>
  );
}
