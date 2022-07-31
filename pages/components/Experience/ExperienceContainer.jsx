import React from 'react'
import { ExperienceItem } from './ExperienceItem'

const ExperienceContainer = ({data}) => {
    return (
        <div id='experience' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                    Experience
                </p>
                <h2 className='py-4'>What I've Been Upto</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                {data.map((item, index) => 
                <ExperienceItem key={index} title={item?.title} content={item?.content}  />)}                    
                </div>
            </div>
        </div>
    )
}

export default ExperienceContainer