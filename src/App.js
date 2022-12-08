import React from 'react';
import About from './components/About';
import ContactMe from './components/ContactMe';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import ScroolToTop from './components/ScrollToTop/ScrollToTop';
import Skills from './components/Skills';

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <main>
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
