// next image
import Image from 'next/image';
import TopLeftImg from '../../components/TopLeftImg';
import BottomRightImg from '../../components/BottomRightImg';

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
        <div className='text-center xl:text-left mb-8 xl:mb-0'>
          <h1 className='h1'>
            My <span className='text-accent'>work.</span>
          </h1>
          <p className='max-w-[500px] mx-auto xl:mx-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            sunt ipsum maiores eius, unde minima omnis provident repudiandae.
          </p>
        </div>
        {/* project grid */}
        <div className='flex flex-wrap max-w-2xl gap-6 justify-center xl:justify-end mx-auto xl:mx-0'>
          {projectData.map((project, index) => {
            return (
              <div key={index} className='relative'>
                <div className='rounded-2xl overflow-hidden mb-2 max-w-[168px] xl:max-w-none'>
                  {/* overlay */}
                  <div className='bg-primary/30 absolute w-full h-full'></div>
                  <Image src={project.img} width={300} height={300} alt='' />
                </div>
                <div className='absolute bottom-6 left-4'>
                  <div className='text-base mb-1'>{project.title}</div>
                  <div className='text-[12px] uppercase tracking-widest'>
                    {project.type}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
