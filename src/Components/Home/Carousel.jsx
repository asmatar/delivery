/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-equals-spacing */
/* eslint-disable react/jsx-boolean-value */
// @ts-nocheck
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import ava from '../../Assets/Images/avatar-testimonials/avamodif-1.jpg';
import ava2 from '../../Assets/Images/avatar-testimonials/avamodif-2.jpg';
import ava3 from '../../Assets/Images/avatar-testimonials/avamodif-3.jpg';
import ava4 from '../../Assets/Images/avatar-testimonials/avamodif-4.jpg';
import 'swiper/css';
import 'swiper/css/bundle';

function TestimonialSlider() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      loop = {true}
      modules={[Pagination, Navigation, Autoplay]}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      className="w-full"
    >
      <div className="flex flex-row">
        <SwiperSlide className="">
          <div className="flex flex-col gap-y-6">
            <p className="text-gray-700 text-justify leading-7">
              `Tasty Treat meal delivery service got me here. Their meals are great for people with busy schedule like me, and they’re healthy AND delicious. PS. I have sweet tooth and their desserts are to die for!`
            </p>
            <div className="testimonials-section">
              <img src={ava} alt="avatar 1" className="testimonials-section-img" />
              <h6 className="font-semibold text-xl">Ann Merin</h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex flex-col gap-y-6">
            <p className="text-gray-700 text-justify leading-7">
              ` Tasty Treat provides a healthy and delicious way for brides to slim down without depleting the energy they’ll need. The nutritionally balanced food plans slim the body while providing the vitamins and minerals for skin, hair and nails to look their best. `
            </p>
            <div className="testimonials-section">
              <img src={ava2} alt="avatar 2" className="testimonials-section-img" />
              <h6 className="font-semibold text-xl">Mitchell Marsh</h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex flex-col gap-y-6">
            <p className="text-gray-700 text-justify leading-7">
              `Dialing in your physique is more than just training hard. It’s also watching your food intake – Quality, quantity and timing all play a part. It’s hard to manage all of that when you’re a working actor being pulled in 25 different directions. `
            </p>
            <div className="testimonials-section">
              <img src={ava3} alt="avatar 3" className="testimonials-section-img" />
              <h6 className="font-semibold text-xl">Jaime King</h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex flex-col gap-y-6">
            <p className="text-gray-700 text-justify leading-7">
              ` Tasty Treat has helped me get right for three straight roles in film and television, but it’s done more than that. It’s helped me get my life back on a healthy track as well. It really is Zero Effort and with their customizable menu tailored specifically for me, each meal was a can’t miss.`
            </p>
            <div className="testimonials-section">
              <img src={ava4} alt="avatar 4" className="testimonials-section-img" />
              <h6 className="font-semibold text-xl">Steven Crock</h6>
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
}

export default TestimonialSlider;
