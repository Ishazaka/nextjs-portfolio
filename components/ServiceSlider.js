// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx';

// import required modules
import { FreeMode, Pagination } from 'swiper';

// service data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Let, Var and Const',
    description: 'Var keyword has global scope or function scope It means if any variable',
  link: 'https://medium.com/dev-genius/let-var-and-const-in-js-2f6226457d2f'
  },
  {
    icon: <RxPencil2 />,
    title: 'React vs Angular',
    description: 'React JS is a free and open-source JavaScript library.',
  link: 'https://medium.com/@Isha_/angular-vs-react-what-to-choose-and-why-f960d53bb373'
  },
  {
    icon: <RxDesktop />,
    title: 'Programming',
    description: 'What are the Basic Fundamental Concepts of Programming?',
     link:'https://codinglamp.com/tech/what-are-the-basic-fundamental-concepts-of-programming/' 
  },
  {
    icon: <RxReader />,
    title: 'Mobile vs Web App',
    description: 'Advantages And DisAdvantages of Web apps and Mobile Apps',
  link: 'https://codinglamp.com/tech/web-app-vs-mobile-app-what-should-your-startup-choose/'
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
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/* title & desc */}
              <a href={item.link}>
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>
                  {item.description}
                </p>
              </div>
              </a>
              {/* arrow */}
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
