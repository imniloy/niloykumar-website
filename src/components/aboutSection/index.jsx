import React, { useEffect, useState } from "react";

const AboutMe = () => {
  const [age, setAge] = useState(undefined);

  useEffect(() => {
    var today = new Date();
    // Convert the date of birth to a Date object.
    var dateOfBirth = new Date("2003-07-24");

    var years = today.getFullYear() - dateOfBirth.getFullYear();
    var months = today.getMonth() - dateOfBirth.getMonth();
    var days = today.getDate() - dateOfBirth.getDate();
    if (years > 0 && months > 0 && days > 0) {
      setAge(years);
    } else {
      let runningYear = years - 1;
      setAge(runningYear);
    }
  }, []);

  const totalYear = new Date().getFullYear();
  return (
    <section className="new-section">
      <div className="aboutMe-title">
        <p className="section-subtitle">Know Me More</p>
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="aboutMe-info-container">
        <div className="aboutMe-profile-img">
          <img
            src="/images/nn.jpeg"
            className="w-full h-full 500px:w-[500px] sm:w-[600px] lg:w-full lg:h-[570px] 1100px:h-[535px] xl:h-[580px] 2xl:h-[550px]"
            alt=""
          />
        </div>
        <div className="aboutMe-info">
          <div className="border-b border-[#59595a]">
            <h3 className="text-[32px] lg:text-4xl font-bold text-white lg:mb-1 1100px:mb-2 xl:mb-[10px] font-montserrat">
              I am Niloy Kumar
            </h3>
            <p className="py-2 500px:py-4 text-lightn">
              A <span className="text-primary">Software Engineer</span> Based In{" "}
              <span className="text-primary">Bangladesh</span>. I design and
              develop applications for customers specializing creating stylish,
              modern websites, mobile apps. I enjoy developing simple, clean and
              slick websites that provide real value to the end user. Excellent
              reputation for resolving problems and improving customer
              satisfaction.I can work and manage from development to test to
              deployment & my another expertise is, I write very clean and
              readable code.
            </p>
          </div>
          <div className="personal-info">
            <h6 className="uppercase font-bold text-xl font-montserrat">
              Personal Info
            </h6>
            <ul className="w-full text-lightn">
              <li className="personal-info-item">
                <p>
                  <span className="text-white">Name :</span> Niloy Kumar
                </p>
              </li>
              <li className="personal-info-item">
                <p>
                  <span className="text-white">Address :</span> Faridpur,
                  Bagladesh.
                </p>
              </li>
              <li className="personal-info-item">
                <p>
                  <span className="text-white">Age :</span> {age}
                </p>
              </li>
              <li className="personal-info-item text-white">
                <p>
                  <span className="text-white">Phone :</span> +880137065475
                </p>
              </li>
              <li className="personal-info-item">
                <p>
                  <span className="text-white">Nationality : </span> Bangladeshi
                </p>
              </li>
              <li className="personal-info-item">
                <p>
                  <span className="text-white">Email :</span> imniloy8@gmail.com
                </p>
              </li>
              <li className="personal-info-item">
                <p>
                  <span className="text-white">Freelance :</span> Available
                </p>
              </li>
              <li className="personal-info-item">
                <p>
                  <span className="text-white">Languages :</span> Bangla,
                  English
                </p>
              </li>
            </ul>
            {/* resume link */}
            <button className="btn-type-1">
              <a
                href="#"
                className="group-hover:text-transparent group-hover:bg-gradient-to-tr group-hover:from-[#009e66] group-hover:to-[#01e998] group-hover:bg-clip-text"
              >
                Checkout Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
