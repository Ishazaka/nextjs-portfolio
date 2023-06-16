import React from 'react';

// next image
import Image from 'next/image';

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
          <div className='flex xl:w-[30vw] flex-col text-center lg:text-left mb-4 xl:mb-0'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial={'hidden'}
              animate={'show'}
              exit={'hidden'}
              className='h2 xl:mt-8'
            >
              My services<span className='text-accent'>.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.3)}
              initial={'hidden'}
              animate={'show'}
              exit={'hidden'}
              className='mb-4 max-w-[400px] mx-auto lg:mx-0'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              minima quae fuga ipsum voluptatem adipisci.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
            className='w-full xl:max-w-[65%]'
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      {/* bulb */}
      <div className='absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge duration-75  animate-pulse'>
        <Image src={'/bulb.png'} width={270} height={200} />
      </div>
    </div>
  );
};

export default Services;
