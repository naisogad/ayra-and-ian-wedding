'use client'
import React, { useState } from 'react'

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const toggleNav = () => {
      setToggleMenu(!toggleMenu);
    }

  return (
    <nav>
      <div className='block relative top-0 right-0 z-2'>
        {/* MENU BUTTON*/}
        <h4 className='hidden md:block fixed rotate-90 top-[4rem] right-[1rem] z-3 cursor-pointer text-3xl uppercase text-moss' onClick={toggleNav}>Menu</h4>
        {/* MOBILE BUTTON */}
        <button className='space-y-1 fixed top-5 right-5 z-3 md:hidden' onClick={toggleNav}>
          <span className={`block h-1 w-7 bg-moss transition-all duration-400 ease-[cubic-bezier(0.77, 0.2, 0.05, 1) ${toggleMenu? 'rotate-45 translate-y-3': ''}`}></span>
          <span className={`block h-1 w-7 bg-moss transition-all duration-400 ease-[cubic-bezier(0.77, 0.2, 0.05, 1) ${toggleMenu? 'scale-0 opacity-0': ''}`}></span>
          <span className={`block h-1 w-7 bg-moss transition-all duration-400 ease-[cubic-bezier(0.77, 0.2, 0.05, 1) ${toggleMenu? '-rotate-45 -translate-y-1': ''}`}></span>
        </button>
        {/* NAV MENU */}
        <div className={`${toggleMenu? '': '-mr-480'} hidden md:block size-full fixed top-0 right-0 m-0 bg-white/70 transition-all duration-400 ease-[cubic-bezier(0.77, 0.2, 0.05, 1)]`}>
          <ul className={`${toggleMenu? 'mr-25': '-mr-90 '} hidden md:flex flex-col relative gap-6 w-80 max-h-89 mt-20 pb-100 pt-10 pl-10 float-right bg-stain transition-all duration-400 ease-[cubic-bezier(0.77, 0.2, 0.05, 1)]`}>
            <li><a className='text-3xl text-moss' onClick={toggleNav} href="#top">Home</a></li>
            <li><a className='text-3xl text-moss' onClick={toggleNav} href="#ourstory">Our Story</a></li>
            <li><a className='text-3xl text-moss' onClick={toggleNav} href="#details">Details</a></li>
            <li><a className='text-3xl text-moss' onClick={toggleNav} href="#gallery">Gallery</a></li>
            <li><a className='text-3xl text-moss' onClick={toggleNav} href="#faqs">FAQs</a></li>
            <li><a className='text-3xl text-moss' onClick={toggleNav} href="#rsvp">RSVP</a></li>
          </ul>
        </div>
      {/* MOBILE MENU */}
        <div>
          <ul className={`${toggleMenu? '': '-ml-225'} md:hidden flex flex-col fixed gap-6 w-200 h-230 mt-15 pb-10 pt-10 pl-5 float-left bg-stain transition-all duration-400 ease-[cubic-bezier(0.77, 0.2, 0.05, 1)]`}>
            <li><a className='text-3xl text-moss' onClick={toggleNav} href="#top">Home</a></li>
            <li><a className='text-3xl text-moss' onClick={toggleNav} href="#ourstory">Our Story</a></li>
            <li><a className='text-3xl text-moss' onClick={toggleNav} href="#details">Details</a></li>
            <li><a className='text-3xl text-moss' onClick={toggleNav} href="#gallery">Gallery</a></li>
            <li><a className='text-3xl text-moss' onClick={toggleNav} href="#faqs">FAQs</a></li>
            <li><a className='text-3xl text-moss' onClick={toggleNav} href="#rsvp">RSVP</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar