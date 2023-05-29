// link
import Link from 'next/link';

// icons
import { HiHome, HiUser, HiBriefcase, HiViewColumns } from 'react-icons/hi2';

const links = [
  { name: 'home', path: '/', icn: <HiHome /> },
  { name: 'about', path: '/about', icn: <HiUser /> },
  { name: 'resume', path: '/resume', icn: <HiBriefcase /> },
  { name: 'work', path: '/work', icn: <HiViewColumns /> },
];

const Nav = () => {
  return (
    // nav
    <nav className='flex flex-col items-center justify-center gap-y-4 fixed right-[2%] z-10 top-0 w-16 h-screen'>
      {/* nav inner */}
      <div className='flex flex-col items-center justify-center gap-y-6 w-full h-max py-4 bg-white/10 backdrop-blur-sm  text-white text-xl rounded-full'>
        {links.map((link) => {
          return (
            <Link href={link.path} className='relative flex items-center group'>
              {/* tooltip */}
              <div className='absolute pr-14 right-0 hidden group-hover:flex'>
                <div className='bg-white relative flex items-center p-[6px] rounded-[3px] text-primary'>
                  <div className='text-[12px] leading-none font-semibold capitalize'>
                    {link.name}
                  </div>
                  <div class='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
                </div>
              </div>
              <div>{link.icn}</div>
            </Link>
          );
        })}
        {/* <Link href={'/contact'}>Contact</Link> */}
      </div>
    </nav>
  );
};

export default Nav;
{
  /* <Link href={'/'} className='relative flex items-center group'>
          <Link
            href={'/'}
            className='absolute pr-14 right-0 hidden group-hover:flex'
          >
            <div className='bg-white relative flex items-center p-[6px] rounded-[3px] text-primary'>
              <div className='text-[12px] leading-none font-semibold'>Home</div>
              <div class='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
            </div>
          </Link>
          <HiHome />
        </Link>
        <Link href={'/about'}>
          <HiUser />
        </Link>
        <Link href={'/resume'}>
          <HiBriefcase />
        </Link>
        <Link href={'/work'}>
          <HiViewColumns />
        </Link>
        <Link href={'/about'}>
          <HiUser />
        </Link>
        <Link href={'/work'}>
          <HiViewColumns />
        </Link> */
}
