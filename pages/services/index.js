// components
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';

// import motion
import { motion } from 'framer-motion';

// import variants
import { fadeIn } from '../../variants';

const Services = () => {
  return (
    <div className='h-full bg-primary/30 py-36 text-white flex items-center'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          <div className='flex xl:w-[30vw] flex-col text-center lg:text-left mb-4 xl:mb-0'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial={'hidden'}
              animate={'show'}
              exit={'hidden'}
              className='h2 xl:mt-8'
            >
              <span className='text-accent'>My</span> services
              <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.3)}
              initial={'hidden'}
              animate={'show'}
              exit={'hidden'}
              className='mb-4 max-w-[400px] mx-auto lg:mx-0'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              minima quae fuga ipsum voluptatem adipisci.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial={'hidden'}
            animate={'show'}
            exit={'hidden'}
            className='w-full xl:max-w-[65%]'
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      {/* bulb */}
      <Bulb />
    </div>
  );
};

export default Services;
