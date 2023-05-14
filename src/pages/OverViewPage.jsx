import React from "react";
import HeroSection from "../components/heroSection";
import NavBar from "../components/nav";

const OverViewPage = () => {
  return (
    <main className="bg-background2 z-0 relative">
      <div className="min-w-full">
        <NavBar />
        <div className="2xl:max-w-[1400px] mx-auto">
          <HeroSection />
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
