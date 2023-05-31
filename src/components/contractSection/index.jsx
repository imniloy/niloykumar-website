import React from "react";
import { contractSection } from "../../data";
import InformationSidebar from "./InformationSidebar";
import FormSidebar from "./FormSidebar";

const ContractSection = () => {
  const {sectionSubtitle, sectionHeadtitle} = contractSection || {};
  return (
    <section className="new-section">
      <>
        <p className="section-subtitle">{sectionSubtitle}</p>
        <h2 className="section-title">{sectionHeadtitle}</h2>
      </>
      <div className="flex items-center mt-[50px] justify-between h-fit">
        <InformationSidebar />
        <FormSidebar />
      </div>
    </section>
  );
};

export default ContractSection;
