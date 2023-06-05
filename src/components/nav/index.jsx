import React, { useState } from "react";
import MobileNav from "./MobileNav";
import { navbar } from "../../data";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { navItems, socalMedia } = navbar || {};
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
      className={`navbar navbar-mobile lg:navbar-desktop ${
        navbarColor
          ? "bg-stickyNavbarBackground shadow-shadow1 backdrop-blur-lg md:h-[90px]"
          : "bg-transparent md:h-[100px]"
      } `}
    >
      <Link to={`/`}>
        <img
          className={`${navbarColor ? "nav-logo-stricky" : "nav-logo"}`}
          src="https://rainbowit.net/html/inbio/assets/images/logo/logo.png"
          alt="Logo"
        />
      </Link>

      <nav className="desktop-nav-items font-montserrat">
        <ul className="flex items-center md:gap-x-1 840px:gap-3 lg:gap-x-5">
          {navItems?.length > 0 &&
            navItems.map((navItem, index) => (
              <Link to={`#${navItem}`} key={`${navItem + index}`}>
                <li
                  className="px-2 py-1 uppercase text-sm font-normal cursor-pointer"
                  onClick={() => console.log("object")}
                >
                  {navItem}
                </li>
              </Link>
            ))}
        </ul>
      </nav>

      {/* menubar for smaller devices*/}
      <MobileNav navItems={navItems} socalMedia={socalMedia} />
    </header>
  );
};

export default NavBar;
