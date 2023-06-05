import React, { useState } from "react";
import { resumeSection } from "../../data/index";
import EducaionList from "./education/EducaionList";
import ProfessionalSkills from "./skill/ProfessionalSkills";
import AchievementsList from "./achievement/AchievementList";

const Resume = () => {
  const { sectionSubtitle, sectionHeadtitle, tabNavigation } =
    resumeSection || {};
  const [seletedNav, setSeletedNav] = useState(tabNavigation[0]);

  return (
    <section className="new-section">
      {/* section title && Tag line */}
      <>
        <p className="section-subtitle">{sectionSubtitle}</p>
        <h2 className="section-title">{sectionHeadtitle}</h2>
      </>

      {/* options/tablist to show Details */}
      <ul className="flex flex-col sm:flex-row justify-between items-center mt-[50px] bg-background1 shadow-shadow1 rounded-lg mx-2 sm:mx-8 lg:mx-4 xl:mx-auto">
        {tabNavigation.map((item, index) => (
          <li
            key={`${item + index}`}
            className={`tab-nav ${
              seletedNav === item
                ? "bg-background1 shadow-shadow1 text-primary"
                : "bg-transparent text-secondary"
            }`}
            onClick={(event) => setSeletedNav(item)}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* items to show based on user selected options */}
      {seletedNav === "Education" && <EducaionList />}
      {seletedNav === "Professional Skills" && <ProfessionalSkills />}
      {seletedNav === "Achievements" && <AchievementsList />}
    </section>
  );
};

export default Resume;
