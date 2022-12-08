import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const LeftSide = () => {
    return (
      <ul className="text-green fixed bottom-0 left-[3%] flex flex-col items-center gap-4 lg:text-2xl text-lg">
        <li className="transition duration-500 ease-in-out hover:-translate-y-2 ">
          <FaGithub />
        </li>
        <li className="transition duration-500 ease-in-out hover:-translate-y-2 ">
          <FaLinkedin />
        </li>
        <li className="transition duration-500 ease-in-out hover:-translate-y-2 ">
          <FaFacebook />
        </li>
        <li className="w-[2px] lg:h-20 h-16 bg-green"></li>
      </ul>
    );
};

export default LeftSide;