import React from "react";
import ProjectDetails from "./ProjectDetails";

const Madal = ({ project, isOpen, controlFunc }) => {
  return (
    <div
      className={`transition-all duration-500 py-10 500px:py-10 lg:py-20 px-5 lg:px-10 overflow-y-auto ${
        isOpen
          ? "opacity-100 fixed inset-0 h-full w-full bg-background2 z-[1000] flex justify-center items-center text-white"
          : "opacity-0"
      } `}
    >
      <ProjectDetails project={project} controlFunc={controlFunc} />
    </div>
  );
};

export default Madal;
