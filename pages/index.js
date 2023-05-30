// next image
import Image from 'next/image';

// components
import ParticlesContainer from '../components/ParticlesContainer';

// motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

// link
import Link from 'next/link';

// icons
import { HiArrowRight } from 'react-icons/hi2';

const Home = () => {
  return (
    <div className='h-full bg-primary text-white'>
      <div className='w-full h-full bg-gradient-to-r from-primary via-black/70 to-black/10'>
        <div className='flex flex-col justify-center xl:justify-center pt-36 text-center xl:text-left h-full container mx-auto'>
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate={'show'}
            exit={'hidden'}
            className='text-3xl xl:text-6xl mb-8 leading-tight font-semibold'
          >
            Transforming Ideas <br /> Into Digital Reality
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate={'show'}
            exit={'hidden'}
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 font-light text-base xl:text-lg'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eos
            adipisci, maiores atque deleniti voluptatibus optio.
          </motion.p>
          {/* btn */}
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
        </div>
      </div>
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        {/* bg img */}
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate={'show'}
          exit={'hidden'}
          className='absolute -bottom-32 lg:bottom-0 lg:right-[8%]'
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <div className='hidden xl:flex xl:max-w-none'>
            <Image
              src={'/avatar.png'}
              width={750}
              height={750}
              className='translate-z-0'
              alt=''
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
