// next image
import Image from 'next/image';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// react countup
import CountUp from 'react-countup';
import ProjectsBtn from '../../components/ProjectsBtn';

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
          alt=''
        />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* left */}
        <div className='flex-1 xl:pt-12'>
          <h1 className='h1'>
            Captivating <span className='text-accent'>stories</span> birth
            magnificent designs.
          </h1>
          <p className='max-w-[700px] mb-12'>
            10 years ago, I began freelancing as a developer. Since then, I've
            done remote work for agencies, consulted for startups, and
            collaborated on digital products for business and consumer use. With
            quiet confidence, curiosity, and a focus on continual improvement, I
            tackle development challenges one at a time.
          </p>
          <ProjectsBtn />
        </div>
        {/* right */}
        <div className='xl:w-[45%] flex flex-col justify-center items-center xl:p-[72px]'>
          <div className='flex flex-wrap justify-center h-full w-full'>
            <div className='w-[50%] h-[120px] xl:h-[240px]  flex flex-col justify-center items-center border-b border-r border-white/10'>
              <div className='text-4xl xl:text-6xl font-bold'>11+</div>
              <div>Years of experience</div>
            </div>
            <div className='w-[50%] h-[120px] xl:h-[240px]  flex flex-col justify-center items-center border-b border-white/10'>
              <div className='text-4xl xl:text-6xl font-bold'>250+</div>
              <div>Happy clients</div>
            </div>
            <div className='w-[50%] h-[120px] xl:h-[240px]  flex flex-col justify-center items-center border-r border-white/10'>
              <div className='text-4xl xl:text-6xl font-bold'>650+</div>
              <div>Projects done</div>
            </div>
            <div className='w-[50%] h-[120px] xl:h-[240px]  flex flex-col justify-center items-center'>
              <div className='text-4xl xl:text-6xl font-bold'>8</div>
              <div>Awards</div>
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
