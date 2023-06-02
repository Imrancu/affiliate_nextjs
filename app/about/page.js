import React from "react";
import TrustedCompanies from "./TrustedCompanies";
import OurSuccessStory from "./OurSuccessStory";
import OurCustomersResults from "./OurCustomersResults";
import MeetTheExecTeam from "./MeetTheExecTeam";
import OurServices from "./OurServices";

const About = () => {
  return (
    <main className="lg:px-16 px-10 lg:py-10 py-6">
      <h1 className="lg:text-5xl text-2xl text-primary text-center font-bold">
        About Us
      </h1>
      <section className="grid lg:grid-cols-2 space-x-4 lg:my-16 my-8">
        <div className="flex justify-center items-center">
          <div className="my-10 lg:my-0">
            <h1 className="lg:text-5xl text-2xl text-primary font-semibold lg:mt-10">
              How Do We Know Partnerships Work? It's How We've Grown
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              vel assumenda repellat molestias veritatis voluptate, ipsa sit
              vero suscipit eum consectetur nostrum omnis sed esse deserunt est
              modi fuga ullam cumque debitis perferendis pariatur
              necessitatibus. Commodi error minus excepturi?
            </p>
          </div>
        </div>
        <div className="">
          <img
            className="rounded-lg"
            src="https://i.ibb.co/0XbYJBD/silhouette-confident-businesspeople.jpg"
            alt=""
          />
        </div>
      </section>
      <div>
        <TrustedCompanies></TrustedCompanies>
        <OurSuccessStory></OurSuccessStory>
        <OurCustomersResults></OurCustomersResults>
        <MeetTheExecTeam></MeetTheExecTeam>
        {/* <OurServices></OurServices> */}
      </div>
    </main>
  );
};

export default About;
