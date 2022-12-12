import React from 'react';

const Blogs = () => {
    return (
      <section className="container lg:max-w-5xl mx-auto lg:px-0 px-5 py-24">
        <div
          className="flex gap-10 mb-10"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h2 className="lg:text-2xl text-xl font-medium text-white">Blogs</h2>
          <span className="w-40 h-px relative top-3  bg-slate"></span>
        </div>
        <div className="flex items-center justify-center">
          <h1 className="text-green font-medium text-2xl">Coming Soon...</h1>
        </div>
      </section>
    );
};

export default Blogs;