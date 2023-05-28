// link
import Link from 'next/link';

// icons
import { HiHome, HiBriefcase, HiViewColumns } from 'react-icons/hi2';

const Nav = () => {
  return (
    // nav
    <nav className='flex flex-col items-center justify-center gap-y-4 fixed right-[2%] z-10 top-0 w-16 h-screen'>
      {/* nav inner */}
      <div className='flex flex-col items-center justify-center gap-y-4 w-full h-[50vh] bg-black border border-accent text-white text-xl rounded-full'>
        <Link href={'/'}>
          <HiHome />
        </Link>
        <Link href={'/about'}>
          <HiBriefcase />
        </Link>
        <Link href={'/work'}>
          <HiViewColumns />
        </Link>
        {/* <Link href={'/contact'}>Contact</Link> */}
      </div>
    </nav>
  );
};

export default Nav;
