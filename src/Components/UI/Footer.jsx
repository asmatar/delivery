/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
// @ts-nocheck
import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="flex flex-col py-6 mt-44 relative">
      <div className="bg-wave h-[725px]  md:!h-[390px] wavePhone:h-[490px] bg-cover -z-10 w-full absolute bottom-0" />
      <div className="flex flex-col gap-y-8 px-4 justify-between items-center max-w-screen-2xl w-full m-auto">
        <div className="flex flex-wrap justify-between items-start w-full m-auto gap-y-8">
          <div className="md:flex items-center flex-col gap-y-4 basis-64 grow md:grow-0 md:basis-[150px] ">
            <nav>
              <ul className="text-white flex flex-col gap-y-1 sm:gap-y-2">
                <div className="font-semibold text-[#e4e4e4ff] text-lg mb-2">Links</div>
                <li className="">
                  <NavLink to="/" className="cursor-pointer hover:text-yellow transition-all duration-300">
                    Home
                  </NavLink>
                </li>
                <li className="">
                  <NavLink to="/food" className="cursor-pointer hover:text-yellow transition-all duration-300">
                    Food
                  </NavLink>
                </li>
                <li className="">
                  <NavLink to="/cart" className="cursor-pointer hover:text-yellow transition-all duration-300">
                    Cart
                  </NavLink>
                </li>
                <li className="">
                  <NavLink to="/contact" className="cursor-pointer hover:text-yellow transition-all duration-300">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-y-1 sm:gap-y-4 basis-64 grow md:grow-0 md:basis-[150px]">
            <div className="font-semibold text-[#e4e4e4ff] text-lg mb-2">Delivery Time</div>
            <div className="">
              <p className="text-[#CCCCCC]">Monday - Saturday</p>
              <p className="text-[#CCCCCC]"> 8:00am - 11:00pm</p>
            </div>
            <div className="">
              <p className="text-[#CCCCCC]">Sunday</p>
              <p className="text-[#CCCCCC]">Day off</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-1 sm:gap-y-4 basis-64 grow md:grow-0 md:basis-[150px]">
            <div className="font-semibold text-[#CCCCCC] text-lg">Contact</div>
            <p className="text-[#CCCCCC]">Location: Malaga, Spain</p>
            <p className="text-[#CCCCCC] cursor-pointer group">
              Phone:
              <NavLink
                to="#"
                onClick={(e) => {
                  window.location.href = 'whatsapp://send?arthur=+33 760 435 658';
                  e.preventDefault();
                }}
                className="group-hover:text-yellow transition ease-in-out duration-300 "
              >
                {' '}
                +33 760 435 658
              </NavLink>
            </p>
            <p className="text-[#CCCCCC] cursor-pointer group">
              Email:
              <NavLink
                to="#"
                onClick={(e) => {
                  window.location.href = 'mailto:deruelle.arthur@gmail.com';
                  e.preventDefault();
                }}
                className="text-[#CCCCCC] group-hover:text-yellow transition ease-in-out duration-300 "
              >
                {' '}
                deruelle.arthur@gmail.com
              </NavLink>
            </p>
          </div>
          <div className="flex flex-col gap-y-1 sm:gap-y-4 basis-64 grow md:grow-0 md:basis-[150px]">
            <div className="font-semibold text-[#CCCCCC] text-lg">Follow me</div>
            <a
              href="https://www.linkedin.com/in/arthur-deruelle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow text-[#CCCCCC] transition ease-in-out duration-300 "
            >
              Linkedin
            </a>
            <a
              href="https://arthur-deruelle.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow text-[#CCCCCC] transition ease-in-out duration-300 "
            >
              Portfolio
            </a>
            <a
              href="https://github.com/asmatar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow text-[#CCCCCC] transition ease-in-out duration-300 "
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
