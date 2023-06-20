// next image
import Image from 'next/image';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

const Avatar = () => {
  return (
    <>
      {/* avatar */}
      <motion.div
        variants={fadeIn('up', 0.5)}
        initial='hidden'
        animate={'show'}
        exit={'hidden'}
        className='absolute -bottom-32 lg:bottom-0 lg:right-[8%] w-full h-full max-w-[737px] max-h-[678px]'
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        {/* img */}
        <div className='hidden xl:flex xl:max-w-none'>
          <Image
            src={'/avatar.png'}
            width={737}
            height={678}
            className='translate-z-0 w-full h-full'
            alt=''
          />
        </div>
      </motion.div>
    </>
  );
};

export default Avatar;
