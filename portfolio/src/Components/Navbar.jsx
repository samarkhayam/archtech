import React, { useEffect, useState } from 'react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='fixed w-full z-20 flex items-center flex-wrap md:flex-nowrap gap-2 px-5 sm:px-10 md:px-15 lg:px-10 xl:px-15 pt-3 pb-3 min-h-16 bg-[#0a0a14]/90 backdrop-blur-md border-b border-white/5'>
        <div className='w-full md:w-auto flex justify-between items-center '>
            <span className='font-bold text-2xl text-[#a855f7] sm:text-3xl cursor-context-menu tracking-tight'>
                <a href="#hero">Portfolio</a>
            </span>
            <button className='md:hidden text-2xl sm:text-3xl cursor-pointer text-[#94a3b8]'
                onClick={() => setIsOpen(!isOpen)}>
                <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
        </div>

        <ul className={`md:flex-1 ${isOpen ? "flex" : "hidden"} flex-col w-full md:w-auto justify-end items-center md:flex md:flex-row gap-2 md:gap-8 lg:gap-12 xl:gap-15 text-lg font-medium transition-all duration-500 mt-4 md:mt-0 pb-4 md:pb-0`}>
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item} onClick={() => setIsOpen(false)} className='w-full md:w-auto text-center'>
                    <a className='w-full h-full block text-[#94a3b8] hover:text-[#a855f7] transition-colors duration-200' 
                       href={`#${item.toLowerCase()}`}>
                        {item}
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}