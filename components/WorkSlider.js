// next Image
import Image from 'next/image'

// swiper
import {Swiper, SwiperSlide} from 'swiper/react';

// swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// required modules
import {Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Air Quality Analysis',
          path: '/Thumb 1.png',
          link: 'https://github.com/Arpit-Vaksh/Data-Science-Projects/blob/main/Air%20Quality%20Analysis%20(Regression).ipynb',
        },
        {
          title: 'Star Wars Product Page',
          path: '/Thumb 2.png',
          link: 'https://arpit-vaksh.github.io/Star-Wars-Product-Page/',
        },
        {
          title: 'To Do List',
          path: '/Thumb 3.png',
          link: 'https://arpit-vaksh.github.io/CodeClause_project_ToDoList/',
        },
        {
          title: 'Sentiment Analysis',
          path: '/Thumb 4.png',
          link: 'https://github.com/Arpit-Vaksh/Data-Science-Projects/tree/main/flipkartsentimentanalysis',
        },
      ],
    },
    {
      images: [
        {
          title: 'Sentiment Analysis',
          path: '/Thumb 4.png',
          link: 'https://github.com/Arpit-Vaksh/Data-Science-Projects/tree/main/flipkartsentimentanalysis',
        },
        {
          title: 'DS and ML Projects',
          path: '/Thumb 5.png',
          link: 'https://github.com/Arpit-Vaksh/Data-Science-Projects',
        },
        {
          title: 'Air Quality Analysis',
          path: '/Thumb 1.png',
          link: 'https://github.com/Arpit-Vaksh/Data-Science-Projects/blob/main/Air%20Quality%20Analysis%20(Regression).ipynb',
        },
        {
          title: 'Star Wars Product Page',
          path: '/Thumb 2.png',
          link: 'https://arpit-vaksh.github.io/Star-Wars-Product-Page/',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
    spaceBetween={10}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className='h-[280px] sm:h-[480px]'
    >
      {workSlides.slides.map((slide,index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index)=> {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <div className='relative rounded-lg overflow-hidden flex items-center justify-center group ' key={index}>
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                      {/* image */}
                      <Image src={image.path} width={400} height={300} alt='' />
                      {/* overlay gradient */}
                        <Link href={image.link}>
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'>
                      <div className='absolute bottom-0 translate-y-full group-hover:translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex mx-28 mb-2 justify-center items-center gap-x-2 text-[13px] tracking-[0.2rem]'>
                          <div className='delay-100'>
                            View
                          </div>
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                            Project
                          </div>
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                            <BsArrowRight/>
                          </div>
                        </div>
                      </div>
                      </div>
                      </Link>
                    </div>
                  </div>

                )
              })}
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default WorkSlider;