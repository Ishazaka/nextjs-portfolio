// link
import Link from 'next/link';
// fonts
import { Poppins } from '@next/font/google';

// components
import Header from './Header';
import Nav from './Nav';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const Layout = ({ children }) => {
  return (
    <div className={`page ${poppins.variable} font-poppins`}>
      <Nav />
      <Header />
      {children}
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
