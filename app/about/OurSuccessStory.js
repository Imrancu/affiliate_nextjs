import React from "react";
import { FaArrowRight } from "react-icons/fa";

const OurSuccessStory = () => {
  return (
    <div className="lg:my-16 my-10">
      <div className="lg:grid grid-cols-2 space-x-5 ">
        <div className="lg:flex justify-center items-center">
          <h1 className=" text-5xl font-semibold text-secondary">
            Our Success Story
          </h1>
          <span className="mx-3 lg:mt-3">
            <FaArrowRight className=" text-5xl font-semibold text-secondary"></FaArrowRight>
          </span>
        </div>
        <p className="text-justify text-xl">
          <span className="font-bold text-3xl">Everflow</span> was founded in
          May 2016. Our founders had wrapped up a successful exit for one of the
          very first mobile affiliate networks, Moolah Media. No one had built a
          truly great tracking and partner management platform. Having already
          built these solutions for themselves, they had a direct path to build
          a SaaS platform that solved these needs and won early customers. How
          have we had smooth upward growth ever since as a bootstrapped company?
          We've built a great solution and made customer success our core DNA
          and product refinement loop, which directly led to happy customers.
          Joyful customers and deep partnerships bring trust, awareness, and
          referrals that outperform all of our other channels. Thanks customers,
          we ❤️ you!
        </p>
      </div>
      <img
        className="w-full lg:my-24 my-8 "
        src="https://i.ibb.co/f0vR4C4/group-people-working-team.jpg"
        alt=""
      />
    </div>
  );
};

export default OurSuccessStory;
