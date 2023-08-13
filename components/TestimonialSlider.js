// next Image
import Image from 'next/image'

// swiper
import {Swiper, SwiperSlide} from 'swiper/react';

// swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// required modules
import {Navigation, Pagination } from 'swiper';

// icons
import {FaQuoteLeft} from 'react-icons/fa';

// testimonial data
const testimonialData = [
  {
    img: '/Cus1.png',
    name: 'Sourav Sharma',
    position: 'Customer',
    message:
      'Impressed with the sleek designs and smooth functionality you brought to our website. Your work as a freelance web designer truly elevated our online presence.',
  },
  {
    img: '/Cus2.png',
    name: 'Prashant Bhardwaj',
    position: 'Customer',
    message:
      'Your front-end development skills are top-notch! The responsiveness and user experience of the site you designed are outstanding.',
  },
  {
    img: '/Cus3.png',
    name: 'Ambuj Sharma',
    position: 'Customer',
    message:
      'Working with you was a breeze. Your creativity, attention to detail, and timely deliveries make you an exceptional freelance web designer and front-end developer.',
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
    navigation={true}
    pagination={{
      clickable: true,
    }}
    modules={[Navigation, Pagination]}
    className='h-[280px] sm:h-[480px]'
    >
      {testimonialData.map((person, index) => {
        return(
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16 '>
              {/* avatar, name, position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  {/* avatar */}
                    <div className='mb-2 mx-auto'>
                      <Image src={person.img} width={100} height={100}  alt='' className='rounded-full'/>
                    </div>
                  {/* name */}
                    <div className='text-lg'>{person.name}</div>
                  {/* position */}
                    <div className='text-[12px] font-extralight uppercase tracking-widest'>{person.position}</div>
                </div>
              </div>
              {/* message */}
              <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[100px] relative xl:pl-20'>
                {/* quote icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0'/>
                </div>
                  {/* message */}
                  <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
};

export default TestimonialSlider;
