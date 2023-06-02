import React from 'react';

// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// icons
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className='mx-auto xl:mx-0'>
      <Link
        href={'/work'}
        className='w-[185px] h-[185px] flex justify-center items-center relative group bg-circleStar bg-cover bg-center bg-no-repeat'
      >
        <Image
          src={'/rounded-text.png'}
          width={140}
          height={140}
          alt=''
          className='animate-spin-slow'
        />
        <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300' />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
