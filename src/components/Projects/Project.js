import React from 'react';
import img from '../../Assets/chem tutor.png'
import './Project.css'

const Project = () => {
    return (
      <div className="item-container m-0 bg-lightNavy p-7 rounded-md">
        <div className="pro-img">
          <img src={img} alt="" />
        </div>
        <div className="my-7 flex justify-between items-center">
          <a
            href="https://news-wall.netlify.app/"
            target="_blank"
            rel="noreferrer"
            class="text-xl font-bold text-lightestSlate hover:text-green"
          >
            Chem Tutor
          </a>
          <div>Git icon </div>
        </div>
        <div>
          <p class="text-accent text-sm pb-3">
            Here you can see international news. News has been categorized and
            arranged to keep in mind the conv...
          </p>
          <div class="flex flex-wrap gap-4">
            <p class="text-xs font-medium">JavaScript ES-6</p>
            <p class="text-xs font-medium">HTML</p>
            <p class="text-xs font-medium">TailwindCSS</p>
          </div>
        </div>
      </div>
    );
};

export default Project;