import React from "react";
import HeroSection from "../components/heroSection";
import NavBar from "../components/nav";
import AboutMe from "../components/aboutSection";
import Resume from "../components/resume";
import AllProjects from "../components/projectsSection";

const OverViewPage = () => {
  return (
    <main className="bg-background2 z-0 relative">
      <div className="min-w-full">
        <NavBar />
        <div className="lg:mx-12 xl:max-w-[1200px] 2xl:max-w-[1300px] xl:mx-20 2xl:mx-auto">
          <HeroSection />
          <AboutMe />
          <Resume />
          <AllProjects />
          {/* <div className="fixed inset-0 h-full w-full bg-red-600 z-[1000000000] overflow-y-hidden"></div> */}
        </div>
      </div>
    </main>
  );
};

export default OverViewPage;
