// link
import Link from 'next/link';

// router
import { useRouter } from 'next/router';

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
  { name: 'services', path: '/services', icn: <HiRectangleGroup /> },
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
  const router = useRouter();
  const pathname = router.pathname;

  return (
    // nav
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
      {/* nav inner */}
      <div className='flex flex-row w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40  xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl text-white xl:rounded-full'>
        {links.map((link, index) => {
          return (
            <Link
              href={link.path}
              className={`${
                link.path === pathname && 'text-accent'
              } relative flex items-center group hover:text-accent transition-all duration-300`}
              key={index}
            >
              {/* tooltip */}
              <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
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
