import React from 'react';
import htmlIcon from '../Assets/icons/html-5.png'
import cssIcon from '../Assets/icons/css-3.png'
import tailwindIcon from '../Assets/icons/tailwind.png'
import bootstrapIcon from '../Assets/icons/bootstrap.png'
import jsIcon from '../Assets/icons/js.png'
import reactIcon from '../Assets/icons/reactjs.png'
import nodeIcon from '../Assets/icons/nodejs.png'
import mongodbIcon from '../Assets/icons/mongodb.png'
import nextjsIcon from '../Assets/icons/nextjs.png'

const Skills = () => {
    return (
      <section id='skills' className="container mx-auto lg:px-0 px-5 my-24">
        <div className="flex gap-10 mb-10">
          <h2 className="lg:text-2xl text-xl font-medium text-white">Skills</h2>
          <span className="border border-lightestSlate rotate-90"></span>
        </div>

        <div className='mb-4'>
          <h4 className="text-center text-xl font-medium text-green font-mono mb-4">
            Experties
          </h4>
          <div className="flex flex-row flex-wrap gap-5 justify-center">
            <img className="md:h-14 h-10 md:w-14 w-10" src={htmlIcon} alt="" />
            <img className="md:h-14 h-10 md:w-14 w-10" src={cssIcon} alt="" />
            <img className="md:h-14 h-10 md:w-14 w-10" src={tailwindIcon} alt="" />
            <img className="md:h-14 h-10 md:w-14 w-10" src={bootstrapIcon} alt="" />
            <img className="md:h-14 h-10 md:w-14 w-10" src={jsIcon} alt="" />
            <img className="md:h-14 h-10 md:w-14 w-10" src={reactIcon} alt="" />
          </div>
        </div>

        <div>
          <h4 className="text-center text-xl font-medium text-green font-mono mb-4">
            Comfortable
          </h4>
          <div className="flex flex-row gap-5 justify-center">
            <img className="md:h-14 h-10 md:w-14 w-10" src={nodeIcon} alt="" />
            <img className="md:h-14 h-10 md:w-14 w-10" src={mongodbIcon} alt="" />
            <img className="md:h-14 h-10 md:w-14 w-10" src={nextjsIcon} alt="" />
          </div>
        </div>
      </section>
    );
};

export default Skills;