import React from "react";

const LatestNews = () => {
  return (
    <div>
      <h2 class="text-3xl font-semibold mb-8 text-center">Our <span className='text-primary font-bold'>Latest News</span> Here</h2>
      <section className="flex justify-evenly items-center lg:space-x-5 space-y-3 lg:space-y-0">
        <div className="shadow-xl p-3">
          <img
            src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
            alt=""
          />
          <h2 className="text-xl font-bold leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            illo!
          </h2>
          <p className="text-justify lg:my-2 leading-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, at
            inventore nulla dolores blanditiis quos quis neque vitae quibusdam
            pariatur!
          </p>

          <button className=" bg-gradient-to-r from-primary py-2 to-secondary px-4 w-full text-2xl text-color">
            Read more...
          </button>
        </div>
        <div className="shadow-xl p-3">
          <img
            src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
            alt=""
          />
          <h2 className="text-xl font-bold leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            illo!
          </h2>
          <p className="text-justify lg:my-2 leading-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, at
            inventore nulla dolores blanditiis quos quis neque vitae quibusdam
            pariatur!
          </p>

          <button className=" bg-gradient-to-r from-primary py-2 to-secondary px-4 w-full text-2xl text-color">
            Read more...
          </button>
        </div>
        <div className="shadow-xl p-3">
          <img
            src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
            alt=""
          />
          <h2 className="text-xl font-bold leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            illo!
          </h2>
          <p className="text-justify lg:my-2 leading-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, at
            inventore nulla dolores blanditiis quos quis neque vitae quibusdam
            pariatur!
          </p>

          <button className=" bg-gradient-to-r from-primary py-2 to-secondary px-4 w-full text-2xl text-color">
            Read more...
          </button>
        </div>
      </section>
    </div>
  );
};

export default LatestNews;
