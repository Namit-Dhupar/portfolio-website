import React from 'react';
import { addBrTagOnParagraphClose } from '../../js/utils';

const About = ({items, downloadResume}) => {
  const content = addBrTagOnParagraphClose(items?.[0]?.content);
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
           <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
           <h2 className='py-4'>Who I Am</h2>
           <div className='py-2 text-gray-600' dangerouslySetInnerHTML={{
            __html: content
           }} />
           <div className='text-center'>
           <a target="_blank" href={downloadResume} download='Resume' rel="noopener noreferrer">
           <button className='p-3 text-gray-100 mt-2 hover:scale-105 ease-in duration-300'>Download My Resume</button>
           </a>
           </div>           
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <img className='rounded-xl' alt='image' src={items?.[0]?.featuredImage?.node?.mediaItemUrl}></img>
        </div>
        </div>
    </div>
  )
}

export default About