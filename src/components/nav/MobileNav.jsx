import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const MobileNav = ({ navItems, socalMedia }) => {
  const { facebook, instragram, linkedin } = socalMedia || {};
  const [showMenu, setShowMenu] = useState(false);
  const changeState = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`block lg:hidden`}>
      <Bars3Icon
        className="h-9 w-9 text-primary cursor-pointer"
        onClick={changeState}
      />
      {/* black background */}
      <div
        className={`${
          showMenu
            ? " h-screen transition-all ease-in-out"
            : " h-screen hidden transition-all ease-in-out !duration-700"
        } bg-[rgba(0,0,0,0.8)] absolute inset-0`}
        onClick={() => setShowMenu(!showMenu)}
      ></div>

      {/* forground sidebar */}
      <div
        className={`${
          showMenu
            ? "sm:translate-x-[0px] translate-x-[0px]"
            : "sm:-translate-x-[100%] -translate-x-[100%]"
        } absolute top-0 left-0 bottom-0  h-screen bg-sidebarBg z-[9999] transition-all duration-[400ms] ease-in-out overflow-x-hidden`}
      >
        <div className="w-[320px] sm:w-[375px] overflow-x-hidden p-3 font-poppins">
          {/* menu top */}
          <div className="menu-top pb-5 border-b border-[#6f797571]">
            <ul className="w-full flex justify-between items-center">
              {/* logo */}
              <li>
                <img
                  src="https://rainbowit.net/html/inbio/assets/images/logo/logos-circle.png"
                  alt=""
                />
              </li>

              {/* cancle menuIcon */}
              <li
                className="w-9 h-9 bg-[rgba(255,255,255,0.1)] flex justify-center items-center rounded-full"
                onClick={changeState}
              >
                <XMarkIcon className="w-5 h-5 text-primary" />
              </li>
            </ul>
            {/* some descriptions */}
            <p className="text-gray-400 text-sm font-normal mt-3 sm:mt-5 text-left">
              Hi, I'm an experienced Software Engineer who helps businesses to
              grow and achieve goals.
            </p>
          </div>

          {/*  routes*/}
          <div className=" my-5 ">
            <ul>
              {navItems?.length > 0 &&
                navItems.map((navItem, index) => (
                  <Link to={`#${navItem}`} key={`${navItem + index}`}>
                    <li className="mobile-nav-menu-item">{navItem}</li>
                  </Link>
                ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="my-auto border-t border-[#6f797571]">
            <p className="font-poppins text-lightn font-normal uppercase text-sm mt-4">
              Stay Connect With Me
            </p>
            <ul className="mobile-nav-social-media-container">
              {/* facebookIcon */}
              <Link to={facebook} target="_blank">
                <li className="mobile-nav-social-media">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-facebook text-secondary"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </li>
              </Link>
              {/* Instagram */}
              <Link to={instragram} target="_blank">
                <li className="mobile-nav-social-media">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-instagram"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </li>
              </Link>
              {/* linkedIn */}
              <Link to={linkedin}></Link>
              <li className="mobile-nav-social-media">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
