import Image from 'next/image';
import Nav from './Nav';
import Link from 'next/link';
import Socials from './Socials';

const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center h-[90px] text-white'>
      <div className='container mx-auto'>
        <div className='flex justify-between'>
          {/* logo */}
          <Link href={'/'}>
            <Image src={'/logo.svg'} width={220} height={48} alt='' />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
