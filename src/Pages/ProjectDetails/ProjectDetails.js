import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();

  const [project, setProject] = useState({});
  const {
    name,
    web,
    tab,
    mobile,
    live,
    client,
    server,
    description,
    features,
    tech,
  } = project;

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
      });
  }, [id]);

  console.log(project);

  return (
    <section className="container lg:max-w-5xl mx-auto lg:px-0 px-5 py-24">
      <div className=" bg-lightNavy shadow-md shadow-lightestNavy rounded-md px-5  pt-5">
        <div className="flex flex-wrap lg:justify-between gap-5">
          <div className="lg:w-1/2">
            <img className="rounded" src={web} alt="" />
          </div>

          <img className="h-60 rounded" src={tab} alt="" />

          <img className="h-60 rounded" src={mobile} alt="" />
        </div>
        <div className="mt-6">
          <h2 className="text-green text-2xl font-bold">{name}</h2>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
