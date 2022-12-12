import React from "react";
import ScroolToTop from "../../components/ScrollToTop/ScrollToTop";
import LeftSide from "../../components/Sidebar/LeftSide";
import Blogs from "../Blogs/Blogs";
import About from "./About";
import ContactMe from "./ContactMe";
import HomeBanner from "./HomeBanner";
import Projects from "./Projects/Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <aside className="hidden md:block">
        <LeftSide></LeftSide>
      </aside>
      <main className="max-w-5xl mx-auto">
        <HomeBanner></HomeBanner>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Blogs></Blogs>
        <ContactMe></ContactMe>
      </main>
      <ScroolToTop></ScroolToTop>
    </>
  );
};

export default Home;
