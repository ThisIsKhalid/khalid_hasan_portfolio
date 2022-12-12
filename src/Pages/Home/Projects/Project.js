import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";

const Project = ({ project }) => {
  const {id, name, live, client, server, description, img, tech} = project;
  return (
    <div className="item-container m-0 bg-lightNavy p-4 rounded-md">
      <div className="pro-img">
        <img src={img} alt="" />
      </div>
      <div className="my-4">
        <a
          href="https://news-wall.netlify.app/"
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
        <div className="flex items-center gap-3 text-green font-medium font-mono">
          <p className="hover:text-pink">Live</p>
          <p className="hover:text-pink">Client</p>
          <p className="hover:text-pink">Server</p>
        </div>
        <Link to={`/projects/${project}`}>
          <button className="text-green border border-green hover:bg-lightNavy hover:text-pink hover:border-pink rounded px-1 py-1">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Project;
