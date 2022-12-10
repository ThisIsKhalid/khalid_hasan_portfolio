import React, { useEffect, useState } from "react";
import Project from "./Project";

const Projects = () => {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    fetch("project.json")
      .then((res) => res.json())
      .then((data) => {
        setAllProjects(data);
      });
  }, []);
  return (
    <section id="projects" className="container mx-auto lg:px-0 px-5 my-24">
      <div className="flex gap-10 mb-10">
        <h2 className="lg:text-2xl text-xl font-medium text-white">Projects</h2>
        <span className="w-40 h-px relative top-3  bg-slate"></span>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {
          allProjects?.map(project => <Project
           key={project.id}
           project={project}
          ></Project>)
        }
      </div>
    </section>
  );
};

export default Projects;
