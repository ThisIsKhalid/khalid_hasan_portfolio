import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import "./Scroll.css";

const ScroolToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="top-to-btm">
      {" "}
      {showTopBtn && (
        <FaAngleUp className="h-9 w-9 rounded-full bg-darkSlate text-navy hover:bg-lightestNavy hover:text-blue fixed right-[3%] bottom-[5%] hover:animate-none icon-style" onClick={goToTop} />
      )}{" "}
    </div>
  );
};

export default ScroolToTop;
