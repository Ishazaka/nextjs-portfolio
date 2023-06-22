// fonts
import { Sora } from '@next/font/google';

// components
import Header from './Header';
import Nav from './Nav';
import TopLeftImg from './TopLeftImg';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site bg-cover bg-no-repeat bg-blend-color-dodge ${sora.variable} font-sora relative`}
    >
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
