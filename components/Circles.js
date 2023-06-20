// next image
import Image from 'next/image';

const Circles = () => {
  return (
    <div className='absolute -left-16 -bottom-2 rotate-90 mix-blend-color-dodge duration-75 animate-pulse z-10 w-[200px] xl:w-[300px]'>
      <Image
        src={'/circles.png'}
        width={260}
        height={200}
        className='w-full h-full'
        alt=''
      />
    </div>
  );
};

export default Circles;
