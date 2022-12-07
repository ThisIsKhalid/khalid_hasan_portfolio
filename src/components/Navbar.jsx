import React, { useState } from 'react';
import { FaBars, FaSignInAlt } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuList = (
      <>
        <li className="hover:line-through transition ease-in-out delay-75 hover:-translate-y-3 duration-300">
          <a href="#about">About</a>
        </li>
        <li className="hover:line-through transition ease-in-out delay-75 hover:-translate-y-3 duration-300">
          <a href="#skill">Skill</a>
        </li>
        <li className="hover:line-through transition ease-in-out delay-75 hover:-translate-y-3 duration-300">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:line-through transition ease-in-out delay-75 hover:-translate-y-3 duration-300">
          <a href="#contact" id='contact'>Contact</a>
        </li>
      </>
    );

    return (
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="relative flex items-center justify-between">
          <a
            href="#home"
            className="text-2xl hover:line-through font-mono font-bold text-lightSlate border px-4 py-1"
          >
            kh
          </a>
          <ul className="items-center hidden space-x-8 lg:flex font-mono text-lightSlate">
            {menuList}
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1"
              onClick={() => setIsMenuOpen(true)}
            >
              <FaBars className="text-lightSlate w-5 h-5 text-gray-800" />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 right-0 w-1/3 ">
                <div className="p-5 bg-lightNavy border border-darkSlate rounded-md">
                  <div className="flex items-center justify-between mb-4">
                    <div></div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <FaSignInAlt className="text-lightSlate w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul
                      className="space-y-4 flex flex-col items-end font-mono text-lightSlate"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {menuList}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
};

export default Navbar;