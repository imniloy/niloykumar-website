import React from "react";
import { Typewriter } from "react-simple-typewriter";
import HeroParticleEffect from "./ParticleEffect";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="content-section">
        {/*info container */}
        <div className="info-section order-2 lg:order-1 flex flex-col justify-center mt-0 text-secondary font-montserrat max-w-3xl px-4">
          <span className="subtitle block uppercase text-sm tracking-[3px] mb-4 500px:mb-5">
            WELCOME TO MY WORLD
          </span>
          {/* name and description */}
          <div className="text-white">
            <h1 className="title font-bold text-3xl 500px:text-4xl sm:text-[40px] 1100px:text-5xl 2xl:text-6xl !leading-tight mb-5">
              Hi, I’m <span className="text-primary">Niloy Kumar</span>
              <span className="block">
                a
                <Typewriter
                  words={[" Designer", " Developer", "  Programmer"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={90}
                  deleteSpeed={8}
                  delaySpeed={1000}
                />
              </span>
            </h1>

            <p className="lg:pr-4 text-left font-poppins text-base leading-[30px] text-lightn">
              I'm a{" "}
              <span className="capitalize  font-semibold ">
                Software Engineer
              </span>{" "}
              based in{" "}
              <span className="uppercase font-semibold">Bangladesh</span>. I
              focused on crafting user friendly experiences, I am passionate
              about building excellent software that improves the lives of
              people all over the world.
            </p>
          </div>
          {/* buttons */}
          <div className="flex justify-between 500px:block  mt-6 sm:mt-8 500px:space-x-6">
            <button className="btn-type-1 group">
              <span className="group-hover:text-transparent group-hover:bg-gradient-to-tr group-hover:from-[#009e66] group-hover:to-[#01e998] group-hover:bg-clip-text">
                View Works
              </span>
            </button>
            <button className="btn-type-1 group">
              <span className="group-hover:text-transparent group-hover:bg-gradient-to-tr group-hover:from-[#009e66] group-hover:to-[#01e998] group-hover:bg-clip-text">
                Contact Me
              </span>
            </button>
          </div>
        </div>
        {/* profile Image container */}
        <div className="500px:px-4 order-1 lg:order-2">
          <div className="animate-hero-animated-bg relative rounded-full overflow-hidden h-[320px] w-[320px] 500px:h-[425px] 500px:w-[425px] mx-auto md:h-[500px] md:w-[500px] lg:h-[400px] lg:w-[400px] xl:h-[450px] xl:w-[450px] 2xl:h-[500px] 2xl:w-[500px] flex justify-center items-center">
            <div className="h-[300px] w-[300px] 500px:h-[400px] 500px:w-[400px] md:h-[476px] md:w-[476px] lg:h-[376px] lg:w-[376px] xl:h-[420px] xl:w-[420px] 2xl:h-[475px] 2xl:w-[475px] overflow-hidden rounded-full">
              <img src="/images/nn.jpeg" className="cover h-full" alt="" />
            </div>
          </div>
        </div>
      </div>
      <HeroParticleEffect />
    </section>
  );
};

export default HeroSection;
