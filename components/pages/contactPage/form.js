import React from "react";
import { Fragment } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useRef, useState } from "react";

var util = require("util");
// Infos for akhad's account
const TEMPLATE_ID = "template_f54k2ck";
const EMAIL_SERVICE = "service_jrbkwfi";
const EMAIL_USER = "user_2GPcRMRNXINnnlOtPXuXi";

// Infos for wsyg's account
const TEMPLATE_IDD = "template_85rirrs";
const EMAIL_SERVICEE = "to_choose";
const EMAIL_USERR = "txSc4m5HR-jLa55WC";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const formRef = useRef();
  console.log(TEMPLATE_ID);
  const handleSubmit = (e) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    e.preventDefault();
    emailjs
      .sendForm(EMAIL_SERVICE, TEMPLATE_ID, formRef.current, EMAIL_USER)
      .then(
        (result) => {
          setDone(true);
          setTimeout(() => {
            setDone(false);
          }, 3000);
          console.log("success", result);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <Fragment>
      <div className="md:w-11/12 w-full md:px-0 px-4 py-4">
        <div className="tracking-wider lg:text-4xl md:text-2xl text-xl">
          We want to hear from you. Contact us.
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className=" pt-6  mb-4">
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="name"
            >
              name
            </label>
            <input
              className="text-noir shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-vertClair"
              id="name"
              type="text"
              name="name"
              placeholder="name"
              autoComplete="name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
              email
            </label>
            <input
              className=" shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-vertClair"
              id="email"
              type="email"
              name="email"
              placeholder="email"
            />
            <p className="text-vertClair text-xs italic">
              Please enter a valid email.
            </p>
          </div>
          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="message"
            >
              message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              placeholder="message"
              className="w-full h-16 px-3 py-2 text-base text-noir focus:outline-none focus:border-vertClair border rounded focus:shadow-outline"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="hover:cursor-pointer w-32 bg-white text-pink
              transition ease-out duration-1000 transform hover:scale-y-110 hover:opacity-90 font-bold 
               py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              name="send"
              id="send"
              disabled={loading}
            >
              {loading && <FontAwesomeIcon icon="spinner" color="#fff" spin />}{" "}
              send
            </button>
            {done && (
              <p className=" lg:text-2xl md:text-xl sm:text-2xl text-xl lg:px-4 px-2 py-2 rounded">
                Thanks for your message!
              </p>
            )}
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Form;
