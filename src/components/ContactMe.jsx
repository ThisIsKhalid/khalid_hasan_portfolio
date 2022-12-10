import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { toast } from "react-toastify";

const ContactMe = () => {
  const form = useRef();

  const handleSendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_50joxvj",
        "template_nxmv0m5",
        form.current,
        "BGeHnHdtbSmPVCABn"
      )
      .then(
        (result) => {
          toast.success(
            "Thank you for your message. I will contact with you!!"
          );
          event.target.reset();
        },
        (error) => {
          toast.error("something wrong in your email");
        }
      );
  };

  return (
    <div id="contact" className="container mx-auto lg:px-0 px-5 py-5 my-24">
      <div className="flex gap-10 mb-10">
        <h2 className="lg:text-2xl text-xl font-medium text-white">Contact</h2>
        <span className="w-40 h-px relative top-3  bg-slate"></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-lightestSlate">
        <div>
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
        <div>
          <form
            ref={form}
            onSubmit={handleSendEmail}
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 "
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="block w-full rounded-md shadow-sm focus:ring focus:outline-none focus:ring-green bg-lightNavy py-2 pl-3 text-white"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="block w-full rounded-md shadow-sm focus:ring focus:outline-none focus:ring-green bg-lightNavy py-2 pl-3 text-white"
            />
            <textarea
              rows="3"
              name="message"
              placeholder="Message"
              className="block w-full rounded-md shadow-sm focus:ring focus:outline-none focus:ring-green bg-lightNavy py-2 pl-3 text-white"
            ></textarea>
            <button
              type="submit"
              className="text-green border border-green hover:bg-lightNavy hover:text-pink hover:border-pink rounded px-4 py-3 flex items-center justify-center gap-2 uppercase"
            >
              Hit me up <FaLocationArrow />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
