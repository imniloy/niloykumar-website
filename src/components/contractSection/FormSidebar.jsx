import React from "react";

const FormSidebar = () => {
  return (
    <div className="basis-2/3">
      <form method="post">
        <div className="">
          <div className="">
            <label htmlFor="contract-first-name"></label>
            <input name="contract-first-name" type="text" />
          </div>
          <div className="">
            <label htmlFor="contract-last-name"></label>
            <input name="contract-last-name" type="text" />
          </div>
        </div>

        <div className="email">
          <label htmlFor=""></label>
          <input type="text" />
        </div>
        <div className="subject">
          <label htmlFor=""></label>
          <input type="text" />
        </div>

        <div className="message">
          <label htmlFor=""></label>
          <textarea type="text" />
        </div>

        <button className="uppercase" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default FormSidebar;
