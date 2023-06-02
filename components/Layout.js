// fonts
import { Sora } from '@next/font/google';

// components
import Header from './Header';
import Nav from './Nav';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const Layout = ({ children }) => {
  return (
    <div className={`page ${sora.variable} font-sora`}>
      <Nav />
      <Header />
      {children}
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
