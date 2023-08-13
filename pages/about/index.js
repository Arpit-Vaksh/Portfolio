/* eslint-disable react/jsx-key */
import React, {useState} from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from 'react-icons/fa';

import{
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiPython,
  SiTailwindcss,
  SiJavascript,
} from 'react-icons/si';

//  data

export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Programming Languages',
        // eslint-disable-next-line react/jsx-key
        icons: ["C", <SiPython />, <SiJavascript />],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiTailwindcss />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'Data Science',
        skill: [ 'Data Analysis, ', 'Data Visualization, ', 'Machine Learning and AI, '],
      },
    ],
  },

  {
    title: 'Education',
    info: [
      {
        title: 'Computer Science and Engineering (Data Science)',
        place: 'ABES Engineering College, Ghaziabad',
        year: '2020-2024',
      },
      {
        title: 'Senior Secondary(12th)-CBSE with 90%',
        place:'Himalaya Public Sr. Sec School, New Delhi',
        year: '2020',
      },
      {
        title: 'Secondary(10th)-ICSE with 74%',
        place: 'Seventh Day Adventist Inter College, Roorkee',
        year: '2018',
      },
    ],
  },
  // {
  //   title: 'Projects',
  //   info: [
  //     {
  //       title: 'Real Time Reviews Sentiment Analysis',
  //       tech: 'Machine Learning, NLP',
  //       description: ': Used NLP and deep learning techniques such as CNN, LSTM, etc. The output is given in the form web app using the flask app which gives insights about the product.',
  //     },
  //     {
  //       title: 'Student Dashboard-(Raah)-The Mentorship Portal',
  //       tech: 'MERN Stack, UI/UX',
  //       description: 'The webapp allows students to provide their details such as skill set, certification, and other required information, which can be accessed by mentors. The website design is adaptable to different screen sizes and ensures an optimal user experience.',
  //     },
  //     {
  //       title: 'Desktop Assistant',
  //       tech: 'Python, Machine Learning, AI, Speech Recognition',
  //       description: 'Used NLP and Machine Learning techniques to provide users with a seamless and personalized experience. The assistant can perform a variety of tasks, such as answering questions, providing weather updates, setting reminders, playing music, and opening applications.',
  //     },
  //   ],
  // },
  {
    title: 'experience',
    info: [
      {
        title: 'DataVerse - The Data Science Community of ABESEC',
        designation: 'Founder & Vice President',
        duration: 'Nov 2022 - Present',
        description: 'Managed cross-functional team of 50+ students. I Brought together individuals with a passion for exploring, analyzing, and interpreting data to solve complex problems through collaborative learning, DataVerse is committed to fostering the growth and development of the next generation of Data Scientists. And designed training and peer-mentoring program.'
      },
      {
        title: 'Glorious Insights Pvt. Ltd, NOIDA, IND',
        designation: 'Technical Associate (Intern)',
        duration: 'Jul 2021 - Sept 2021',
        description: 'As an intern in Data Annotation, I supported the Research and Development Team in improving the accuracy and quality of deep learning models for achieving outstanding performance in projects and competitions. Utilizing in-house tools, I accurately annotated and labeled data to ensure data integrity.'
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Data Science and Machine Learning',
        stage:'ABESEC',
      },
      {
        title: 'Programming Essentials in Python ',
        stage:'CISCO',
      },
      {
        title: 'Cyber Security Essentials',
        stage: 'CISCO',
      },
      {
        title: 'Big Data Analytics ',
        stage: 'Great Learning',
      },
      {
        title: 'SQL (Basic) ',
        stage:'HackerRank',
      },
      {
        title: 'SQL (Intermediate) ',
        stage: 'HackerRank',
      },
      {
        title: 'MERN Training',
        stage: 'ABESEC',
      },
    ],
  },
];


// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles'

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from '../../variants';



const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  return <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
    <Circles />
    {/* avatar img  */}
    <motion.div variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className='hidden xl:flex absolute bottom-0 -right-[50px] transform -scale-x-100'>
      <Avatar />
    </motion.div>

    <div className='container mx-auto h-full flex flex-col items-center xl:items-start gap-y-6'>
      <motion.div variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className='flex-1 flex flex-col justify-center max-h-[80px] my-5'>
        <h2 className='font-bold text-[15px] xl:text-[30px]'>Blending creativity and data, I bridge the gap between <br></br> <span className='text-accent text-2xl md:text-4xl'>Front-End Development & Data Science</span></h2>
        <p>crafting meaningful experiences through code and insights.</p>
      </motion.div>

      <div className='flex flex-col w-full xl:max-w-[60%] h-[400px] items-center md:items-start'>
        <motion.div variants={fadeIn('left', 0.4)} initial='hidden' animate='show' exit='hidden' className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 ml-4'>
          {aboutData.map((item, itemIndex) =>{
            return (
            <div
              key={itemIndex}
              className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={()=> setIndex(itemIndex)}
            >
              {item.title}
            </div>
            );
          } )}
        </motion.div>
        <motion.div variants={fadeIn('up', 0.4)} initial='hidden' animate='show' exit='hidden' className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center md:items-start bg-slate-300/10 shadow-2xl shadow-indigo-500/50 rounded-2xl p-4 lg:min-h-[350px] lg:min-w-[1000px]'>
          {aboutData[index].info.map((item, itemIndex)=>
          {
            return (
              <div  key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center md:items-start text-white/60 '>
                {/* Title */}
                <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                <div className='hidden md:flex'>-</div>
                <div>
                <div className='text-white'>{item.skill}</div>
                <div className='hidden xl:flex'>{item.description}</div>
                </div>

                <div>
                <div>{item.place}</div>
                <div>{item.year}</div>
                <div>{item.duration}</div>
                <div className='hidden xl:flex'>{item.stage}</div>
                </div>

                <div className='flex gap-x-4'>
                {/* icons */}
                {item.icons?.map((icon, itemIndex)=>
                {
                  return <div className='text-2xl text-white'>{icon}</div>;
                })}

                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </div>
  </div>
};

export default About;
