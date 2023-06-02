import React from "react";

const OurCustomersResults = () => {
  return (
    <div className="bg-[#ceeff875] rounded-lg grid grid-cols-2 space-x-5 p-20 shadow-2xl">
      <section className="py-10">
        <h1 className="text-center text-purple text-5xl font-bold ">
          Our Customers See Results
        </h1>
        <div className="grid grid-cols-2  gap-20 my-14">
          <div>
            <h1 className="font-bold text-secondary text-5xl">900+</h1>
            <p>Trusted Brands</p>
          </div>
          <div>
            <h1 className="text-secondary  font-bold text-5xl">$2.9bn</h1>
            <p>Tracked Revenue in 2022</p>
          </div>
          <div>
            <h1 className="text-secondary  font-bold text-5xl">$2.1bn</h1>
            <p>Payouts In 2022</p>
          </div>
          <div>
            <h1 className="text-secondary  font-bold text-5xl">16.7bn</h1>
            <p>Clicks Tracked In 2022</p>
          </div>
        </div>
      </section>
      <section>
        <img
          className="rounded-xl"
          src="https://assets-global.website-files.com/6390d8be8be84c466e0fd7e0/641357713dfc013ed2f00839_aboutus-p-800.png"
          alt=""
        />
      </section>
    </div>
  );
};

export default OurCustomersResults;
