import React from 'react'
import SkillsItem from './SkillsItem';

const SkillsContainer = () => {

  const skillsArray = [
    {
      'skillName': 'HTML',
      'skillImage': '/../public/assets/skills/html.png'
    },
    {
      'skillName': 'CSS',
      'skillImage': '/../public/assets/skills/css.png'
    },
    {
      'skillName': 'Javascript',
      'skillImage': '/../public/assets/skills/javascript.png'
    },
    {
      'skillName': 'ReactJS',
      'skillImage': '/../public/assets/skills/react.png'
    },
    {
      'skillName': 'NodeJS',
      'skillImage': '/../public/assets/skills/node.png'
    },
    {
      'skillName': 'NextJS',
      'skillImage': '/../public/assets/skills/nextjs.png'
    },
    {
      'skillName': 'Github',
      'skillImage': '/../public/assets/skills/github1.png'
    }
  ]

  return (
    <div className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#]'>
          Skills
        </p>
        <h2 className='py-4'>What Can I Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {
            skillsArray.map((item, index) => 
            <SkillsItem key={index} skillImage={item.skillImage} skillName={item.skillName} />)
          }
        </div>
      </div>
    </div>
  )
}

export default SkillsContainer;