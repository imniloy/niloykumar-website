import React from "react";
import { resumeSection } from "../../../data/index";
import Achievement from "./Achievement";

const AchievementList = () => {
  const { achievements } = resumeSection || {};
  console.log(resumeSection);

  return (
    <div className="mt-10 sm:mt-14 mx-2 500px:mx-4  sm:mx-8 lg:mx-2 flex justify-between items-center gap-x-10">
      {achievements?.map((info, index) => (
        <Achievement key={`${info?.achievement + index}`} info={info} />
      ))}
    </div>
  );
};

export default AchievementList;
