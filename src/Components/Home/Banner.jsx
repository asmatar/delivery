/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint-disable no-console */
// @ts-nocheck
import React/* , { useEffect } */ from 'react';
import { motion } from 'framer-motion';
import piz from '../../Assets/Images/food/piz.webp';
import chicken from '../../Assets/Images/food/chicken.jpg';
import dessert from '../../Assets/Images/food/dessert.jpg';
import pate from '../../Assets/Images/food/pate.jpg';
import bruchetta from '../../Assets/Images/food/bruchetta.jpg';
import starter from '../../Assets/Images/food/starter.jpg';

function Banner() {
  return (

    <motion.div initial={{ x: '100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', duration: 0.2 }} className="flex flex-row flex-wrap gap-x-4 gap-y-20 justify-around max-w-screen-2xl mx-auto my-32 observe transition-all ease-in-out duration-400 px-4">
      <div className="relative shadow-xl w-[250px] group h-[150px] transition-all border-green-300 duration-300 hover:bg-yellow hover:text-blackGray hover:h-[280px] rounded-xl px-2.5 py-5 border ">
        <div className="relative w-full h-full -translate-y-[45px] z-10 scale-95 group-hover:scale-100 group-hover:-translate-y-[60px] transition duration-300">
          <img src={piz} className="w-full rounded-xl" />
        </div>
        <div className="group-hover:opacity-100 group-hover:-translate-y-[160px] px-2.5 py-5 text-center transition-all duration-300 -translate-y-[180px] opacity-0">
          <h2 className="my-4 font-bold ">Pizza</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sednim ad minim veniam,</p>
        </div>
      </div>
      <div className="relative shadow-xl w-[250px] group h-[150px] transition-all border-green-300 duration-300 hover:bg-yellow hover:text-blackGray hover:h-[280px] rounded-xl px-2.5 py-5 border ">
        <div className="relative w-full h-full -translate-y-[45px] z-10 scale-95 group-hover:scale-100 group-hover:-translate-y-[60px] transition duration-300">
          <img src={pate} className="w-full rounded-xl" />
        </div>
        <div className="group-hover:opacity-100 group-hover:-translate-y-[160px] px-2.5 py-5 text-center transition-all duration-300 -translate-y-[180px] opacity-0">
          <h2 className="my-4 font-bold ">Pate</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sednim ad minim veniam,</p>
        </div>
      </div>
      <div className="relative shadow-xl w-[250px] group h-[150px] transition-all border-green-300 duration-300 hover:bg-yellow hover:text-blackGray hover:h-[280px] rounded-xl px-2.5 py-5 border ">
        <div className="relative w-full h-full -translate-y-[45px] z-10 scale-95 group-hover:scale-100 group-hover:-translate-y-[60px] transition duration-300">
          <img src={starter} className="w-full rounded-xl" />
        </div>
        <div className="group-hover:opacity-100 group-hover:-translate-y-[160px] px-2.5 py-5 text-center transition-all duration-300 -translate-y-[180px] opacity-0">
          <h2 className="my-4 font-bold ">Starter</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sednim ad minim veniam,</p>
        </div>
      </div>
      <div className="relative shadow-xl w-[250px] group h-[150px] transition-all border-green-300 duration-300 hover:bg-yellow hover:text-blackGray hover:h-[280px] rounded-xl px-2.5 py-5 border ">
        <div className="relative w-full h-full -translate-y-[45px] z-10 scale-95 group-hover:scale-100 group-hover:-translate-y-[60px] transition duration-300">
          <img src={bruchetta} className="w-full rounded-xl" />
        </div>
        <div className="group-hover:opacity-100 group-hover:-translate-y-[160px] px-2.5 py-5 text-center transition-all duration-300 -translate-y-[180px] opacity-0">
          <h2 className="my-4 font-bold ">Bruchetta</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sednim ad minim veniam,</p>
        </div>
      </div>
      <div className="relative shadow-xl w-[250px] group h-[150px] transition-all border-green-300 duration-300 hover:bg-yellow hover:text-blackGray hover:h-[280px] rounded-xl px-2.5 py-5 border ">
        <div className="relative w-full h-full -translate-y-[45px] z-10 scale-95 group-hover:scale-100 group-hover:-translate-y-[60px] transition duration-300">
          <img src={chicken} className="w-full rounded-xl" />
        </div>
        <div className="group-hover:opacity-100 group-hover:-translate-y-[160px] px-2.5 py-5 text-center transition-all duration-300 -translate-y-[180px] opacity-0">
          <h2 className="my-4 font-bold ">Meat</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sednim ad minim veniam,</p>
        </div>
      </div>
      <div className="relative shadow-xl w-[250px] group h-[150px] transition-all border-green-300 duration-300 hover:bg-yellow hover:text-blackGray hover:h-[280px] rounded-xl px-2.5 py-5 border ">
        <div className="relative w-full h-full -translate-y-[45px] z-10 scale-95 group-hover:scale-100 group-hover:-translate-y-[60px] transition duration-300">
          <img src={dessert} className="w-full rounded-xl" />
        </div>
        <div className="group-hover:opacity-100 group-hover:-translate-y-[160px] px-2.5 py-5 text-center transition-all duration-300 -translate-y-[180px] opacity-0">
          <h2 className="my-4 font-bold ">Dessert</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sednim ad minim veniam,</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Banner;
