import { HiAcademicCap, HiBriefcase } from 'react-icons/hi';
// components
import CardLeft from '../../components/CardLeft';
import CardRight from '../../components/CardRight';
import TopLeftImg from '../../components/TopLeftImg';
import BottomRightImg from '../../components/BottomRightImg';

// motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';

const educationData = [
  {
    pretitle: 'December 2000 - May 2004',
    title: 'MIT School of Engineering',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur doloremque corporis exercitationem quisquam dolore.',
  },
  {
    pretitle: 'December 2000 - May 2004',
    title: 'MIT School of Engineering',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur doloremque corporis exercitationem quisquam dolore.',
  },
  {
    pretitle: 'December 2000 - May 2004',
    title: 'MIT School of Engineering',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur doloremque corporis exercitationem quisquam dolore.',
  },
];

const employmentData = [
  {
    pretitle: 'December 2000 - May 2004',
    title: 'CM Development Solutions',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur doloremque corporis exercitationem quisquam dolore.',
  },
  {
    pretitle: 'December 2000 - May 2004',
    title: 'CM Development Solutions',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur doloremque corporis exercitationem quisquam dolore.',
  },
  {
    pretitle: 'December 2000 - May 2004',
    title: 'CM Development Solutions',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur doloremque corporis exercitationem quisquam dolore.',
  },
];

const Resume = () => {
  return (
    <div className='h-full bg-primary py-32 text-white'>
      <TopLeftImg />
      <BottomRightImg />
      <div className='container mx-auto'>
        <motion.h1
          variants={fadeIn('up', 0.2)}
          initial={'hidden'}
          animate={'show'}
          exit={'hidden'}
          className='h1 text-center mb-12'
        >
          Education & <span className='text-accent'>Experience</span>
        </motion.h1>
        {/* timeline */}
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial={'hidden'}
          animate={'show'}
          exit={'hidden'}
          className='px-4 xl:px-0'
        >
          {/* top */}
          <div className='hidden xl:flex w-full max-w-3xl mx-auto border-b border-white/10 pb-3'>
            <div className='flex-1 flex justify-between px-24'>
              <div className='flex flex-col items-center'>
                <HiAcademicCap className='text-5xl m-2' />
                <div className='text-[13px] uppercase tracking-wider'>
                  Education
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <HiBriefcase className='text-5xl m-2' />
                <div className='text-[13px] uppercase tracking-wider'>
                  Employment
                </div>
              </div>
            </div>
          </div>
          <div className='max-w-4xl mx-auto flex flex-col xl:flex-row justify-between h-[50vh] xl:h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-white/10 pr-2'>
            {/* education */}
            <div className='relative flex-1 xl:after:w-[1px] after:h-[760px] after:absolute after:bg-white/10 after:top-0 after:right-0 after:bottom-0 after:z-0'>
              <div className='p-4'>
                {/* academic mobile icon */}
                <div className='flex flex-col items-center mb-6 xl:hidden'>
                  <HiAcademicCap className='text-5xl m-2' />
                  <div className='text-[13px] uppercase tracking-wider'>
                    Education
                  </div>
                </div>
                {educationData.map((data, index) => {
                  return <CardLeft data={data} key={index} />;
                })}
              </div>
            </div>
            {/* employment mobile icon */}
            <div className='flex-1 xl:pt-20 px-4'>
              {/* employment icon */}
              <div className='flex flex-col items-center mb-6 xl:hidden'>
                <HiBriefcase className='text-5xl m-2' />
                <div className='text-[13px] uppercase tracking-wider'>
                  Employment
                </div>
              </div>
              {employmentData.map((data, index) => {
                return <CardRight data={data} key={index} />;
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
