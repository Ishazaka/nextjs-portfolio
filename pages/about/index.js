// next image
import Image from 'next/image';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// react countup
import CountUp from 'react-countup';

const About = () => {
  return (
    <div className='h-full bg-primary py-32 text-white'>
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
        />
      </motion.div>
      <div className='container mx-auto h-full'>
        <div className='w-full h-full flex flex-col xl:flex-row'>
          <div className='flex-1 h-full flex flex-col items-center justify-center gap-y-12 text-center max-w-[80vw] mx-auto'>
            <div className='max-w-[60%]'>
              <h1 className='h1'>
                Magnificent <span className='text-accent'>designs</span> are
                born from captivating stories
              </h1>
              <p>
                Since embarking on my journey as a freelance developer nearly 10
                years ago, I've engaged in remote work for agencies, provided
                consultation for startups, and collaborated with skilled
                individuals to create digital products for both business and
                consumer applications. I possess a quiet confidence, an innate
                curiosity, and an unwavering dedication to enhancing my skills,
                tackling one development problem at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

{
  /* <div>
<div className='mb-2 text-accent'>
  <CountUp start={0} end={10} duration={8} />+
</div>
<div className='text-sm uppercase w-[160px] font-normal'>
  Years of experience
</div>
</div>
<div>
<div className='mb-2 text-accent'>
  <CountUp start={0} end={120} duration={4} />+
</div>
<div className='text-sm uppercase w-[160px] font-normal leading-normal'>
  Projects completed in 20 countries
</div>
</div> */
}
