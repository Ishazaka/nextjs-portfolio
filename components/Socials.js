// links
import Link from 'next/link';

// icons
import {

  RiLinkedinFill,
  RiGithubLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.linkedin.com/in/isha-z/'} target="_blank" className='hover:text-accent transition-all duration-300'>
        <RiLinkedinFill style={{fontSize: '30px' }}/>
      </Link>
      <Link href={'https://github.com/Ishazaka'} target="_blank" className='hover:text-accent transition-all duration-300'>
        <RiGithubLine  style={{fontSize: '30px' }}/>
      </Link>
   
      <Link href={'https://codinglamp.com/'} target="_blank" className='hover:text-accent transition-all duration-300'>
        <h5>MyTech Articles</h5>
      </Link>
    
    </div>
  );
};

export default Socials;
