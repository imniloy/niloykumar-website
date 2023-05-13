import React, { useState } from "react";
import MobileNav from "./MobileNav";

const NavBar = () => {
  const [navbarColor, setNavbarColor] = useState(false);
  // change navigation bar color depending on scroll position...
  const changeNavbarProperties = () => {
    if (window.scrollY >= 60) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };
  // scroll event listener...
  window.addEventListener("scroll", changeNavbarProperties);

  return (
    <header
      className={`navbar md:navbar-desktop ${
        navbarColor
          ? "bg-stickyNavbarBackground shadow-shadow1 backdrop-blur-lg md:h-[90px]"
          : "bg-transparent md:h-[100px]"
      } `}
    >
      <img
        className={`${navbarColor ? "nav-logo-stricky" : "nav-logo"}`}
        src="https://rainbowit.net/html/inbio/assets/images/logo/logo.png"
        alt="Logo"
      />

      <nav className="desktop-nav-items font-montserrat">
        <ul className="flex items-center md:gap-x-3 lg:gap-x-5">
          <li
            className="px-2 py-1 uppercase text-sm font-normal cursor-pointer"
            onClick={() => console.log("object")}
          >
            Home
          </li>
          <li
            className="px-2 py-1 uppercase text-sm font-normal cursor-pointer"
            onClick={() => console.log("object")}
          >
            About Me
          </li>
          <li
            className="px-2 py-1 uppercase text-sm font-normal cursor-pointer"
            onClick={() => console.log("object")}
          >
            Skills
          </li>
          <li
            className="px-2 py-1 uppercase text-sm font-normal cursor-pointer"
            onClick={() => console.log("object")}
          >
            Services
          </li>
          <li
            className="px-2 py-1 uppercase text-sm font-normal cursor-pointer"
            onClick={() => console.log("object")}
          >
            Projects
          </li>
          <li
            className="px-2 py-1 uppercase text-sm font-normal cursor-pointer"
            onClick={() => console.log("object")}
          >
            Blogs
          </li>
          <li
            className="px-2 py-1 uppercase text-sm font-normal cursor-pointer"
            onClick={() => console.log("object")}
          >
            Contract
          </li>
        </ul>
      </nav>

      {/* menubar for smaller devices*/}
      <MobileNav />
    </header>
  );
};

export default NavBar;
