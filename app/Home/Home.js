import React from "react";
import LatestNews from "./LatestNews";
import BestSellingOnAmazon from "./BestSellingOnAmazon";

const Home = () => {
  return (
    <div className="lg:px-16 px-8 ">
      <div className="lg:my-10 my-5">
        <LatestNews></LatestNews>
      </div>
      <div className="lg:my-10">
        <h1 className="text-gradient-to-r from-secondary to-purple lg:text-5xl text-xl lg:my-8 my-2 font-bold">
          BEST SELLING ON AMAZON
        </h1>
        <BestSellingOnAmazon></BestSellingOnAmazon>
      </div>
    </div>
  );
};

export default Home;
