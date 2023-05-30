import React from "react";
import LatestNews from "./LatestNews";
import BestSellingOnAmazon from "./BestSellingOnAmazon";
import HeroSection from "../shared/HeroSection";
import Testimonial from "@/components/Testimonial";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <div className="lg:px-10 px-8">
      <div className="lg:my-10">
        <LatestNews></LatestNews>
      </div>
      <div className="lg:my-10">
      <h2 class="text-3xl font-semibold mb-12 text-center">Best <span className='text-primary font-bold'>Selling On</span> Amazon</h2>
        <BestSellingOnAmazon></BestSellingOnAmazon>
      </div>
    </div>
    <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
