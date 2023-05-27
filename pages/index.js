import Image from 'next/image';
import ParticlesContainer from '../components/ParticlesContainer';

// motion
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className='h-full bg-base text-white'>
      <div className='w-full h-full bg-gradient-to-r from-base via-black to-black/10 pl-64'>
        <div className='flex flex-col justify-center h-full max-w-[40%]'>
          <h1 className='text-6xl mb-8 leading-tight font-semibold'>
            Transforming Ideas <br /> Into Digital Reality
          </h1>
          <p className='max-w-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eos
            adipisci, maiores atque deleniti voluptatibus optio.
          </p>
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
