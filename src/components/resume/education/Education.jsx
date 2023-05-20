import React from "react";

const Education = ({ info }) => {
  const { program, oraganization, description, result } = info || {};

  return (
    <div className="education-item group z-0  ml-1 pl-6 border-l-[5px] border-[#1b1b11] relative before:content-['']  before:absolute  before:h-5 before:w-5 before:border-[5px] before:border-[#1b1b11] before:bg-background2 before:hover:bg-[#009e66] before:z-[1] before:left-0 before:rounded-full before:-translate-x-[60%]  before:transition-all before:duration-[400ms] before:mt-11">
      {/*  */}
      <div className="px-10 pb-10 pt-11 basis-1/2 text-lightn font-poppins bg-background1 group-hover:bg-none group-hover:bg-[#191b1e] shadow-shadow1 transition-all duration-[400ms] before:content-[''] before:absolute before:left-0 before:h-[6px] before:w-[32px] -z-10 before:mt-2 before:bg-[#1b1b11]">
        <div className="inner-container">
          <div className="heading flex justify-between items-center mb-10">
            <div className="mb-4">
              <h6 className="title capitalize group-hover:text-secondary transition-all duration-[400ms] text-2xl font-medium mb-2">
                {program}
              </h6>
              <span className="text-[#7c838e] capitalize text-sm">
                {oraganization}
              </span>
            </div>
            <div className="">
              <span className="text-primary font-semibold text-sm block bg-background1 shadow-shadow1 group-hover:shadow-none hover:shadow-none rounded-lg p-3 transition-all duration-[400ms]">
                {result}
              </span>
            </div>
          </div>

          <div className="description text-lg text-body transition-all duration-[400ms] group-hover:text-lightn">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
