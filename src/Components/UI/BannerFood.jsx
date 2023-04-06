/* eslint-disable import/no-unresolved */
// @ts-nocheck
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  EffectFade, Navigation, Pagination, Autoplay,
} from 'swiper';

function BannerFood({ title }) {
  return (
    <Swiper
      spaceBetween={30}
      effect="fade"
      loop
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      className="mySwiper h-80 overflow-hidden hidden sm:block"
    >
      <SwiperSlide className="mySwiper bg-center bg-cover bg-no-repeat bg-hero-patern flex justify-center items-center">
        <h2 className="text-white text-3xl sm:text-5xl font-bold tracking-wide">{title}</h2>
      </SwiperSlide>
      <SwiperSlide className="mySwiper  bg-cover bg-no-repeat bg-hero-patern2 flex justify-center items-center">
        <h2 className="text-white text-3xl sm:text-5xl font-bold tracking-wide">{title}</h2>
      </SwiperSlide>
      <SwiperSlide className="mySwiper bg-center bg-cover bg-no-repeat bg-hero-patern3 flex justify-center items-center">
        <h2 className="text-white text-3xl sm:text-5xl font-bold tracking-wide">{title}</h2>
      </SwiperSlide>
      <SwiperSlide className="mySwiper bg-center bg-cover bg-no-repeat bg-hero-patern4 flex justify-center items-center">
        <h2 className="text-white text-3xl sm:text-5xl font-bold tracking-wide">{title}</h2>
      </SwiperSlide>
    </Swiper>
  );
}

export default BannerFood;
