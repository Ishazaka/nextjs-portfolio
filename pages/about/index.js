// next image
import Image from 'next/image';

const About = () => {
  return (
    <div className='h-full bg-primary py-32 text-white'>
      <Image
        src={'/avatar.png'}
        width={700}
        height={700}
        className='hidden xl:flex  absolute bottom-0 -left-[350px]'
      />
      <div className='container mx-auto bg-pink-50/10 h-full'>
        <div className='w-full flex'>
          <div className='flex-1'>left</div>
          <div className='flex-1'>right</div>
        </div>
      </div>
    </div>
  );
};

export default About;
