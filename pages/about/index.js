// next image
import Image from 'next/image';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// react countup
import CountUp from 'react-countup';

// components
import ProjectsBtn from '../../components/ProjectsBtn';
import TopLeftImg from '../../components/TopLeftImg';
import BottomRightImg from '../../components/BottomRightImg';

const About = () => {
  return (
    <div className='h-full bg-primary py-32 text-white text-center xl:text-left'>
      {/* top left image */}
      <TopLeftImg />
      <BottomRightImg />
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
          {/* counts */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate={'show'}
            exit={'hidden'}
          >
            <div className='flex xl:gap-x-6'>
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-[32px] font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={10} duration={8} />+
                </div>
                <div className='text-xs xl:text-[13px] uppercase'>
                  Years of experience
                </div>
              </div>
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-[32px] font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={250} duration={4} />+
                </div>
                <div className='text-xs xl:text-[13px] uppercase'>
                  Satisfied clients
                </div>
              </div>
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-[32px] font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={650} duration={4} />+
                </div>
                <div className='text-xs xl:text-[13px] uppercase'>
                  Finished projects
                </div>
              </div>
              <div className='relative flex-1'>
                <div className='text-2xl xl:text-[32px] font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={8} duration={10} />
                </div>
                <div className='text-xs xl:text-[13px] uppercase'>
                  Winning Awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className='flex-1 w-full'>2</div>
      </div>
    </div>
  );
};

export default About;
