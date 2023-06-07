import React from 'react';

// icons
import { IoCubeOutline, IoLogoTableau } from 'react-icons/io5';

// components
import TopLeftImg from '../../components/TopLeftImg';
import BottomRightImg from '../../components/BottomRightImg';

// import motion
import { motion } from 'framer-motion';

// import variants
import { fadeIn } from '../../variants';

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
    title: 'Frontend Development',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ipsum excepturi magnam',
  },
  {
    icon: <IoLogoTableau />,
    title: 'Backend Development',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ipsum excepturi magnam',
  },
];

const Services = () => {
  return (
    <div className='h-full bg-primary py-40 text-white'>
      <TopLeftImg />
      <BottomRightImg />
      <div className='container mx-auto'>
        <motion.h1
          variants={fadeIn('up', 0.2)}
          initial={'hidden'}
          animate={'show'}
          exit={'hidden'}
          className='h1 mb-12 text-center xl:text-left'
        >
          What I can do.
        </motion.h1>
        {/* service list */}
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-6 xl:px-0 overflow-y-scroll h-[500px] scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-white/10 pr-2 xl:h-auto xl:overflow-visible'>
          {serviceData.map((service, index) => {
            // destructure service
            const { icon, title, description } = service;
            return (
              // service item
              <motion.div
                variants={fadeIn('up', 0.3)}
                initial={'hidden'}
                animate={'show'}
                exit={'hidden'}
                className='border border-white/10 rounded-xl py-[50px] px-[40px] flex flex-col xl:flex-row'
                key={index}
              >
                <div className='text-6xl mx-auto mb-4 xl:mx-0 xl:mb-0 text-accent'>
                  {icon}
                </div>
                <div className='xl:ml-8 text-center xl:text-left'>
                  <div className='text-2xl max-w-[240px] mb-6 mx-auto xl:mx-0'>
                    {title}
                  </div>
                  <div className='max-w-[424px] mx-auto xl:mx-0  text-white/50 font-light'>
                    {description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
