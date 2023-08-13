/* eslint-disable react/no-unescaped-entities */
// components
import Circles from '/components/Circles';
import Bulb from '/components/Bulb';

//  icons
import {BsArrowRight} from 'react-icons/bs';

// variants
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xoqoewrv");
  if (state.succeeded) {
      return (
      <div className='flex flex-col h-full text-center justify-center mx-10'>
        <motion.h2 variants={fadeIn('up', 0.4)} initial='hidden' animate='show' exit='hidden' className='h2'>
          Thank you for your message.<br></br><span className='text-accent'>Have a Great Day.</span>
        </motion.h2>
      </div>
        );
  }


  return <div className='h-full bg-primary'>
    <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
      <div className='flex flex-col w-full max-w-[700px]'>
        <motion.h2 variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit='hidden' className='h2 text-center mt-10 '>
          Let's <span className='text-accent'>Connect.</span>
        </motion.h2>

        <motion.form onSubmit={handleSubmit} method='POST' variants={fadeIn('up', 0.4)} initial='hidden' animate='show' exit='hidden' className='flex-1 flex flex-col gap-4 w-full mx-auto'>
          {/* input group */}
          <div className='flex gap-x-6 w-full'>
            <input type='text' id='name' name='name' placeholder='Name' className='input' required></input>
            <input type='email' id='email' name='email' placeholder='Email' className='input' required></input>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
            <input type='text' id='subject' name='subject' placeholder='subject' className='input' required></input>
            <textarea id='message' name='message' placeholder='Write a message.' className='textarea' rows={4} cols={80} required></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type='submit' disabled={state.submitting} className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let's Talk</span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
            </button>
        </motion.form>
      </div>
      <Circles/>
      <Bulb/>
    </div>
  </div>;
};

export default Contact;


