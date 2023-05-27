"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import "../globals.css";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const pathname = usePathname();
  const [mobileNavbarToggle, setMobileNavbarToggle] = useState(false);
  // console.log(pathname);
  return (
    <header>
      <div className="flex justify-between  items-center shadow-lg lg:h-12 h-10 w-full lg:px-10 px-5 lg:py-10 py-7 text-stone-900 bg-white">
        <section>
          <h1 className="lg:text-xl text-lg">
            <Link href="/" key={pathname.name}>
              {" "}
              LOGO
            </Link>
          </h1>
        </section>
        <section className="hidden lg:block">
          <ul className="flex justify-evenly items-center space-x-12">
            <li
              className={
                pathname === "/"
                  ? "text-primary font-bold border-b-2 border-primary"
                  : " font-semibold hover:text-primary hover:border-b-2 hover:border-primary"
              }
            >
              <Link href="/" key={pathname.name}>
                {" "}
                HOME
              </Link>
            </li>
            <li
              className={
                pathname === "/blog"
                  ? "text-primary font-bold border-b-2 border-primary"
                  : " font-semibold hover:text-primary hover:border-b-2 hover:border-primary"
              }
            >
              <Link href="/blog" key={pathname.name}>
                {" "}
                BLOGS
              </Link>
            </li>
            <li
              className={
                pathname === "/shop"
                  ? "text-primary font-bold border-b-2 border-primary"
                  : " font-semibold hover:text-primary hover:border-b-2 hover:border-primary"
              }
            >
              <Link href="/shop" key={pathname.name}>
                {" "}
                SHOP
              </Link>
            </li>
            <li
              className={
                pathname === "/about"
                  ? "text-primary font-bold border-b-2 border-primary"
                  : " font-semibold hover:text-primary hover:border-b-2 hover:border-primary"
              }
            >
              <Link href="/about" key={pathname.name}>
                ABOUT
              </Link>
            </li>
            <li
              className={
                pathname === "/contact"
                  ? "text-primary font-bold border-b-2 border-primary"
                  : " font-semibold hover:text-primary hover:border-b-2 hover:border-primary"
              }
            >
              <Link href="/contact" key={pathname.name}>
                {" "}
                CONTACT
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <ul className="flex justify-center items-center">
            <li className="lg:font-bold hidden lg:block font-semibold">
              <Link href="/login" key={pathname.name}>
                {" "}
                LOGIN
              </Link>
            </li>
            <li className="lg:font-bold lg:hidden ml-1 font-semibold ">
              <button
                onClick={() => setMobileNavbarToggle(!mobileNavbarToggle)}
              >
                {" "}
                {!mobileNavbarToggle ? (
                  <svg
                    data-aos="flip-left"
                    data-aos-duration="1000"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="text-primary"
                    width="24"
                    height="24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 6h16v2H4zm0 4h16v2H4zm0 4h16v2H4zm0 4h16v2H4z" />
                  </svg>
                ) : (
                  <RxCross2
                    data-aos="flip-right"
                    data-aos-duration="1000"
                    className="text-primary font-semibold text-2xl"
                  ></RxCross2>
                )}
              </button>
            </li>
          </ul>
        </section>
      </div>
      {mobileNavbarToggle && (
        <section
          className="block lg:hidden relative"
          data-aos={`${!mobileNavbarToggle ? "fade-up" : "fade-down"} `}
          data-aos-duration="2000"
        >
          <ul className="navbar-ul absolute top-0 w-full bg-[#5F2476] text-center text-primary ">
            <li className="font-semibold ">
              <Link href="/" key={pathname.name}>
                {" "}
                HOME
              </Link>
            </li>
            <li className="font-semibold">
              <Link href="/about" key={pathname.name}>
                {" "}
                ABOUT
              </Link>
            </li>
            <li className="font-semibold">
              <Link href="/blog" key={pathname.name}>
                {" "}
                BLOG
              </Link>
            </li>
            <li className="font-semibold">
              <Link href="/shop" key={pathname.name}>
                {" "}
                SHOP
              </Link>
            </li>
            <li className="font-semibold">
              <Link href="/contact" key={pathname.name}>
                {" "}
                CONTACT
              </Link>
            </li>
            <li className="font-semibold">
              <Link href="/login" key={pathname.name}>
                {" "}
                LOGIN
              </Link>
            </li>
          </ul>
        </section>
      )}
    </header>
  );
};

export default Header;
