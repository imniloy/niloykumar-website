import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

const Project = ({ project }) => {
  const { category, title, image } = project || {};
  return (
    <div className="relative group lg:basis-[31%] cursor-pointer p-6 2xl:p-[30px] rounded-3xl bg-background1 hover:bg-none hover:bg-[#191b1e] shadow-shadow1  transition-all duration-500 ease-in-out before:content-[''] before:absolute before:h-full before:w-full before:rounded-3xl before:bg-background1 before:hover:bg-[#191b1e] before:transition-all before:duration-500 before:ease-in-out before:-z-[1]">
      <div className="w-full h-full overflow-hidden">
        <img
          src={image}
          className="group-hover:scale-[1.05] transition-all duration-500"
          alt="projectPhoto"
        />
      </div>
      <div className="content mt-[18px]">
        <span className="lg:pb-3 xl:pb-4 block text-primary uppercase font-medium font-poppins tracking-[1px] text-xs">
          {category}
        </span>
        <div className="text-[23px] font-montserrat leading-normal font-semibold text-lightn transition-all duration-[200ms] ease-in-out hover:text-primary">
          <h4 className="">{title}</h4>
        </div>
      </div>
    </div>
  );
};

export default Project;
