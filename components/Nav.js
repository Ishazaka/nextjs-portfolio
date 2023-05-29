// link
import Link from 'next/link';
import { useState } from 'react';

// icons
import {
  HiHome,
  HiUser,
  HiBriefcase,
  HiViewColumns,
  HiRectangleGroup,
  HiSwatch,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav links
const links = [
  { name: 'home', path: '/', icn: <HiHome /> },
  { name: 'about', path: '/about', icn: <HiUser /> },
  { name: 'resume', path: '/resume', icn: <HiBriefcase /> },
  { name: 'services', path: '/services', icn: <HiRectangleGroup /> },
  { name: 'skills', path: '/skills', icn: <HiSwatch /> },
  { name: 'work', path: '/work', icn: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icn: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icn: <HiEnvelope />,
  },
];

const Nav = () => {
  const [index, setIndex] = useState(0);
  return (
    // nav
    <nav className='flex flex-col items-center justify-center gap-y-4 fixed right-[2%] z-10 top-0 w-16 h-screen'>
      {/* nav inner */}
      <div className='flex flex-col items-center justify-center gap-y-6 w-full h-max py-4 bg-white/10 backdrop-blur-sm  text-white text-xl rounded-full'>
        {links.map((link, itemIndex) => {
          return (
            <Link
              href={link.path}
              className={`${
                index === itemIndex && 'text-accent'
              } relative flex items-center group hover:text-accent transition-all duration-300`}
              key={itemIndex}
              onClick={() => setIndex(itemIndex)}
            >
              {/* tooltip */}
              <div className='absolute pr-14 right-0 hidden group-hover:flex'>
                <div className='bg-white relative flex items-center p-[6px] rounded-[3px] text-primary'>
                  <div className='text-[12px] leading-none font-semibold capitalize'>
                    {link.name}
                  </div>
                  <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
                </div>
              </div>
              <div>{link.icn}</div>
            </Link>
          );
        })}
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
