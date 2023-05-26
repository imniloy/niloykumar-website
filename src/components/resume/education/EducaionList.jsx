import React from "react";
import Education from "./Education";
import { resumeSection } from "../../../data/index";

const EducaionList = () => {
  const { educationRelatedInfo } = resumeSection || {};

  return (
    <div className="mt-10 sm:mt-14 mx-2 500px:mx-4 sm:mx-8 lg:mx-2 flex flex-col space-y-10 lg:space-y-0 lg:flex-row justify-between items-center gap-x-10">
      {educationRelatedInfo?.map((info, index) => (
        <Education key={`${info?.program + index}`} info={info} />
      ))}
    </div>
  );
};

export default EducaionList;
