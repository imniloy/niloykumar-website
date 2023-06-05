import React from "react";

const Footer = () => {
  return (
    <section className="new-section ">
      <div className="logo overflow-hidden w-20 h-20 mx-auto">
        <img src="/images/logo.png" className="cover" alt="logoImage" />
      </div>
      <span className="w-fit block mt-8 text-lightn mx-auto font-poppins text-center">
        &copy; {new Date().getFullYear().toString()}. All rights reserved by
        Niloy Kumar.
      </span>
    </section>
  );
};

export default Footer;
