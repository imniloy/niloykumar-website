import React from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const ProjectDetails = ({ project, controlFunc }) => {
  const { category, title, image, description, gitHub, liveLink } =
    project || {};

  return (
    <div className="bg-background1 my-auto lg:mt-0 lg:w-[90%] xl:w-[80%] 2xl:w-[70%] shadow-shadow1 rounded-2xl">
      <div
        className="h-11  w-11 flex justify-center items-center shadow-shadow2 rounded-full cursor-pointer ml-auto hover:text-primary bg-background2"
        onClick={controlFunc}
      >
        <XMarkIcon className="h-6 w-6 bg-transparent" />
      </div>
      {/* details sections */}
      <div className="px-4 pb-10 500px:px-7 500px:pb-7 md:px-11 md:pb-11 pt-[1px] flex flex-col lg:flex-row justify-between items-center gap-y-5 lg:gap-y-0 lg:gap-x-10">
        <div className="grow lg:basis-1/2 bg-red-400 w-full h-full overflow-hidden rounded-xl">
          <img
            src={image}
            className="hover:scale-[1.05] w-full h-[40vh] 500px:h-[50vh] lg:h-full transition-all duration-300"
            alt="project Image"
          />
        </div>
        <div className="lg:basis-1/2">
          <div className="mb-4 500px:mb-5">
            <span className="text-base font-medium mb-3 500px:mb-5 block text-body">
              Caregory - {category}
            </span>
            <h3 className="text-xl sm:text-3xl font-bold capitalize text-lightn font-montserrat">{title}</h3>
          </div>

          <p className="text-lg text-body">{description}</p>

          <div className="btn-group flex flex-col 500px:flex-row  500px:justify-between md:justify-normal mt-5 space-y-5 500px:space-y-0 500px:space-x-5">
            <Link to={gitHub} target="_blank">
              <button className="btn-type-1 w-full">Github</button>
            </Link>
            <Link to={liveLink} target="_blank">
              <button className="btn-type-1 w-full">View Live</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
