import React from "react";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import ScroolToTop from "./components/ScrollToTop/ScrollToTop";
import LeftSide from "./components/Sidebar/LeftSide";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Navbar></Navbar>

      <aside className="hidden md:block">
        <LeftSide></LeftSide>
      </aside>
      
      <main className="max-w-5xl mx-auto">
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <ContactMe></ContactMe>
      </main>
      <ScroolToTop></ScroolToTop>
    </>
  );
};

export default App;
