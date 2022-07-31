import React from 'react'

export const ExperienceItem = ({ title, content }) => {
    return (
        <div>
            <div className='h-[40vh] w-full shadow-xl shadow-gray-400 rounded-xl p-4 group bg-gradient-to-r from-[#5651e5] to-[#709dff] hover:scale-105 ease-in duration-300'>
                <div className='flex flex-col items-center justify-center'>
                    <h3 className='text-2xl text-white tracking-wider'>{title}</h3>
                </div>
                <div className='pb-4 pt-3 text-white text-center' 
                dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    )
}
