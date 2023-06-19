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
    <>
      <Swiper navigation={true} modules={[Navigation]} className=''>
        {testimonialData.map((item, index) => {
          return (
            <SwiperSlide className='' key={index}>
              <div className='flex flex-col md:flex-row'>
                {/* avtar image */}
                <div className='flex-1 flex justify-center items-center'>
                  <div className='w-[120px] h-[120px] bg-pink-50 rounded-full'></div>
                </div>
                {/* quote & message */}
                <div className='flex-1'>
                  <div className='mb-4'>
                    <FaQuoteLeft className='text-6xl text-white/20' />
                  </div>
                  <div className='text-xl text-left'>{item.message}</div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
