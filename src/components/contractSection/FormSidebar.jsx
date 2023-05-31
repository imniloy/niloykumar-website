import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const FormSidebar = () => {
  return (
    <div className=" basis-[50%] xl:basis-[60%] bg-background1 shadow-shadow1 rounded-2xl">
      <form className="shadow-shadow1 px-4 py-8">
        <div className="flex items-center justify-between w-full">
          <div className="basis-1/2 px-4 py-3">
            <label
              htmlFor="contract-first-name"
              className="uppercase text-[#a0a8b3] font-montserrat font-medium tracking-[1px] text-xs block mb-3"
            >
              Your Name
            </label>
            <input
              name="contract-first-name"
              id="contract-first-name"
              className="w-full outline-none border-2 border-solid border-[#191b1e] rounded-md bg-[#191b1e] p-4 text-lightn font-poppins shadow-innerShadow text-sm transition-all duration-300 ease-in-out focus:outline-1 focus:border-[#009e66]"
              type="text"
            />
          </div>
          <div className="basis-1/2 px-4 py-3">
            <label
              htmlFor="contract-phone-number"
              className="uppercase text-[#a0a8b3] font-montserrat font-medium tracking-[1px] text-xs block mb-3"
            >
              Phone Number
            </label>
            <input
              name="contract-phone-number"
              id="contract-phone-number"
              className="w-full outline-none border-2 border-solid border-[#191b1e] rounded-md bg-[#191b1e] p-4 text-lightn font-poppins shadow-innerShadow text-sm focus:outline-1 focus:border-[#009e66] transition-all duration-300 ease-in-out"
              type="tel"
            />
          </div>
        </div>

        <div className="email px-4 py-3">
          <label
            htmlFor="email-address"
            className="uppercase text-[#a0a8b3] font-montserrat font-medium tracking-[1px] text-xs block mb-3"
          >
            EMAIL
          </label>
          <input
            id="email-address"
            className="w-full outline-none border-2 border-solid border-[#191b1e] rounded-md bg-[#191b1e] p-4 text-lightn font-poppins shadow-innerShadow text-sm focus:outline-1 focus:border-[#009e66] transition-all duration-300 ease-in-out"
            name="email-address"
            type="email"
          />
        </div>
        <div className="subject px-4 py-3">
          <label
            htmlFor="subject"
            className="uppercase text-[#a0a8b3] font-montserrat font-medium tracking-[1px] text-xs block mb-3"
          >
            SUBJECT
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            className="w-full outline-none border-2 border-solid border-[#191b1e] rounded-md bg-[#191b1e] p-4 text-lightn font-poppins shadow-innerShadow text-sm focus:outline-1 focus:border-[#009e66] transition-all duration-300 ease-in-out"
          />
        </div>

        <div className="message px-4 py-3">
          <label
            htmlFor="message"
            className="uppercase text-[#a0a8b3] font-montserrat font-medium tracking-[1px] text-xs block mb-3"
          >
            YOUR MESSAGE
          </label>
          <textarea
            id="message"
            name="message"
            type="text"
            rows="8"
            className="w-full resize-none outline-none border-2 border-solid border-[#191b1e] rounded-md bg-[#191b1e] p-4 text-lightn font-poppins shadow-innerShadow text-sm focus:outline-1 focus:border-[#009e66] transition-all duration-300 ease-in-out"
          />
        </div>

        <div className="px-4 py-3">
          <button
            className="uppercase w-full rounded-md bg-background1 text-primary space-x-2 p-4 shadow-shadow1 hover:shadow-shadow3 hover:-translate-y-1 transition-all duration-300"
            type="submit"
          >
            <span className="text-sm font-medium font-poppins">
              Send Message
            </span>
            <span>
              <ArrowRightIcon className="w-5 h-5 inline-block" />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSidebar;
