/* eslint-disable import/no-unresolved */
// @ts-nocheck
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { EffectCoverflow, Pagination } from 'swiper';

function FoodSearch() {
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
        x: '50vw',
        transition: {
          type: 'spring',
        },
      });
    }
  }, [inView, animation]);
  return (
    <motion.div ref={ref}>
      <motion.div animate={animation} className="flex max-w-screen-2xl m-auto my-20 transition-all ease-in-out">
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="1"
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper w-full xl:h-96 sm:h-72 h-60"
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide className="mySwiper food-search-swiper bg-galery1" />
          <SwiperSlide className="mySwiper food-search-swiper bg-galery2" />
          <SwiperSlide className="mySwiper food-search-swiper bg-galery3" />
          <SwiperSlide className="mySwiper food-search-swiper bg-galery4" />
          <SwiperSlide className="mySwiper food-search-swiper bg-galery5" />
          <SwiperSlide className="mySwiper food-search-swiper bg-galery6" />
          <SwiperSlide className="mySwiper food-search-swiper bg-galery7" />
          <SwiperSlide className="mySwiper food-search-swiper bg-galery8" />
        </Swiper>
      </motion.div>
    </motion.div>

  );
}

export default FoodSearch;
