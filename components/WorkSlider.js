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
            <div className='grid grid-cols-2 grid-rows-2 gap-4'>
              {slide.images.map((image) => {
                return (
                  <div className='relative rounded-lg overflow-hidden'>
                    <div className='absolute top-0 left-0 w-full h-full z-20'></div>
                    <Image src={image.path} width={500} height={300} alt='' />
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
