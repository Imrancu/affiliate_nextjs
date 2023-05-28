import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

const BestSellingOnAmazon = () => {
  const products = [
    {
      img: "https://m.media-amazon.com/images/I/31k7xBka-UL._AC_SY200_.jpg",
      title: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    },
    {
      img: "https://m.media-amazon.com/images/I/31k7xBka-UL._AC_SY200_.jpg",
      title: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    },
    {
      img: "https://m.media-amazon.com/images/I/31k7xBka-UL._AC_SY200_.jpg",
      title: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    },
    {
      img: "https://m.media-amazon.com/images/I/31k7xBka-UL._AC_SY200_.jpg",
      title: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    },
    {
      img: "https://m.media-amazon.com/images/I/31k7xBka-UL._AC_SY200_.jpg",
      title: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    },
    {
      img: "https://m.media-amazon.com/images/I/31k7xBka-UL._AC_SY200_.jpg",
      title: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    },
  ];
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{ delay: 3000 }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {products.map((p) => {
          return (
            <SwiperSlide className="text-center rounded-lg shadow-2xl border border-purple p-3">
              <div className="flex justify-center items-center">
                <img src={p.img} alt="" />
              </div>
              <h1 className="my-3">{p.title}</h1>
              <button className=" bg-gradient-to-r from-secondary to-purple  w-1/2 text-xl text-color py-2 rounded-xl ">
                BUY NOW
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default BestSellingOnAmazon;
