// @ts-nocheck
import React from 'react';
import About from '../Components/Home/About';
import Banner from '../Components/Home/Banner';
import FoodSearch from '../Components/Home/FoodSearch';
import Intro from '../Components/Home/Intro';
import Testimonial from '../Components/Home/Testimonial';
import WhyUs from '../Components/Home/WhyUs';

function Home() {
  return (
    <div className="mt-[190px] ">
      <Intro />
      <Banner />
      <About />
      <FoodSearch />
      <WhyUs />
      <Testimonial />
    </div>
  );
}

export default Home;
