import React from 'react'
import SkillsItem from './SkillsItem';

const SkillsContainer = ({data}) => {

  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What Can I Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {
            data.map((item, index) => 
            <SkillsItem key={index} skillImage={item?.featuredImage?.node?.mediaItemUrl} skillName={item?.title} />)
          }
        </div>
      </div>
    </div>
  )
}

export default SkillsContainer;