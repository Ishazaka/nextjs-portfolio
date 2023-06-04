// next img
import Image from 'next/image';

const BottomRightImg = () => {
  return (
    <div className='hidden xl:flex absolute -right-32 -bottom-0 mix-blend-color-dodge'>
      <Image
        src={'/bottom-right-img.png'}
        width={350}
        height={272}
        className='translate-z-0'
        alt=''
      />
    </div>
  );
};

export default BottomRightImg;
