import React, { useState } from 'react';

// next image
import Image from 'next/image';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// react countup
import CountUp from 'react-countup';

// components
import TopLeftImg from '../../components/TopLeftImg';
import BottomRightImg from '../../components/BottomRightImg';

// icons
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaWordpress,
  FaFigma,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from 'react-icons/si';

// about data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'experience',
        stage: 'stage',
      },
      {
        title: 'experience',
        stage: 'stage',
      },
    ],
  },
  {
    title: 'education & certification',
    info: [
      {
        title: 'education & certification',
        stage: 'stage',
      },
      {
        title: 'education & certification',
        stage: 'stage',
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'awards',
        stage: 'stage',
      },
      {
        title: 'awards',
        stage: 'stage',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className='h-full bg-primary py-32 text-white text-center xl:text-left'>
      <TopLeftImg />
      <BottomRightImg />
      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial={'hidden'}
        animate={'show'}
        exit={'hidden'}
        className='hidden xl:flex absolute bottom-0 -left-[350px]'
      >
        <Image
          src={'/avatar.png'}
          width={700}
          height={700}
          className='translate-z-0'
          alt=''
        />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate={'show'}
            exit={'hidden'}
            className='h2'
          >
            Captivating <span className='text-accent'>stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate={'show'}
            exit={'hidden'}
            className='max-w-[700px] mx-auto xl:mx-0 mb-4 xl:mb-12 px-2 xl:px-0'
          >
            10 years ago, I began freelancing as a developer. Since then, I've
            done remote work for agencies, consulted for startups, and
            collaborated on digital products for business and consumer use. With
            quiet confidence, curiosity, and a focus on continual improvement, I
            tackle development challenges one at a time.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate={'show'}
            exit={'hidden'}
            className='md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex xl:gap-x-6'>
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={10} duration={8} />+
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Years of experience
                </div>
              </div>
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={250} duration={4} />+
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Satisfied clients
                </div>
              </div>
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={650} duration={4} />+
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Finished projects
                </div>
              </div>
              <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={8} duration={10} />
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Winning Awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  className={`${
                    index === itemIndex &&
                    'text-accent border-b-2 border-accent'
                  } cursor-pointer capitalize text-lg`}
                  onClick={() => setIndex(itemIndex)}
                  index={itemIndex}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-6 flex flex-col gap-y-4'>
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                className='flex-1 flex max-w-max gap-x-4 items-center text-white/60'
                key={itemIndex}
              >
                <div className=''>{item.title}</div>
                <div>-</div>
                <div className='flex gap-x-4'>
                  {item.icons?.map((icon) => {
                    return (
                      <div className='text-2xl hover:text-accent transition-all duration-300'>
                        {icon}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
