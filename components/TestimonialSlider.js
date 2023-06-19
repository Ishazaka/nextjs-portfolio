import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';

// import icons
import { FaQuoteLeft } from 'react-icons/fa';

// testimonial data
const testimonialData = [
  {
    image: '',
    name: '',
    position: '',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '',
    name: '',
    position: '',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className='h-[400px]'>
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide className='bg-pink-50/10' key={index}>
            <div className='flex flex-col md:flex-row gap-x-12 bg-green-200/10 h-full px-16'>
              {/* avatar, name, position */}
              <div className='w-full max-w-[300px] flex justify-center items-center relative'>
                {/* avatar */}
                <div className='w-[120px] h-[120px] bg-pink-50/10 rounded-full'></div>
                {/* name */}
                <div>{person.name}</div>
              </div>
              {/* quote & message */}
              <div className='flex-1 flex flex-col justify-center before:w-[1px] before:bg-red-500 before:absolute before:left-0 before:h-[260px] relative'>
                <div className='mb-4'>
                  <FaQuoteLeft className='text-6xl text-white/20' />
                </div>
                <div className='text-xl text-left'>{person.message}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
