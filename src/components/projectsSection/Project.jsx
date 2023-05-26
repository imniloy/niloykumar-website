import React, { useState } from "react";
import Madal from "../../utils/Madal";

const Project = ({ project }) => {
  const { category, title, image } = project || {};
  const [isOpen, setIsOpen] = useState(false);
  const controlFunc = () => setIsOpen(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="relative group cursor-pointer p-6 sm:p-[30px] rounded-3xl bg-background1 hover:bg-none hover:bg-[#191b1e] shadow-shadow1  transition-all duration-500 ease-in-out before:content-[''] before:absolute before:h-full before:w-full before:rounded-3xl before:bg-background1 before:hover:bg-[#191b1e] before:transition-all before:duration-500 before:ease-in-out before:-z-[1]"
      >
        <div className="overflow-hidden">
          <img
            src={image}
            className="group-hover:scale-[1.05] transition-all duration-500"
            alt="projectPhoto"
          />
        </div>
        <div className="content mt-[18px]">
          <span className="pb-4 block text-primary uppercase font-medium font-poppins tracking-[1px] text-xs">
            {category}
          </span>
          <div className="text-[23px] font-montserrat leading-normal font-semibold text-lightn transition-all duration-[200ms] ease-in-out hover:text-primary">
            <h4 className="">{title}</h4>
          </div>
        </div>
      </div>
      {isOpen && (
        <Madal isOpen={isOpen} project={project} controlFunc={controlFunc} />
      )}
      {/* <Madal isOpen={isOpen} controlFunc={controlFunc} /> */}
    </>
  );
};

export default Project;
