import React from 'react';
import Project from './Project';

const Projects = () => {
    return (
      <section id="projects" className="container mx-auto lg:px-0 px-5 my-24">
        <div className="flex gap-10 mb-10">
          <h2 className="lg:text-2xl text-xl font-medium text-white">
            Projects
          </h2>
          <span className="w-40 h-px relative top-3  bg-slate"></span>
        </div>

        <div>
            <Project></Project>
        </div>
      </section>
    );
};

export default Projects;