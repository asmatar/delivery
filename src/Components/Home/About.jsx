// @ts-nocheck
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import pick from '../../Assets/Images/pick.svg';
import dish from '../../Assets/Images/dish.svg';
import fast from '../../Assets/Images/fast.svg';

function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: '0px',
        transition: {
          type: 'spring',
        },
      });
    }
    if (!inView) {
      animation.start({
        x: '-50vw',
        transition: {
          type: 'spring',
        },
      });
    }
  }, [inView, animation]);
  return (
    <motion.div ref={ref}>
      <motion.div animate={animation} className="flex flex-col items-center justify-center max-w-screen-2xl mx-auto my-24 gap-x-20 gap-y-20">
        <div className="mx-4 flex flex-col gap-y-6 items-center justify-center">
          <p className="font-semibold text-xl bg-clip-text text-transparent bg-yellow-orange-gradient ">What we serve</p>
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Just sit back at home we will
            <span className="txt-gradient bg-yellow-orange-gradient"> take care</span>
          </h2>
          <div className="max-w-[800px] xl:max-w-full">
            <p className="text-stone-500 mb-2">Get contactless delivery for restaurant takeout, groceries, and more! Ordering food online is the best way to save time</p>
            <p className="text-stone-500">Choose from the largest selection of food and have your meal delivered to your door. ... Order online for Tasty Treat? s super-fast delivery or pick-up.</p>
          </div>
        </div>

        <div className=" mx-4 flex flex-wrap flex-row md:justify-center gap-y-6 items-center gap-x-4 lg:gap-x-0">
          <div className="about-section">
            <img src={fast} alt="" className="w-24" />
            <h3 className="text-2xl font-semibold">Quick Delivery</h3>
            <p className="about-section-para">Your order will be delivered in minutes and you can track its ETA while you wait.</p>
          </div>
          <div className="about-section">
            <img src={dish} alt="" className="w-16" />
            <h3 className="text-2xl font-semibold">Super Dine In</h3>
            <p className="about-section-para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque</p>
          </div>
          <div className="about-section">
            <img src={pick} alt="" className="w-16" />
            <h3 className="text-2xl font-semibold">Easy Pick Up</h3>
            <p className="about-section-para">You order online, you will have it!  delivered straight to your home or office.</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default About;
