// link
import Link from 'next/link';
// fonts
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

// const quicksand = Quicksand({
//   subsets: ['latin'],
//   variable: '--font-quicksand',
// });

const Layout = ({ children }) => {
  return (
    <div className={`page ${poppins.variable} font-poppins`}>
      <nav>
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/work'}>Work</Link>
        <Link href={'/contact'}>Contact</Link>
      </nav>
      {children}
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
