import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper';

const serviceData = [
  {
    title: 'service 1',
  },
  {
    title: 'service 2',
  },
  {
    title: 'service 3',
  },
  {
    title: 'service 4',
  },
  {
    title: 'service 5',
  },
  {
    title: 'service 6',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='w-full'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-yellow-200/10 h-[200px] xl:h-[300px]'>
              {item.title}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
