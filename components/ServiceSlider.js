// icons
import { HiArrowUpRight } from 'react-icons/hi2';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import '../../styles.css';

// import required modules
import { Pagination } from 'swiper';

import { HiMap } from 'react-icons/hi';

const serviceData = [
  {
    title: 'Brand Strategy & Art Direction',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ipsum excepturi magnam',
  },
  {
    title: 'User Interface Design',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ipsum excepturi magnam',
  },
  {
    title: 'User Experience Design',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ipsum excepturi magnam',
  },
  {
    title: 'Frontend Development',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ipsum excepturi magnam',
  },
  {
    title: 'Backend Development',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ipsum excepturi magnam',
  },
  {
    title: 'SEO And Copywriting',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ipsum excepturi magnam',
  },
];

const ServiceSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        modules={[Pagination]}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 15,
            slidesOffsetBefore: 0,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesOffsetBefore: 0,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesOffsetBefore: -230,
          },
        }}
      >
        {serviceData.map((service, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='bg-[#1c1d2f] py-12 px-3 h-[380px]  xl:h-[540px] xl:p-10 group relative rounded-lg'>
                <div className='flex flex-col justify-center items-center h-full relative'>
                  <div>
                    <HiMap className='text-5xl mb-4 text-accent' />
                  </div>
                  <div className='text-center text-xl xl:text-2xl max-w-[16rem] mb-4'>
                    {service.title}
                  </div>
                  <p className='mb-4 xl:mb-16 text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className='text-4xl group-hover:rotate-45 transition-all duration-300 cursor-pointer'>
                    <HiArrowUpRight />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ServiceSlider;
