import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div className='page'>
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
