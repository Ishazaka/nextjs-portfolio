import React from 'react';

// next image
import Image from 'next/image';
// next link
import Link from 'next/link';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

// icons
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <motion.div
      variants={fadeIn('down', 0.4)}
      initial='hidden'
      animate={'show'}
      exit={'hidden'}
      className='mx-auto xl:mx-0'
    >
      <Link
        href={'/work'}
        className='w-44 h-44 border rounded-full flex justify-center items-center relative group'
      >
        <Image
          src={'/rounded-text.png'}
          width={141}
          height={141}
          alt=''
          className='animate-spin-slow'
        />
        <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300' />
      </Link>
    </motion.div>
  );
};

export default ProjectsBtn;
