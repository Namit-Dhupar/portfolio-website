import React from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>
                Let's build something together
                </p>
                <h1 className='py-4 text-gray-700'>
                Hi, I'm <span className='text-[#5651e5]'>Namit</span>
                </h1>
                <h1 className='py-2 text-gray-700'>A front-End Web Developer</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet purus a nisl interdum dapibus id sed est. Phasellus eu condimentum diam. Suspendisse rhoncus mauris at tristique pharetra. Nullam at est placerat, sollicitudin ex vel, aliquet urna. Quisque ac laoreet felis. Fusce id odio eu lectus ultricies eleifend. Fusce laoreet viverra tempor. Sed blandit convallis congue. Phasellus dignissim tempor lectus.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <FaGithub />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <AiOutlineMail />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <BsFillPersonLinesFill />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main