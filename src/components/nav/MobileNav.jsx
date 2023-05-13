import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const changeState = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`block md:hidden`}>
      <Bars3Icon
        className="h-9 w-9 text-primary cursor-pointer"
        onClick={changeState}
      />
      {/* black background */}
      {/* <div
        className={`${
          showMenu ? "w-screen h-screen" : "w-0 h-0"
        } bg-[rgba(0,0,0,0.8)] absolute inset-0`}
        onClick={() => setShowMenu(!showMenu)}
      ></div> */}
      <div
        className={`${
          showMenu ? " translate-x-[100%] h-screen" : "w-0 h-0"
        } bg-[rgba(0,0,0,0.8)] w-screen absolute inset-0`}
        onClick={() => setShowMenu(!showMenu)}
      ></div>
      {/* forground sidebar */}
      <div
        className={`${
          showMenu
            ? "sm:translate-x-[0px] translate-x-[0px]"
            : "sm:-translate-x-[375px] -translate-x-[320px]"
        } absolute top-0 left-0 bottom-0  h-screen bg-sidebarBg z-[9999] transition-all duration-[700ms] ease-in-out`}
      >
        <div className={`${showMenu ? "sm:w-[375px] w-[320px] p-3" : "w-0"}`}>
          <ul className="w-full flex justify-between items-center">
            <li>
              <img
                src="https://rainbowit.net/html/inbio/assets/images/logo/logos-circle.png"
                alt=""
              />
            </li>

            <li className="">
              <XMarkIcon className=" " />
            </li>
          </ul>
          <ul
            className={`${
              showMenu ? "w-full block" : "w-0"
            } transition-all duration-700 ease-linear`}
          >
            <li className="block w-0">aaa</li>
            <li>bb</li>
            <li>aaa</li>
            <li>aaa</li>
            <li>aaa</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
