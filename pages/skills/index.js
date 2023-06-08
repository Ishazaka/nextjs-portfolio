// icons
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaWordpress,
  FaFigma,
} from 'react-icons/fa';

import { SiNextdotjs, SiFramer } from 'react-icons/si';

// components
import TopLeftImg from '../../components/TopLeftImg';
import BottomRightImg from '../../components/BottomRightImg';
import Skill from '../../components/Skill';

// skill data
const skillData = [
  {
    icon: <FaReact />,
    title: 'React Js',
  },
  {
    icon: <FaHtml5 />,
    title: 'HTML 5',
  },
  {
    icon: <FaCss3 />,
    title: 'CSS 3',
  },
  {
    icon: <FaJs />,
    title: 'Javascript',
  },
  {
    icon: <SiNextdotjs />,
    title: 'Next Js',
  },
  {
    icon: <SiFramer />,
    title: 'Framer',
  },
  {
    icon: <FaWordpress />,
    title: 'Wordpress',
  },
  {
    icon: <FaFigma />,
    title: 'Figma',
  },
];

// motion
import { motion, stagger } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';

const Skills = () => {
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
          className='h1 text-center mb-4 xl:mb-14'
        >
          My <span className='text-accent'>Skills.</span>
        </motion.h1>
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial={'hidden'}
          animate={'show'}
          exit={'hidden'}
          className='flex flex-wrap justify-center gap-x-4 xl:gap-x-6 gap-y-8 xl:gap-y-12 max-w-4xl mx-auto'
        >
          {skillData.map((skill, index) => (
            <Skill skill={skill} key={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
