import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {

    const {id} = useParams();

    // const [project, setProject] = useState({});

    // useEffect(() => {
    //     fetch(`project.json/${id}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    // }, [id])

    return (
      <section className="container lg:max-w-5xl mx-auto lg:px-0 px-5 py-24">
        <div className=' h-96 bg-lightNavy shadow-md shadow-lightestNavy rounded-md'>
          <h1 className="text-blue">thsi is project details </h1>
        </div>
      </section>
    );
};

export default ProjectDetails;