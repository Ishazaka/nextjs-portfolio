import Image from 'next/image';
import ParticlesContainer from '../components/ParticlesContainer';

// motion
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className='h-full bg-base'>
      <div className='w-[1200px] h-full absolute right-[10%] bottom-0'>
        {/* bg img */}
        <div className='bg-explosion bg-cover bg-right bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 animate-pulse'></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar */}
        <motion.div
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          className='absolute bottom-0 right-[10%]'
          transition={{ duration: 1.2, ease: 'easeInOut' }}
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
