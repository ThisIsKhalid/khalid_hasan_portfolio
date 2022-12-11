import React from "react";
import { FaAngleUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Scroll.css";

const ScroolToTop = () => {
  window.addEventListener("scroll", function () {
    const scrollUP = document.querySelector(".scrollup");
    if (this.scrollY >= 160) {
      scrollUP.classList.add("showScroll");
    } else {
      scrollUP.classList.remove("showScroll");
    }
  });
  return (
    <Link
      to="/"
      className="fixed scrollup lg:right-10 right-3 bottom-5  z-10 bg-slate px-2 py-2 rounded-md opacity-80"
    >
      <FaAngleUp className="text-darkNavy"></FaAngleUp>
    </Link>
  );
};

export default ScroolToTop;
