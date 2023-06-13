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

const Services = () => {
  return (
    <div className='h-full bg-primary py-36 text-white'>
      <TopLeftImg />
      <BottomRightImg />
      <div className='container mx-auto flex items-center justify-between'>
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial={'hidden'}
          animate={'show'}
          exit={'hidden'}
          className='h2 mb-8 text-center xl:text-left'
        >
          My services<span className='text-accent'>.</span>
        </motion.h2>
        <div>View all services</div>
      </div>
      <ServiceSlider />
    </div>
  );
};

export default Services;
