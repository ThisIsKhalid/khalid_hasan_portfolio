import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";

const Project = ({ project }) => {
  const {id, name, live, description, img} = project;
  return (
    <section className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <div
        className="item-container m-0 bg-lightNavy p-4 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <div className="pro-img">
          <img src={img} alt="" />
        </div>
        <div className="my-4">
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="text-xl font-bold text-lightestSlate hover:text-green"
          >
            {name}
          </a>
        </div>
        <div className="my-4">
          <p className="text-slate">{`${description}`.slice(0, 100)}...</p>
        </div>
        <div className="flex justify-between items-end">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green text-lg font-mono"
          >
            <p className="hover:text-pink">Live</p>
          </a>
          <Link to={`/projects/${id}`}>
            <button className="text-green border border-green hover:bg-lightNavy hover:text-pink hover:border-pink rounded px-1 py-1">
              See More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Project;
