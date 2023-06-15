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
import ServiceSlider from '../../components/ServiceSlider';

const Services = () => {
  return (
    <div className='h-full bg-primary py-36 text-white'>
      <TopLeftImg />
      <BottomRightImg />
      <div className='container mx-auto flex items-center justify-between'>
        <div className='flex flex-col xl:flex-row items-center justify-between w-full mb-12'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
            className='h2 text-center xl:text-left'
          >
            My services<span className='text-accent'>.</span>
          </motion.h2>
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
          >
            View all services
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={fadeIn('up', 0.4)}
        initial={'hidden'}
        animate={'show'}
        exit={'hidden'}
      >
        <ServiceSlider />
      </motion.div>
    </div>
  );
};

export default Services;
