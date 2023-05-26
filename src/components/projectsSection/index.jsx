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

      <div className="mt-[50px] grid grid-rows-3 sm:grid-rows-2 xl:grid-rows-1 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mx-2 500px:mx-4 sm:mx-8 lg:mx-0">
        {allProjects.map((project, index) => (
          <Project key={`${project?.title + index}`} project={project} />
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
