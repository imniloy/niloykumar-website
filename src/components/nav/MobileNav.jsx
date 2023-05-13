import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

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
      <div
        className={`${
          showMenu ? "w-screen h-screen" : "w-0 h-0"
        } bg-[rgba(0,0,0,0.8)] absolute inset-0`}
        onClick={() => setShowMenu(!showMenu)}
      ></div>
      {/* forground sidebar */}
      <div
        className={`${
          showMenu ? "sm:w-[375px] w-[320px]" : "w-0"
        } absolute top-0 left-0 bottom-0 h-screen bg-sidebarBg z-[9999] transition-all duration-[400ms] ease-in-out`}
      >
        <div className="w-full flex justify-between items-center">
          <img
            src="https://rainbowit.net/html/inbio/assets/images/logo/logos-circle.png"
            alt=""
          />
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
