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
      <div className="flex items-center justify-between">
        <InformationSidebar />
        <FormSidebar />
      </div>
    </section>
  );
};

export default ContractSection;
