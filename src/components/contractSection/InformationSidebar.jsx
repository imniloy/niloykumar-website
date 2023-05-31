import React from "react";
import { contractSection } from "../../data";
import { Link } from "react-router-dom";

const InformationSidebar = () => {
  const {
    contractImage,
    profileName,
    message,
    phoneNumber,
    email,
    jobDescription,
    socalMedia,
  } = contractSection || {};
  return (
    <div className="contact-about-area xl:basis-[35%] p-[30px] !bg-[#212428] text-lightn shadow-shadow1 rounded-2xl">
      <div className="image-container rounded-2xl w-full mb-8 overflow-hidden">
        <img
          className="hover:scale-110 transition-all duration-500 min-h-[290px]"
          src={contractImage}
          alt="contractImage"
        />
      </div>

      <div className="text-area">
        <div className="title-area mb-4">
          <h1 className="text-3xl text-lightn mb-2 font-bold ">
            {profileName}
          </h1>
          <span className="text-lg text-body font-poppins">
            {jobDescription}
          </span>
        </div>

        <div className="mb-7">
          <p className="text-lg mb-5 text-body font-montserrat">{message}</p>
          <span className="phone block text-body text-lg font-poppins">
            Phone:{" "}
            <Link
              className="text-white hover:text-primary hover:underline transition-all"
              to={`tel:${phoneNumber}`}
            >
              {phoneNumber}
            </Link>
          </span>
          <span
            className="mail block text-body text-lg font-poppins
          "
          >
            Email:{" "}
            <Link
              className="text-white hover:text-primary hover:underline transition-all"
              to={`mailto:${email}`}
            >
              {email}
            </Link>
          </span>
        </div>

        <div className="">
          <span className="uppercase mb-2 text-sm font-poppins font-medium text-body">
            Find With me
          </span>

          <ul className="social-icons mt-6 flex items-center space-x-4">
            {/* facebookIcon */}

            <li className="w-[60px] h-[60px] flex justify-center items-center rounded-xl shadow-shadow1 bg-background1 transition-all duration-[400ms] hover:bg-background2 hover:-translate-y-1 cursor-pointer">
              <Link to={``}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-facebook text-secondary"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
            </li>

            {/* Instagram */}
            <li className="w-[60px] h-[60px] flex justify-center items-center rounded-xl shadow-shadow1 bg-background1 transition-all duration-[400ms] hover:bg-background2 hover:-translate-y-1 cursor-pointer">
              <Link to={``}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-instagram"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
            </li>

            {/* linkedIn */}
            <li className="w-[60px] h-[60px] flex justify-center items-center rounded-xl shadow-shadow1 bg-background1 transition-all duration-[400ms] hover:bg-background2 hover:-translate-y-1 cursor-pointer">
              <Link to={``}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InformationSidebar;
