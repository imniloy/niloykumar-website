import React, { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Bars3Icon } from "@heroicons/react/24/solid";

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const width = useMotionValue(280);

  // decide the width depending on dimension of that device...
  if (window.innerWidth > 300 && window.innerWidth < 375) {
    width.set(290);
  } else if (window.innerWidth > 376 && window.innerWidth < 525) {
    width.set(320);
  } else if (window.innerWidth > 526 && window.innerWidth < 786) {
    width.set(375);
  }

  const innerVarients = {
    visible: {
      opacity: 1,
      width: width.get(),
      transition: {
        type: "spring",
        // type: "tween",
        // duration: [0.5, 0.4, 0.2],
        duration: [0.8, 0.2],
        // duration: 0.6,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0,
      width: "0%",
      transition: {
        // type: "tween",

        type: "spring",
        // duration: 0.8,
        duration: [0.8, 0.2, 0.4],

        ease: "easeInOut",
      },
    },
  };

  const containerVarients = {
    visible: {
      opacity: 1,
      width: "100%",
      backgroundColor: "rgba(0,0,0,0.8)",
      // transition: {
      //   type: "spring",
      //   // duration: [0.5, 0.4, 0.2],
      //   duration: [0.5, 0.2],
      ease: "easeInOut",
      // },
    },
    hidden: {
      opacity: 0,
      width: "0%",
      // transition: {
      //   type: "spring",
      //   duration: 0.8,
      //   // duration: [0.5, 0.4, 0.2],

      ease: "easeInOut",
      // },
    },
  };

  const changeState = () => {
    setShowMenu(!showMenu);
    console.log("object");
  };

  return (
    <nav className={`block md:hidden`}>
      <Bars3Icon
        className="h-9 w-9 text-primary cursor-pointer"
        onClick={changeState}
      />
      <div
        className={`${
          showMenu ? "w-screen h-screen" : "w-0 h-0"
        } bg-[rgba(0,0,0,0.8)] absolute inset-0`}
        variants={containerVarients}
        onClick={() => setShowMenu(!showMenu)}
      ></div>

      <motion.div
        // variants={innerVarients}
        // initial="hidden"
        // animate={`${showMenu ? "visible" : "hidden"}`}
        className={`${
          showMenu ? "sm:w-[375px] w-[310px]" : "w-0"
        } absolute top-0 left-0 bottom-0 h-screen bg-red-200 z-50 transition-all duration-500 ease-in-out`}
      >
        <div className="w-full flex justify-between items-center">
          <img
            src="https://rainbowit.net/html/inbio/assets/images/logo/logos-circle.png"
            alt=""
          />
        </div>
      </motion.div>

      {/* <motion.div
        variants={containerVarients}
        initial="hidden"
        animate={`${showMenu ? "visible" : "hidden"}`}
        className="absolute left-0 top-0 right-0 h-screen"
        onClick={changeState}
      ></motion.div> */}
      {/* <motion.div
        variants={innerVarients}
        initial="hidden"
        animate={`${showMenu ? "visible" : "hidden"}`}
        className={`h-full bg-red-200 sm:w-[375px] w-[310px]`}
      >
        <div className="w-full flex justify-between items-center">
          <img
            src="https://rainbowit.net/html/inbio/assets/images/logo/logos-circle.png"
            alt=""
          />
        </div>
      </motion.div> */}
    </nav>
  );
};

export default MobileNav;
