"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const form = useRef();
  const notify = () => toast("Wow! Message Sent Successfully.");

  const sendEmail = (e) => {
    e.preventDefault();
    form.current.reset();

    emailjs
      .sendForm(
        "service_e01j2zj",
        "template_byufv3d",
        form.current,
        "bmDq4xOCeSx0pJRgs"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Email Sent Successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
    notify();
  };

  return (
    <>
      <div class="relative bg-cover bg-center bg-no-repeat bg-[url('https://images.pexels.com/photos/7689684/pexels-photo-7689684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
        <div class="absolute inset-0 bg-gradient-to-r from-secondary to-midnight opacity-50"></div>
        <div class="relative z-10 flex justify-center items-center h-screen">
          <h1 className="text-5xl text-color font-bold tracking-wider">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="bg-silver py-20">
        <h2 className="text-3xl font-semibold text-center pb-10">
          Let’s Start a Conversation
        </h2>
        <div className="lg:flex lg:gap-10 lg:justify-between mx-10 pb-10 pt-5">
          <div className="lg:w-1/2 w-full bg-color p-7 rounded-xl shadow-xl">
            <h3 className="text-2xl font-semibold my-7">Points of Contact</h3>
            <h5 className="text-xl">U.S. | TUNE</h5>
            <p className="font-light">
              11350 McCormick Rd, EP III, Suite 200, Hunt Valley, MD 21031
            </p>
            <h5 className="text-xl mt-5">Support</h5>
            <span className="cursor-pointer">customersupport@support.com</span>
            <h3 className="text-2xl font-semibold my-7">
              Additional Office Location
            </h3>
            <h5 className="text-xl">Germany</h5>
            <p className="font-light">
              Torstr. 231, Vorderhaus, 1. OG, 10115 Berlin
            </p>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="lg:w-1/2 w-full lg:mt-0 mt-9 bg-color p-7 rounded-xl shadow-xl"
          >
            <ToastContainer />
            <div className="lg:flex gap-5">
              <input
                className="w-full mt-5 focus:outline-midnight duration-300 p-3 rounded-xl border border-primary text-xl"
                type="text"
                name="first_name"
                placeholder="First Name"
                required
              />
              <input
                className="w-full mt-5 focus:outline-midnight duration-300 p-3 rounded-xl border border-primary text-xl"
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
              />
            </div>
            <input
              className="w-full mt-5 focus:outline-midnight duration-300 p-3 rounded-xl border border-primary text-xl"
              type="email"
              name="user_email"
              placeholder="Enter Your Email"
              required
            />
            <textarea
              className="w-full h-32 resize-y mt-5 focus:outline-midnight duration-300 p-3 rounded-xl border border-primary text-xl"
              type="text"
              name="message"
              placeholder="Write Your Message Here"
              required
            />
            <input
              className="w-full mt-5 hover:bg-midnight hover:text-color text-midnight duration-500 cursor-pointer bg-primary text-xl font-semibold rounded-xl p-3"
              type="submit"
              value="Send Message"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
