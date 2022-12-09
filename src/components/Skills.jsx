import React from "react";
import bootstrapIcon from "../Assets/icons/bootstrap.png";
import cssIcon from "../Assets/icons/css-3.png";
import htmlIcon from "../Assets/icons/html-5.png";
import jsIcon from "../Assets/icons/js.png";
import mongodbIcon from "../Assets/icons/mongodb.png";
import nextjsIcon from "../Assets/icons/nextjs.png";
import nodeIcon from "../Assets/icons/nodejs.png";
import reactIcon from "../Assets/icons/reactjs.png";
import tailwindIcon from "../Assets/icons/tailwind.png";

const Skills = () => {
  return (
    <section className="container mx-auto lg:px-0 px-5 my-24" id="skills">
      <div className="flex gap-10 mb-10">
        <h2 className="lg:text-2xl text-xl font-medium text-white">Skills</h2>
        <span className="w-40 h-px relative top-3  bg-slate"></span>
      </div>

      <div className="flex flex-row flex-wrap gap-5 justify-center">
        <img className="md:h-14 h-10 md:w-14 w-10" src={htmlIcon} alt="" />
        <img className="md:h-14 h-10 md:w-14 w-10" src={cssIcon} alt="" />
        <img className="md:h-14 h-10 md:w-14 w-10" src={tailwindIcon} alt="" />
        <img className="md:h-14 h-10 md:w-14 w-10" src={bootstrapIcon} alt="" />
        <img className="md:h-14 h-10 md:w-14 w-10" src={jsIcon} alt="" />
        <img className="md:h-14 h-10 md:w-14 w-10" src={reactIcon} alt="" />
        <img className="md:h-14 h-10 md:w-14 w-10" src={nodeIcon} alt="" />
        <img className="md:h-14 h-10 md:w-14 w-10" src={mongodbIcon} alt="" />
        <img className="md:h-14 h-10 md:w-14 w-10" src={nextjsIcon} alt="" />
      </div>
    </section>
  );
};

export default Skills;
