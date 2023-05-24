import React from "react";
import { allProjectsSection } from "../../data/index";
import Project from "./Project";

const AllProjects = () => {
  const { sectionSubtitle, sectionHeadtitle, allProjects } =
    allProjectsSection || {};
  return (
    <section className="new-section !bg-background2">
      {/* section title && Tag line */}
      <>
        <p className="section-subtitle">{sectionSubtitle}</p>
        <h2 className="section-title">{sectionHeadtitle}</h2>
      </>

      <div className="mt-[50px] flex flex-col space-y-10 lg:space-y-0 lg:flex-row justify-between items-center">
        {allProjects.map((project, index) => (
          <Project key={`${project?.title + index}`} project={project} />
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
