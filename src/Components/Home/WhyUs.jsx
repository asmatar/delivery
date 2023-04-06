/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
// @ts-nocheck
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import why from '../../Assets/Images/why.svg';

function WhyUs() {
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

      <motion.div animate={animation} className="flex flex-row px-4 gap-x-6 justify-between items-center max-w-screen-2xl m-auto duration-400 transition-all duration-300 ease-in-out">
        <div className="w-6/12 hidden md:flex max-w-[625px]">
          <img src={why} alt="delivery food" className="" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-y-10">
          <h2 className="text-2xl sm:text-3xl">
            Why
            <span className="txt-gradient"> Tasty Treat?</span>
          </h2>
          <p className="text-stone-500">
            Every day is a new opportunity to make
            the world a more inclusive place. At Tasty Treat,
            we make an effort to prioritize empathy: Empathetic to Our Customers.
            At Tasty Treat, we see it as intuitive solutions,
            higher quality, and an optimized customer experience.
          </p>
          <div className="flex flex-col gap-y-2">
            <h3 className="font-semibold">Fresh and tasty foods</h3>
            <p className="text-stone-500">Fresh and Tasty is a food manufacturer that offers artisanal process, gluten free, and fresh ingredient dressings and sauces nationwide.</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <h3 className="font-semibold">
              Quality support
            </h3>
            <p className="text-stone-500">
              Customer service is about giving out the best quality in the shortest amount of time.
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <h3 className="font-semibold">
              Order from any location
            </h3>
            <p className="text-stone-500">
              Tasty Treat is the food delivery site that
              will get you anything you want to your doorstep. You order online, you will have it!
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default WhyUs;
