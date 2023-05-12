import React, { useState } from "react";
import { motion } from "framer-motion";
import { Bars3Icon } from "@heroicons/react/24/solid";

const MobileNav = () => {
  const [showMenu, SetShowMenu] = useState(false);

  const varients = {
    visible: {
      opacity: 1,
      // x: "100%",
      width: "310px",
      transition: {
        type: "spring",
        // duration: [0.5, 0.4, 0.2],
        duration: [0.5, 0.2],
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0,
      // x: "0%",
      width: "0%",
      transition: {
        type: "spring",
        // duration: 0.8,
        duration: [0.5, 0.4, 0.2],

        ease: "easeInOut",
      },
    },
  };

  return (
    <nav className={`block md:hidden`}>
      <Bars3Icon
        className="h-9 w-9 text-primary cursor-pointer"
        onClick={() => SetShowMenu(!showMenu)}
      />

      <motion.div
        variants={varients}
        initial="hidden"
        animate={`${showMenu ? "visible" : "hidden"}`}
        className={`h-screen bg-red-200 absolute left-0 top-0`}
      >
        <div className="w-full flex justify-between items-center">
          <img
            src="https://rainbowit.net/html/inbio/assets/images/logo/logos-circle.png"
            alt=""
          />
        </div>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
