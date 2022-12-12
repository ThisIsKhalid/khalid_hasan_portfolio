import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const LeftSide = () => {
    return (
      <ul
        className="text-slate fixed bottom-0 left-[3%] flex flex-col items-center gap-4 lg:text-2xl text-lg"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <li className="transition duration-500 ease-in-out hover:-translate-y-2 ">
          <a
            href="https://github.com/ThisIsKhalid"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li className="transition duration-500 ease-in-out hover:-translate-y-2 ">
          <a
            href="https://www.linkedin.com/in/khalidhasan97/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="transition duration-500 ease-in-out hover:-translate-y-2">
          <a
            href="https://web.facebook.com/profile.php?id=100072152402852"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
        </li>
        <li className="w-[2px] lg:h-20 h-16 bg-slate"></li>
      </ul>
    );
};

export default LeftSide;