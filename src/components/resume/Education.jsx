import React from "react";

const Education = ({ info }) => {
  const { program, oraganization, description, result } = info || {};

  return (
    <div className="education-item group ml-2 pl-6 bg-transparent border-l-[5px] border-[#1b1b11] relative  before:content-['']  before:absolute before:h-5 before:w-5 before:border-[5px] before:border-[#1b1b11] before:bg-background2 before:hover:bg-[#009e66] before:left-0 before:z-50 before:rounded-full before:-translate-x-[60%] before:transition-all before:duration-[400ms] before:mt-11">
      <div className="px-10 pb-10 pt-11 basis-1/2 text-lightn font-poppins bg-background1 group-hover:bg-white shadow-shadow1 transition-all duration-[400ms] before:content-[''] before:absolute before:left-0 before:h-[5px] before:w-[20px] before:mt-2 before:bg-[#1b1b11]">
        <div className="inner-container ">
          <div className="heading flex justify-between items-center mb-10">
            <div className="mb-4">
              <h6 className="title capitalize text-2xl font-medium mb-2">
                {program}
              </h6>
              <span className="text-[#7c838e] capitalize text-sm">
                {oraganization}
              </span>
            </div>
            <div className="">
              <span className="text-primary text-sm block bg-background1 shadow-shadow1 rounded p-3 transition-all duration-[400ms]">
                {result}
              </span>
            </div>
          </div>

          <div className="description text-lg text-body">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default Education;
