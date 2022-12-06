import React from 'react';

const Home = () => {
    return (
      <section className=" flex justify-center my-10 px-5">
        <div>
          <h4 className="text-lg text-green font-mono">Hi, my name is</h4>
          <h1 className="lg:text-7xl sm:text-6xl text-5xl font-bold text-lightestSlate my-4">
            Khalid Hasan
          </h1>
          <h2 className="lg:text-6xl sm:text-5xl text-4xl text-slate font-bold">
            I build things for the web.
          </h2>
          <button className="text-green border border-green px-4 py-3 mt-5">
            Download Resume
          </button>
        </div>
      </section>
    );
};

export default Home;