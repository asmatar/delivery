/* eslint-disable jsx-a11y/label-has-associated-control */
// @ts-nocheck
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xunip0j', 'template_43598vs', form.current, 'user_pG1Sf8N7AVahaWl3zlkL5')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <div className=" bg-center bg-cover h-screen w-screen bg-none lg:bg-contact-bg">
      <div className="flex flex-col justify-center items-center absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4  m-auto h-full lg:h-4/6 w-full lg:w-10/12 bg-contact50 bg-center bg-cover rounded-md shadow-inner">
        <div className="relative flex  justify-center items-center rounded-lg  shadow-lg mx-auto border border-white bg-white transition-all ease-in duration-200">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col xmd:flex-row gap-y-7 p-4 xmd:p-10">
            <div className="flex flex-col gap-y-8 xmd:border-r-2 xmd:pr-4">
              <h2 className="sm:text-3xl text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-600 to-red-600"> Get in touch</h2>
              <div className="relative">
                <input type="text" name="name" id="name" placeholder="name*" className="sibling border-b py-1 w-full xmd:w-60 focus:outline-none focus:border-orange-600 focus:border-b-2 transition-colors peer focus-within:shadow-lg focus:placeholder:opacity-0" required autoComplete="off" />
                <label htmlFor="name" className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-orange-600 transition-all opacity-0 peer-focus:opacity-100">Name</label>
              </div>
              <div className="relative">
                <input type="email" name="email" id="email" placeholder="email*" className="sibling border-b py-1 w-full xmd:w-60 focus:outline-none focus:border-orange-600 focus:border-b-2 transition-colors peer focus-within:shadow-lg focus:placeholder:opacity-0" required autoComplete="off" />
                <label htmlFor="email" className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-orange-600 transition-all opacity-0 peer-focus:opacity-100">Email</label>
              </div>
              <div className="relative">
                <input type="tel" name="tel" id="tel" placeholder="phone numer" className="sibling border-b py-1 w-full xmd:w-60 focus:outline-none focus:border-orange-600 focus:border-b-2 transition-colors peer focus-within:shadow-lg focus:placeholder:opacity-0" autoComplete="off" />
                <label htmlFor="tel" className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-orange-600 transition-all opacity-0 peer-focus:opacity-100">Phone</label>
              </div>
            </div>
            <div className="flex flex-col h-100">
              <div className="xmd:pl-4 flex flex-col w-[20rem] h-full">
                <div className="relative h-full mb-6">
                  <textarea type="text" rows="4" id="message" name="message*" placeholder="write text here..." className=" h-full w-full sibling py-1 focus:outline-none focus:border-orange-600 focus:border-b-2 transition-colors peer focus-within:shadow-lg resize-none focus:placeholder:opacity-0" required autoComplete="off" />
                  <label htmlFor="message" className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-orange-600 transition-all opacity-0 peer-focus:opacity-100">Message</label>
                </div>
              </div>
              <button type="submit" className="send-btn text-white font-bold py-2 px-4 ease-in-out drop-shadow-lg self-end cursor-pointer">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
}
