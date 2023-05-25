"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();
  // console.log(pathname);
  return (
    <header className="flex justify-between  items-center shadow-lg h-12 w-full px-10 py-10 text-stone-900 bg-white">
      <section>
        <h1 className="text-xl">
          <Link href="/" key={pathname.name}>
            {" "}
            LOGO
          </Link>
        </h1>
      </section>
      <section>
        <ul className="flex justify-evenly items-center space-x-12">
          <li
            className={
              pathname === "/" ? "nav-color font-bold" : " font-semibold"
            }
          >
            <Link href="/" key={pathname.name}>
              {" "}
              HOME
            </Link>
          </li>
          <li
            className={
              pathname === "/blog" ? "nav-color font-bold" : "font-semibold"
            }
          >
            <Link href="/blog" key={pathname.name}>
              {" "}
              BLOGS
            </Link>
          </li>
          <li
            className={
              pathname === "/shop" ? "nav-color font-bold" : "font-semibold"
            }
          >
            <Link href="/shop" key={pathname.name}>
              {" "}
              SHOP
            </Link>
          </li>
          <li
            className={
              pathname === "/about" ? "nav-color font-bold" : "font-semibold"
            }
          >
            <Link href="/about" key={pathname.name}>
              {" "}
              ABOUT
            </Link>
          </li>
          <li
            className={
              pathname === "/contact" ? "nav-color font-bold" : "font-semibold"
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
        <ul>
          <li className="font-bold">
            <Link href="/login" key={pathname.name}>
              {" "}
              LOGIN
            </Link>
          </li>
        </ul>
      </section>
    </header>
  );
};

export default Header;
