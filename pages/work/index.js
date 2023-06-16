// next image
import Image from 'next/image';
import TopLeftImg from '../../components/TopLeftImg';
import BottomRightImg from '../../components/BottomRightImg';
import WorkSlider from '../../components/WorkSlider';

const projectData = [
  {
    img: '/thumb1.png',
    title: 'Lorem ipsum dolor sit amet.',
    type: 'Web Development',
  },
  {
    img: '/thumb2.png',
    title: 'Lorem ipsum dolor sit amet.',
    type: 'Web Development',
  },
  {
    img: '/thumb3.png',
    title: 'Lorem ipsum dolor sit amet.',
    type: 'Web Development',
  },
  {
    img: '/thumb4.png',
    title: 'Lorem ipsum dolor sit amet.',
    type: 'Web Development',
  },
];

const Work = () => {
  return (
    <div className='h-full bg-primary py-32 text-white flex items-center'>
      <TopLeftImg />
      <BottomRightImg />
      <div className='container mx-auto flex flex-col xl:flex-row justify-between'>
        <div className='w-[70%] mx-auto xl:mx-0  text-center xl:text-left mb-8 xl:mb-0'>
          <h1 className='h1'>
            My <span className='text-accent'>work.</span>
          </h1>
          <p className='max-w-[500px] mx-auto xl:mx-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            sunt ipsum maiores eius, unde minima omnis provident repudiandae.
          </p>
        </div>
        {/* projects */}
        <WorkSlider />
      </div>
    </div>
  );
};

export default Work;
