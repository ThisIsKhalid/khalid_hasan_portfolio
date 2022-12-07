import React from "react";
import { FaEnvelope, FaLocationArrow } from "react-icons/fa";

const ContactMe = () => {
  return (
    <section className="bg-darkNavy" id="contact">
      <div className="container mx-auto lg:px-0 px-5 py-5 my-24">
        <div className="flex gap-10 mb-10">
          <h2 className="lg:text-2xl text-xl font-medium text-white">
            Contact
          </h2>
          <span className="border border-lightestSlate rotate-90"></span>
        </div>
        <div className="grid max-w-6xl grid-cols-1 md:grid-cols-2 md:divide-x divide-lightestSlate">
          <div className="">
            <h1 className="text-4xl text-slate font-bold mb-5">
              Got a problem to solve?
            </h1>
            <p className="text-lightestSlate text-lg">
              Get your space suit ready and tell me your ideas to develop your
              dream application.
            </p>
            <p className="text-slate text-lg flex items-center gap-2 mt-5">
              <FaEnvelope />
              <span>khalid.hasan9753@gmail.com</span>
            </p>
          </div>
          <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
            <input
              type="text"
              placeholder="Your Name"
              className="block w-full rounded-md shadow-sm focus:ring focus:outline-none focus:ring-green bg-darkSlate py-2 pl-3 text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="block w-full rounded-md shadow-sm focus:ring focus:outline-none focus:ring-green bg-darkSlate py-2 pl-3 text-white"
            />
            <textarea
              rows="3"
              placeholder="Message"
              className="block w-full rounded-md shadow-sm focus:ring focus:outline-none focus:ring-green bg-darkSlate py-2 pl-3 text-white"
            ></textarea>
            <button
              type="button"
              className="text-green border border-green px-4 py-3 flex items-center justify-center gap-2 uppercase"
            >
              Hit me up <FaLocationArrow />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
