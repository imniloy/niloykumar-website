import React from "react";
import Education from "./Education";
import { resumeSection } from "../../../data/index";
const EducaionList = () => {
  const { educationRelatedInfo } = resumeSection || {};

  return (
    <div className="mt-14 w-full flex justify-between items-center gap-x-10">
      {educationRelatedInfo?.map((info, index) => (
        <Education key={`${info?.program + index}`} info={info} />
      ))}
    </div>
  );
};

export default EducaionList;
