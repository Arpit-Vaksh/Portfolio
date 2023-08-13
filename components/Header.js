// next link
import Link from 'next/link';

// components
import Socials from '../components/Socials'



const Header = () => {
  return <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-y-4 py-4'>
        {/* Text */}
        <Link href={'/'}>
             <h1 className='text-2xl'><span className='text-3xl font-bold mr-1'>arpit</span>{" "}Vaksh<span className='text-4xl font-bold text-accent'>.</span></h1>   {/* logo */}
          </Link>
        {/* Social */}
        <Socials />
      </div>
    </div>
  </header>;
};

export default Header;
