// @ts-nocheck
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Carousel from './Carousel';
import testimonials from '../../Assets/Images/testimonials.svg';

function Testimonial() {
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
      <motion.div animate={animation} className="flex flex-row items-start justify-between gap-x-4 max-w-screen-2xl 2xl:mx-auto mx-4 mb-16 mt-16">
        <div className="w-full md:w-1/2 flex flex-col gap-y-6 ">
          <h2 className="text-4xl">
            What our
            <span className="txt-gradient bg-yellow-orange-gradient"> customers </span>
            are saying
          </h2>
          <p className="text-stone-500 mb-6 leading-7">A window to express yourself, your opinion is important to keep improving our service, offer and be able to alway give you the best food delivery experience.</p>
          <Carousel />
        </div>
        <div className="w-1/2 hidden md:flex">
          <img src={testimonials} alt="network" className="aspect-auto " />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Testimonial;
