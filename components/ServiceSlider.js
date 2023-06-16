import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
} from 'react-icons/rx';

// import required modules
import { FreeMode, Pagination } from 'swiper';

const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
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
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[#1c1d2c] h-max xl:h-[300px] rounded-lg p-6'>
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/* title */}
              <div className='mb-2 text-lg'>{item.title}</div>
              {/* description */}
              <p>{item.description}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
// bg-[#1b1c2d]
export default ServiceSlider;
