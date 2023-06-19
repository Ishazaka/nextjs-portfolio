import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';
import Image from 'next/image';

const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      slidesPerColumn={2}
      navigation
      pagination={{ clickable: true }}
      className='h-[280px] sm:h-[480px]'
      modules={[Pagination]}
    >
      {workSlides.slides.map((slide) => {
        return (
          <SwiperSlide>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image) => {
                return (
                  <div className='relative rounded-lg overflow-hidden group flex justify-center items-center'>
                    <Image
                      className='group-hover:scale-110 transition-all duration-300'
                      src={image.path}
                      width={500}
                      height={300}
                      alt=''
                    />
                    {/* overlay */}
                    <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
                    <button className='absolute bg-accent px-4 py-2 rounded-md scale-125 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 text-[15px]'>
                      Live Project
                    </button>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
