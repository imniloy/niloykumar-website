import React, { useState } from "react";
import { resumeSection } from "../../data/index";
import EducaionList from "./education/EducaionList";

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
      <ul className="w-full flex justify-between items-center mt-11 bg-background1 shadow-shadow1 rounded-lg">
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
      <EducaionList />
    </section>
  );
};

export default Resume;
