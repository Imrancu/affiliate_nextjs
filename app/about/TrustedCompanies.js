import React from "react";

const TrustedCompanies = () => {
  return (
    <main>
      <h3 className="text-center text-3xl font-semibold lg:my-14 my-6">
        Trusted By Top Companies
      </h3>
      <marquee behavior="smooth" direction="left">
        <div className="grid lg:grid-cols-6 space-y-5 lg:space-y-0 ">
          <div className="flex justify-center">
            <img
              className="lg:w-1/2  "
              src="https://assets-global.website-files.com/6390d8be8be84c466e0fd7e0/6423059a810da699689ddd24_skills.svg"
              alt=""
            />
          </div>
          <div className="flex justify-center">
            <img
              className="lg:w-1/2  "
              src="https://assets-global.website-files.com/6390d8be8be84c466e0fd7e0/64260401b838c20a06ff7943_mutual.png"
              alt=""
            />
          </div>
          <div className="flex justify-center">
            <img
              className="lg:w-1/2 w-full "
              src="https://assets-global.website-files.com/6390d8be8be84c466e0fd7e0/64260401e4518078be1f01e6_first.png"
              alt=""
            />
          </div>
          <div className="flex justify-center">
            <img
              className="lg:w-1/2 w-full "
              src="https://assets-global.website-files.com/6390d8be8be84c466e0fd7e0/64260401c7956c948690d4b1_beekeepers.png"
              alt=""
            />
          </div>
          <div className="flex justify-center">
            <img
              className="lg:w-1/2 w-full "
              src="https://assets-global.website-files.com/6390d8be8be84c466e0fd7e0/6426040183dfe814b53fd32d_jg.png"
              alt=""
            />
          </div>
          <div className="flex justify-center">
            <img
              className="lg:w-1/2 w-full "
              src="https://assets-global.website-files.com/6390d8be8be84c466e0fd7e0/64260401d23f47f3f741ad1c_sharecare.png"
              alt=""
            />
          </div>
        </div>
      </marquee>
    </main>
  );
};

export default TrustedCompanies;
