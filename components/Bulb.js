// next image
import Image from 'next/image';

const Bulb = () => {
  return (
    <Image
      src={'/bulb.png'}
      width={260}
      height={200}
      className='w-full h-full'
      alt=''
    />
  );
};

export default Bulb;
