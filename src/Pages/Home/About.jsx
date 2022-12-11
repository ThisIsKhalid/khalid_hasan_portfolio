import React from "react";
import khalid from "../../Assets/khalid.png";

const About = () => {
  return (
    <section className="container lg:max-w-5xl mx-auto lg:px-0 px-5 py-24">
      <div className="flex gap-10 mb-10">
        <h2 className="lg:text-2xl text-xl font-medium text-white">About Me</h2>
        <span className="w-40 h-px relative top-3  bg-slate"></span>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="md:w-1/2">
          <h1 className="text-4xl text-slate font-bold mb-5">
            Front-End Developer
          </h1>
          <p className="text-lightestSlate text-lg">
            Hello! This is Khalid Hasan form Bangladesh. I have been working
            with ReactJS, NodeJS, and MongoDB for the past six months and I have
            some of the best projects with them. I am very good at HTML, CSS,
            Bootstrap, Tailwind CSS, JavaScript, ReactJS. I am also comfortable
            with NodeJS and MongoDB. I am always energetic and eager to learn
            new skills.
          </p>
        </div>
        <div className=" md:w-1/2">
          <div className="flex justify-center">
            <div className="border-2 border-blue w-2/3 rounded">
              <img
                className="w-full rounded -translate-y-4 -translate-x-4"
                src={khalid}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
