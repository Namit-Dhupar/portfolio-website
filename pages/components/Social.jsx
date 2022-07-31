import React from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Link from 'next/link';

const SocialWrapper = ({ children, item, isNav }) => {
    return (
        <a target="_blank" href={item?.profileLink?.link} rel="noopener noreferrer">
            <div className={isNav? 'rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300' 
             : 'rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'}>
                {children}
            </div>
        </a>
    )
}

const Social = ({ data, isNav }) => {
    return (
        <div className={isNav ? 'flex items-center justify-between my-4 w-full sm:w-[80%]' 
                        : 'flex items-center justify-between max-w-[330px] m-auto py-4'} >
            {
                data.map((item, index) => {
                    if (item?.title.toUpperCase() === 'LINKEDIN') {
                        return (
                            <SocialWrapper key={index} isNav={isNav} item={item}>
                                <FaLinkedinIn />
                            </SocialWrapper>
                        )
                    }
                    if (item?.title.toUpperCase() === 'TWITTER') {
                        return (
                            <SocialWrapper key={index} isNav={isNav} item={item}>
                                <FaTwitter />
                            </SocialWrapper>
                        )
                    }
                    if (item?.title.toUpperCase() === 'GITHUB') {
                        return (
                            <SocialWrapper key={index} isNav={isNav} item={item}>
                                <FaGithub />
                            </SocialWrapper>
                        )
                    }
                    if (item?.title.toUpperCase() === 'FACEBOOK') {
                        return (
                            <SocialWrapper key={index} isNav={isNav} item={item}>
                                <FaFacebook />
                            </SocialWrapper>
                        )
                    }
                })
            }
            <Link href='/#contact'>
                <div className={isNav? 'rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300' 
             : 'rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'}>
                    <a>
                        <BsFillPersonLinesFill />
                    </a>
                </div>
            </Link>
        </div>
    )
}

export default Social