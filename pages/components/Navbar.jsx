import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Social from './Social';

const Navbar = ({ contactInfo, tagline, logo }) => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const toggleMobileNav = () => {
    setNav(!nav);
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow)
  }, [])

  return (
    <div style={{ backgroundColor: '#ecf0f3' }} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'} >
      {/*DESKTOP NAVBAR*/}
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        {/*Lazy Loading Images*/}
        <Link href='/' >
          <a>
            <Image
              loader={() => logo?.mediaItemUrl}
              src={logo?.mediaItemUrl}
              alt='/'
              width='125'
              height='50' />
          </a>
        </Link>
        <div>
          {/*Hidden because of mobile first approach and anything beyond md screen make it flex */}
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
            </Link>
            <Link href='/#experience'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Experience</li>
            </Link>
            <Link href='/#projects'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
            </Link>
            <Link href='/#contact'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
            </Link>
          </ul>
          {/*Make this hidden from medium screens*/}
          <div onClick={toggleMobileNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/*MOBILE NAVBAR*/}
      {/*Backdrop*/}
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        {/*Mobile Menu Body*/}
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
          : 'fixed left-[-100%] top-0 bg-[#ecf0f3] p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <a>
                  <Image
                    loader={() => logo?.mediaItemUrl}
                    src={logo?.mediaItemUrl}
                    alt='/'
                    width='87'
                    height='35'
                  />
                </a>
              </Link>
              <div onClick={toggleMobileNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-400 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                {tagline}
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>About</li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Skills</li>
              </Link>
              <Link href='/#experience'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Experience</li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Projects</li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Contact</li>
              </Link>
            </ul>
            <div className='pt-20'>
              <p className='uppercase tracking-widest text-[#5651e5]'>Let&apos;s Connect</p>
              <Social data={contactInfo} isNav={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar