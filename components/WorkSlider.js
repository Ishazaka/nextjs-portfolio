// next image
import Image from 'next/image';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';

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
      pagination={{ clickable: true }}
      className='h-[280px] sm:h-[480px]'
      modules={[Pagination]}
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div
                    className='relative rounded-lg overflow-hidden group flex justify-center items-center'
                    key={index}
                  >
                    <div className='relative group flex justify-center items-center overflow-hidden'>
                      {/* image */}
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt=''
                        className='group-hover:scale-105 transform transition-all duration-700'
                      />
                      {/* overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700' />
                      {/* title */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2'>
                          <div className='text-[13px] tracking-[0.2em]'>
                            LIVE
                          </div>
                          <div className='text-[13px] tracking-[0.2em] translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-100'>
                            PROJECT
                          </div>
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
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
