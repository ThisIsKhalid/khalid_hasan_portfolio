import React from "react";
import { FaAngleUp } from "react-icons/fa";
import './Scroll.css'

const ScroolToTop = () => {
  window.addEventListener("scroll", function () {
    const scrollUP = document.querySelector(".scrollup");
    if (this.scrollY >= 560) {
      scrollUP.classList.add("show-scroll");
    } else {
      scrollUP.classList.remove("show-scroll");
    }
  });
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      href="#"
      className="fixed lg:right-10 right-3 bottom-[5%] scrollup z-10 bg-slate px-2 py-2 rounded-md opacity-80 "
    >
      <FaAngleUp className="text-darkNavy"></FaAngleUp>
    </a>
  );
};

export default ScroolToTop;
