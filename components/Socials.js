// links
import Link from 'next/link';

// icons
import{
  SiInstagram,
  SiGithub,
  SiLeetcode,
  SiHackerrank,
  SiGmail,
} from 'react-icons/si';


const Socials = () => {
  return <div className='flex items-center gap-x-5 text-lg'>
    <Link href={'https://github.com/arpit-vaksh'} className='hover:text-accent transition-all duration-300'>
      <SiGithub/>
    </Link>
    <Link href={'https://leetcode.com/Arpit_Vaksh'} className='hover:text-accent transition-all duration-300'>
      <SiLeetcode/>
    </Link>
    <Link href={'https://www.hackerrank.com/arpit_vaksh'} className='hover:text-accent transition-all duration-300'>
      <SiHackerrank/>
    </Link>
    <Link href={'mailto:arpitvaksh29@gmail.com?subject=Portfolio%20Lead%20!'} className='hover:text-accent transition-all duration-300'>
      <SiGmail/>
    </Link>
    <Link href={'https://www.instagram.com/arpit_vaksh/'} className='hover:text-accent transition-all duration-300'>
      <SiInstagram/>
    </Link>
  </div>;
};

export default Socials;
