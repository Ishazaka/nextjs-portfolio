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
        // spaceBetween={30}
        centeredSlides={true}
        slidesOffsetBefore={-230}
        modules={[Pagination]}
        className=''
      >
        {serviceData.map((service, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='border border-white/10 h-[540px] p-5 group relative'>
                <div className='flex flex-col justify-center items-center h-full pt-12'>
                  <div className='-rotate-90 text-[22px] max-w-[13rem] mb-[110px] leading-tight'>
                    {service.title}
                  </div>
                  <div className='text-4xl group-hover:rotate-45 transition-all duration-300'>
                    <HiArrowUpRight />
                  </div>
                </div>
                <div className='w-5 h-5 bg-accent absolute bottom-0 left-0'></div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ServiceSlider;
