import React from 'react'

const Hero = () => {
  return (
    <div id='hero' className='px-10 sm:px-15 md:px-30 lg:px-45 xl:px-60 min-h-screen flex flex-col sm:pt-10 justify-center w-full bg-[#0a0a14] text-white'>
        
        
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#a855f7] opacity-10 blur-[120px] rounded-full -z-10"></div>
        <h1 className='text-[45px] sm:text-7xl text-center font-extrabold tracking-tight lg:px-20'> 
            Muhammad Samar Khayam
        </h1>

        <h2 className='text-[#a855f7] mt-4 text-2xl sm:text-3xl text-center font-semibold tracking-wide uppercase italic'>
            Frontend Developer
        </h2>

        <p className='text-center text-xl sm:text-2xl mt-8 text-[#94a3b8] max-w-3xl mx-auto leading-relaxed'>
            Software Engineering student learning to build beautiful web experiences. Currently building projects and seeking opportunities to grow.
        </p>

        <div className='mt-16 flex flex-col sm:flex-row items-center justify-center gap-5'>

            <a 
                href="#projects" 
                className='w-full sm:w-auto bg-[#a855f7] hover:bg-[#9333ea] px-8 rounded-xl font-bold h-14 cursor-pointer inline-flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)]'
            >
                View Projects
            </a>

            <a 
                href="#contact" 
                className='w-full sm:w-auto text-[#a855f7] border-2 border-[#a855f7]/30 hover:border-[#a855f7] px-8 rounded-xl font-bold h-14 cursor-pointer inline-flex items-center justify-center transition-all duration-300 hover:bg-[#a855f7]/5'
            >
                Get in Touch
            </a>
        </div>
    </div>
  )
}

export default Hero