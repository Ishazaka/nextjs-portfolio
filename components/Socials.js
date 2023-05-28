// links
import Link from 'next/link';

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-white text-lg'>
      <Link href={''}>
        <RiYoutubeLine />
      </Link>
      <Link href={''}>
        <RiFacebookLine />
      </Link>
      <Link href={''}>
        <RiInstagramLine />
      </Link>
      <Link href={''}>
        <RiPinterestLine />
      </Link>
      <Link href={''}>
        <RiBehanceLine />
      </Link>
      <Link href={''}>
        <RiDribbbleLine />
      </Link>
    </div>
  );
};

export default Socials;
