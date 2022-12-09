import React from 'react';

const Home = () => {
    return (
      <section id="home" className="container mx-auto lg:px-0 px-5 my-24">
        <div>
          <h4 className="text-lg text-green font-mono">Hi, my name is</h4>
          <h1 className="lg:text-7xl sm:text-6xl text-5xl font-bold text-lightestSlate my-4">
            Khalid Hasan
          </h1>
          <h2 className="lg:text-6xl sm:text-5xl text-4xl text-slate font-bold">
            I build things for the web.
          </h2>
          <p className="text-lg text-lightSlate my-4 lg:w-3/4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
            quisquam deserunt maiores ex, quo quae commodi, minus vel
            praesentium libero nulla nemo magni unde adipisci.
          </p>
          <a
            href="https://drive.google.com/file/d/16S2PEvVuv-AbYLlHENXxrisoTPMecCtD/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            <button className="text-green border border-green hover:bg-lightNavy hover:text-pink hover:border-pink rounded px-4 py-3 mt-5 uppercase">
              Download Resume
            </button>
          </a>
        </div>
      </section>
    );
};

export default Home;