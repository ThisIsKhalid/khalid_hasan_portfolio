import React from 'react';
import About from './components/About';
import ContactMe from './components/ContactMe';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      {/* <Skills></Skills> */}
      <ContactMe></ContactMe>
    </div>
  );
};

export default App;
