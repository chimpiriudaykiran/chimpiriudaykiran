"use client";

import { portfolioData } from "@/data/portfolioData";
import Link from "next/link";

const Navbar: React.FC = () => {
  const navItems = ["Home", "About", "Experience", "Projects", "Contact"];

  return (
    <div className="navbar bg-base-100 shadow-sm">

                  {/* Center Section - Brand Name */}
      <div className="navbar-start mr-4">
        <Link href="/" className="btn btn-ghost text-xl">
          {portfolioData.name}
        </Link>
      </div>
      {/* Left Section - Full Nav for Large Screens */}
      <div className="navbar-center">
        <div className="hidden lg:flex gap-4">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="btn btn-ghost text-primary-content"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>



      {/* Right Section - Full Nav for Large Screens & Icons */}
      <div className="navbar-end flex gap-4">
        {/* Search Icon */}
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <a href="/Resume.pdf" download className="btn btn-primary">
            Resume
          </a>
          {/* <DarkModeToggle /> */}
      </div>
    </div>
  );
};

export default Navbar;
