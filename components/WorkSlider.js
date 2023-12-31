// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'Crypto Hunter',
          path: '/thumb1.jpg',
          desc: "Cryptocurrency Hunter is a react app that helps people find the best currency to invest in.It plays a significant role in the success of the user's investments in digital currencies.The chart shows the price, marketcap value, profit, and loss for 100 digital currencies.This service allows users to contrast the performance of multiple cryptocurrencies against one another.Besides showing the currencies that are trending in the most recent 24 hours, it also displays data on ups and downs in the past 30 days and the whole year.",
          Github: 'https://github.com/Ishazaka/Crypto-Hunter',
          live: 'https://hundredcrypto.netlify.app/'

        },
        {
          title: 'Test And Go',
          path: '/thumb2.jpg',
          desc:  "This is a health related project. It is built for different schools where they can collect data of students health information specially covid-19 data",
          Github: 'https://github.com/Ishazaka/testandgonjs',
          live: 'https://www.testandgo.com/'
        },
        {
          title: 'Artificially AI',
          path: '/thumb3.jpg',
          desc: "Artificially AI is the store where we print the images on the shirt, which are generated by buyers tehmselves,",
          Github: 'https://github.com/Ishazaka',
          live: 'https://artificiallyapp.netlify.app/'
        },
        {
          title: 'Covid19 Tracker',
          path: '/thumb4.jpg',
          desc: "Covid-19 is a React project developed to provide support to people suffering from and affected by Covid-19 virus worldwide. The app is designed to be very simple and light weight while maintaining proper responsiveness on different platforms like web and mobile. It provides statistics from around the world and lets users track the growth of active cases in their country.",
          Github: 'https://github.com/Ishazaka/Covid19-Tracker',
          live: 'https://covid19effects.netlify.app/'
        },
      ],
    },
    // {
    //   images: [
    //     {
    //       title: 'title',
    //       path: '/thumb4.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb1.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb2.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb3.jpg',
    //     },
    //   ],
    // },
  ],
};

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
// next image
import Image from 'next/image';




// grid grid-cols-2 grid-rows-2

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
   
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div
                    className='relative rounded-lg flex items-center justify-center m-5'
                    key={index}
                  >
                    <div className='flex flex-column items-center justify-center  relative'>
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt='' /> 
                   <div>
                      <p style={{margin: '22px'}}>{image.desc}</p>
                      <div>
                      <a style={{margin: '22px'}} href={image.live}>Live</a>
                      <a style={{margin: '22px'}} href={image.Github}> PROJECT</a>
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
