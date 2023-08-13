// next image
import Image from 'next/image'
import avatar from '../public/avatar.png'


const Avatar = () => {
  return <div className='hidden xl:flex xl:max-w-none'>
    <Image src={avatar} width={637} height={558} alt='Arpit' className='translate-z-0 w-full h-full'/>
  </div>;
};

export default Avatar;
