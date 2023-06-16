import React from 'react';

// icons
import { IoCubeOutline, IoLogoTableau } from 'react-icons/io5';

// components
import TopLeftImg from '../../components/TopLeftImg';
import BottomRightImg from '../../components/BottomRightImg';
import ServiceSlider from '../../components/ServiceSlider';

// import motion
import { motion } from 'framer-motion';

// import variants
import { fadeIn } from '../../variants';

const Services = () => {
  return (
    <div className='h-full bg-primary py-36 text-white flex items-center'>
      <TopLeftImg />
      <BottomRightImg />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          <div className='flex xl:w-[30vw] flex-col'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial={'hidden'}
              animate={'show'}
              exit={'hidden'}
              className='h2'
            >
              My services<span className='text-accent'>.</span>
            </motion.h2>
            <motion.p className='mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              minima quae fuga ipsum voluptatem adipisci aut corporis dolore
              quibusdam assumenda.
            </motion.p>
            <motion.div
              className='mb-12 xl:mb-4'
              variants={fadeIn('up', 0.3)}
              initial={'hidden'}
              animate={'show'}
              exit={'hidden'}
            >
              View all services
            </motion.div>
          </div>
          <div className='w-full xl:max-w-[60%]'>
            <ServiceSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
