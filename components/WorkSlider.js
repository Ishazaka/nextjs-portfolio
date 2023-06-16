import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

// import "./styles.css";

// import required modules
import { Grid, Pagination } from 'swiper';

const WorkSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            grid: 1,
          },
        }}
        modules={[Grid, Pagination]}
        className='workSlider mx-0'
      >
        <SwiperSlide className=''>Slide 1</SwiperSlide>
        <SwiperSlide className=''>Slide 2</SwiperSlide>
        <SwiperSlide className=''>Slide 3</SwiperSlide>
        <SwiperSlide className=''>Slide 4</SwiperSlide>
        <SwiperSlide className=''>Slide 5</SwiperSlide>
        <SwiperSlide className=''>Slide 6</SwiperSlide>
        <SwiperSlide className=''>Slide 7</SwiperSlide>
        <SwiperSlide className=''>Slide 8</SwiperSlide>
        <SwiperSlide className=''>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};

export default WorkSlider;
