import React, { useState } from "react";
import { FaBars, FaSignInAlt } from "react-icons/fa";
import img from "../../Assets/k.png";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (this.scrollY >= 80) {
      navbar.classList.add("scroll-navbar");
    } else {
      navbar.classList.remove("scroll-navbar");
    }
  });

  const menuList = (
    <>
      <li className="hover:line-through">
        <a href="#">Home</a>
      </li>
      <li className="hover:line-through">
        <a href="#about">About</a>
      </li>
      <li className="hover:line-through">
        <a href="#skills">Skill</a>
      </li>
      <li className="hover:line-through">
        <a href="#projects">Projects</a>
      </li>
      <li className="hover:line-through">
        <a href="#contact">Contact</a>
      </li>
    </>
  );

  return (
    <section className="fixed top-0 z-50 w-full navbar">
      <div className=" px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="flex items-center justify-between">
          <a
            href="#"
          >
            <img className="hover:animate-spin h-12 w-12" src={img} alt="" />
          </a>
          <ul className="items-center hidden space-x-8 lg:flex font-mono text-lightSlate text-lg">
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
    </section>
  );
};

export default Navbar;
