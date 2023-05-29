// next image
import Image from 'next/image';

// components
import ParticlesContainer from '../components/ParticlesContainer';

// motion
import { motion } from 'framer-motion';

// link
import Link from 'next/link';

// icons
import { HiArrowRight } from 'react-icons/hi2';

const Home = () => {
  return (
    <div className='h-full bg-primary text-white'>
      <div className='w-full h-full bg-gradient-to-r from-primary via-black/40 to-black/10'>
        <div className='flex flex-col justify-center h-full pt-20 container mx-auto'>
          <h1 className='text-6xl mb-8 leading-tight font-semibold'>
            Transforming Ideas <br /> Into Digital Reality
          </h1>
          <p className='max-w-xl mb-16 font-light text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eos
            adipisci, maiores atque deleniti voluptatibus optio.
          </p>
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
        </div>
      </div>
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        {/* bg img */}
        <div className='bg-explosion bg-cover bg-right bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar */}
        <motion.div
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          className='absolute bottom-0 right-[10%]'
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <Image
            src={'/avatar.png'}
            width={700}
            height={700}
            className='translate-z-0'
            alt=''
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
