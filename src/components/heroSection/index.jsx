import React from "react";
import { Typewriter } from "react-simple-typewriter";
import HeroParticleEffect from "./ParticleEffect";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="py-24 h-full z-10 relative">
        <div className="content-section gap-20">
          {/*info container */}
          <div className="info-section text-secondary font-montserrat max-w-3xl px-4">
            <span className="subtitle block uppercase text-sm tracking-[3px] mb-5">
              WELCOME TO MY WORLD
            </span>
            {/* name and description */}
            <div className="text-white">
              <h1 className="title font-bold text-6xl leading-tight mb-5">
                Hi, I’m <span className="text-primary">Niloy Kumar</span>
                <span className="block">
                  a
                  {/* <Typewriter
                    words={[" Designer", " Developer", "  Programmer"]}
                    loop={false}
                    cursor
                    cursorStyle="|"
                    typeSpeed={90}
                    deleteSpeed={8}
                    delaySpeed={1000}
                  /> */}
                </span>
              </h1>

              <p className="pr-8 text-base leading-[30px] text-lightn">
                I'm a{" "}
                <span className="capitalize font-semibold ">
                  Software Engineer
                </span>{" "}
                based in{" "}
                <span className="uppercase font-semibold">Bangladesh</span>. I
                focused on crafting user‑friendly experiences, I am passionate
                about building excellent software that improves the lives of
                people all over the world.
              </p>
            </div>
            {/* buttons */}
            <div className="my-8 space-x-6">
              <button className="hero-btn group">
                <span className="group-hover:text-transparent group-hover:bg-gradient-to-tr group-hover:from-[#009e66] group-hover:to-[#01e998] group-hover:bg-clip-text">
                  View Works
                </span>
              </button>
              <button className="hero-btn group">
                <span className="group-hover:text-transparent group-hover:bg-gradient-to-tr group-hover:from-[#009e66] group-hover:to-[#01e998] group-hover:bg-clip-text">
                  Contact Me
                </span>
              </button>
            </div>
          </div>
          {/* profile Image container */}
          <div className="px-4">
            <div className="animate-hero-animated-bg relative rounded-full overflow-hidden h-[460px] w-[460px] flex justify-center items-center">
              <div className="h-[95%] w-[95%] overflow-hidden rounded-full">
                <img src="/images/Hero-Profile2.png" className="cover" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <HeroParticleEffect /> */}
    </section>
  );
};

export default HeroSection;
