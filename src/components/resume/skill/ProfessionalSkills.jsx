import React, { useEffect, useRef } from "react";
import { resumeSection } from "../../../data/index";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";

const SkillItem = ({ item }) => {
  const { technology, knowledge } = item || {};
  const progressTextRef = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 4500 });
  const isInview = useInView(progressTextRef, { once: true });

  useEffect(() => {
    if (isInview) {
      motionValue.set(knowledge);
    }
  }, [isInview, motionValue, springValue]);

  useEffect(() => {
    springValue.on("change", (latestValue) => {
      if (progressTextRef.current && latestValue.toFixed(0) <= knowledge) {
        progressTextRef.current.textContent = latestValue.toFixed(0);
      }
    });
  }, [springValue, knowledge]);

  // attempt 1
  // useEffect(() => {
  //   if (progressTextRef.current != null) {
  //     animate(0, Number(knowledge), {
  //       duration: 2,
  //       onUpdate: (cv) => {
  //         progressTextRef.current.textContent = cv.toFixed(0);
  //       },
  //     });
  //   }
  // }, [knowledge]);

  return (
    <li className="w-full mt-6">
      <div className="flex justify-between items-center">
        <p className="font-montserrat text-[#c3cedd] text-sm tracking-wide uppercase mb-4">
          {technology}
        </p>
        <div className="font-montserrat text-[#c3cedd] text-sm tracking-wide uppercase mb-4">
          <span ref={progressTextRef} className="">
            {knowledge}
          </span>
          <span>%</span>
        </div>
      </div>
      <div className="w-full bg-background2 shadow-shadow3 h-3 rounded-full relative overflow-hidden">
        <motion.div
          initial={{
            width: "0%",
          }}
          animate={{
            width: `${knowledge}%`,
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
          className=" h-full bg-green-400 rounded-full"
        />
      </div>
    </li>
  );
};

const ProfessionalSkills = () => {
  const { professionalSkills } = resumeSection || {};
  const firstHalf = professionalSkills.slice(0, 5);
  const secondHalf = professionalSkills.slice(5, 10);

  return (
    <motion.div
      initial={{ opacity: "0%" }}
      animate={{ opacity: "100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="ProfessionalSkills mx-2 500px:mx-4 sm:mx-8 lg:mx-2 mt-10 sm:mt-14 flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 gap-x-20 text-white items-center"
    >
      <ul className="w-[100%] sm:basis-1/2">
        {firstHalf.map((item, index) => (
          <SkillItem item={item} key={`${item.technology + index}`} />
        ))}
      </ul>
      <ul className="w-[100%] sm:basis-1/2">
        {secondHalf.map((item, index) => (
          <SkillItem item={item} key={`${item.technology + index}`} />
        ))}
      </ul>{" "}
    </motion.div>
  );
};

export default ProfessionalSkills;
