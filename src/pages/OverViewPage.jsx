import React from "react";
import HeroSection from "../components/heroSection";
import NavBar from "../components/nav";
import AboutMe from "../components/aboutSection";

const OverViewPage = () => {
  return (
    <main className="bg-background2 z-0 relative">
      <div className="min-w-full">
        <NavBar />
        <div className="lg:mx-12 xl:max-w-[1200px] 2xl:max-w-[1300px] xl:mx-20 2xl:mx-auto">
          <HeroSection />
          <AboutMe />
          <div className="bg-red-600 h-52 w-52"></div>
          <div className="bg-red-600 h-52 w-52"></div>
          <div className="bg-red-600 h-52 w-52"></div>
          <div className="bg-red-600 h-52 w-52"></div>
          <div className="bg-red-600 h-52 w-52"></div>
        </div>
      </div>
    </main>
  );
};

export default OverViewPage;
