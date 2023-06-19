// next img
import Image from 'next/image';

const TopLeftImg = () => {
  return (
    <div className='absolute -top-20 xl:-top-40 -left-32 -rotate-[70deg] mix-blend-color-dodge opacity-60'>
      <Image
        src={'/top-left-img.png'}
        width={500}
        height={400}
        className='translate-z-0'
        alt=''
      />
    </div>
  );
};

export default TopLeftImg;
