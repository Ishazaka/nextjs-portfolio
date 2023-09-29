// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// components
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
          {/* logo */}
          <Link href={'/'}>
            {/* <Image
              src={'/logo.svg'}
              width={220}
              height={48}
              alt=''
              priority={true}
            /> */}
            <h2  style={{fontSize: '40px'}}>Isha Z<span style={{color: 'red'}}>.</span></h2> 
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
