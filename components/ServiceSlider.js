// icons
import { IoCubeOutline, IoLogoTableau, IoArrowUp } from 'react-icons/io5';

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
    icon: <IoCubeOutline />,
    title: 'Brand Strategy & Art Direction',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ipsum excepturi magnam',
  },
  {
    icon: <IoLogoTableau />,
    title: 'User Interface Design',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ipsum excepturi magnam',
  },
  {
    icon: <IoCubeOutline />,
    title: 'User Experience Design',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ipsum excepturi magnam',
  },
  {
    icon: <IoLogoTableau />,
    title: 'Frontend Development',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ipsum excepturi magnam',
  },
  {
    icon: <IoCubeOutline />,
    title: 'Backend Development',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ipsum excepturi magnam',
  },
  {
    icon: <IoLogoTableau />,
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
        slidesOffsetBefore={-230}
        modules={[Pagination]}
        className='mySwiper'
      >
        {serviceData.map((service, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='bg-gray-800 h-[540px] flex flex-col justify-center items-center'>
                <div className='-rotate-90 text-2xl max-w-[14rem]'>
                  {service.title}
                </div>
                <div className='bg-blue-50/40 mt-24 text-4xl'>
                  <IoArrowUp />
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
