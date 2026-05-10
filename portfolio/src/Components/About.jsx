import React from 'react'

const About = () => {
  return (
    <div id='about' className='min-h-[calc(100vh-64px)] sm:min-h-auto sm:py-20 w-full px-5 pt-5 sm:px-10 md:px-15 lg:px-25 xl:px-35 bg-[#0a0a14] text-white'>
      
      <div className='w-full text-center mt-14'>
        <h1 className='text-4xl sm:text-5xl font-bold tracking-tight'>About Me</h1>
        <div className='h-1 w-20 bg-[#a855f7] mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]'></div>
      </div>

      <div className='mt-10 sm:mt-20 flex flex-col md:flex-row gap-8'>
        
      {/* ------------study------------- */}
        <section className='p-8 bg-[#16162a] border border-white/5 rounded-3xl md:w-1/2 hover:border-[#a855f7]/30 transition-all duration-300 group'>
          <div className='flex items-center gap-3 mb-5'>
            <i className="fa-solid fa-graduation-cap text-[#a855f7] text-2xl"></i>
            <h2 className='text-3xl font-semibold text-[#a855f7]'>Education</h2>
          </div>
         
          <div className='mb-6'>
            <h3 className='text-xl font-medium text-white'>Bachelor's in Software Engineering</h3>
            <p className='text-[#94a3b8]'>University of Rasul</p>
            <p className='text-[#a855f7]/80 font-mono text-sm'>2023 - 2027 (Expected)</p>
          </div>

          
          <div className='pt-4 border-t border-white/5'>
            <h3 className='text-xl font-medium text-white'>Intermediate in Computer Science (ICS)</h3>
            <p className='text-[#94a3b8]'>PGC Mandi Bahauddin</p>
            <p className='text-[#a855f7]/80 font-mono text-sm'>Completed 2023</p>
          </div>
        </section>
      {/* ------------------journey--------------------- */}
        <section className='p-8 bg-[#16162a] border border-white/5 rounded-3xl md:w-1/2 hover:border-[#a855f7]/30 transition-all duration-300'>
          <div className='flex items-center gap-3 mb-5'>
            <i className="fa-solid fa-rocket text-[#a855f7] text-2xl"></i>
            <h2 className='text-3xl font-semibold text-[#a855f7]'>Journey</h2>
          </div>

          <div className='space-y-6'>
            
            <div className='relative pl-6 border-l-2 border-[#a855f7]/30'>
              <div className='absolute -left-2.25 top-1 w-4 h-4 rounded-full bg-[#a855f7] shadow-[0_0_10px_rgba(168,85,247,0.5)]'></div>
              <h3 className='text-white font-bold'>The Beginning (2021-2023)</h3>
              <p className='text-[#94a3b8] text-sm'>
                Started with ICS, building a strong foundation in Computer Science and logic.
              </p>
            </div>


            <div className='relative pl-6 border-l-2 border-[#a855f7]/30'>
              <div className='absolute -left-2.25 top-1 w-4 h-4 rounded-full bg-[#a855f7] shadow-[0_0_10px_rgba(168,85,247,0.5)]'></div>
              <h3 className='text-white font-bold'>Software Engineering (Current)</h3>
              <p className='text-[#94a3b8] text-sm'>
                Pursuing a Bachelor's at the University of Rasul, diving deep into React and modern web ecosystems.
              </p>
            </div>


            <div className='relative pl-6'>
              <div className='absolute -left-2.25 top-1 w-4 h-4 rounded-full bg-[#a855f7] animate-pulse'></div>
              <h3 className='text-[#a855f7] font-bold'>The Goal</h3>
              <p className='text-[#94a3b8] text-sm italic'>
                Actively mastering Frontend ecosystems while expanding into Backend architecture. My mission is to build end-to-end, scalable applications that solve real-world problems.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default About