// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// components
import Socials from './Socials';

const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center xl:h-[90px] text-white px-16 xl:px-0'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
          {/* logo */}
          <Link href={'/'}>
            <Image
              src={'/logo.svg'}
              width={220}
              height={48}
              className='w-full h-full'
              alt=''
              priority={true}
            />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
