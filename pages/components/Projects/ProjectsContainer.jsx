import React from 'react'
import ProjectItem from './ProjectItem'
import propertyImage from '../../../public/assets/projects/property.jpg'
import cryptoImage from '../../../public/assets/projects/crypto.jpg'
import netflixImage from  '../../../public/assets/projects/netflix.jpg'
import twitchImage from '../../../public/assets/projects/twitch.jpg'

const ProjectsContainer = () => {
    const ProjectArray = [
        {
            'projectImage': propertyImage,
            'projectTitle': 'Property Finder',
            'projectTechnology': 'ReactJS',
            'projectUrl': '/property'
        },
        {
            'projectImage': cryptoImage,
            'projectTitle': 'Crypto Site',
            'projectTechnology': 'NextJS',
            'projectUrl': '/crypto'
        },
        {
            'projectImage': netflixImage,
            'projectTitle': 'Netflix Clone',
            'projectTechnology': 'AngularJS',
            'projectUrl': '/netflix'
        },
        {
            'projectImage': twitchImage,
            'projectTitle': 'Twitch Clone',
            'projectTechnology': 'NodeJS',
            'projectUrl': '/twitch'
        }
    ]
    return (
        <div className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                    Projects
                </p>
                <h2 className='py-4'>What I've Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    {ProjectArray.map((item, index) =>
                     <ProjectItem 
                       key={index}
                       projectImage={item.projectImage}
                       projectTitle={item.projectTitle}
                       projectTechnology={item.projectTechnology}
                       projectUrl={item.projectUrl}
                      />)}
                </div>
            </div>
        </div>
    )
}

export default ProjectsContainer