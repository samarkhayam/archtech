import React from 'react'

const Contact = () => {

    const contacts = [
        {
            title : "Email",
            link : "mailto:samarkhayam05@gmail.com",
            icon : "fa-solid fa-envelope",
            add : "samarkhayam05@gmail.com",
            isLink: true
        },
        {
            title : "LinkedIn",
            link : "https://linkedin.com/in/samarkhayam",
            icon : "fa-brands fa-linkedin",
            add : "in/samarkhayam",
            isLink: true
        },
        {
            title : "GitHub",
            link : "https://github.com/samarkhayam",
            icon : "fa-brands fa-github",
            add : "github.com/samarkhayam",
            isLink: true
        },
        {
            title : "Location",
            icon : "fa-solid fa-location-dot",
            address : "Mandi Bahauddin, Pakistan",
            isLink: false
        }
    ]

  return (
    <div className='min-h-screen sm:py-20 w-full px-5 pt-10 sm:px-10 md:px-15 lg:px-25 xl:px-35 bg-[#0a0a14] text-white' id='contact'>
        
        <div className='w-full text-center mt-14'>
            <h1 className='text-4xl sm:text-5xl font-bold tracking-tight'>Let's Connect</h1>
            <div className='h-1 w-20 bg-[#a855f7] mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]'></div>
            <p className='text-[#94a3b8] text-lg mt-6'>
                Open to internship opportunities and collaborations
            </p>
        </div>

        <div className='mt-16 flex flex-col lg:flex-row gap-12'>
            
           
            <div className='flex-1 grid grid-cols-1 gap-6'>
                {contacts.map((cont) => (
                    <div key={cont.title} className='bg-[#16162a] border border-white/5 p-6 rounded-2xl flex items-center gap-5 transition-all duration-300 hover:border-[#a855f7]/30 group'>
                        <div className='bg-[#a855f7]/10 w-14 h-14 rounded-xl flex items-center justify-center text-[#a855f7] shrink-0 shadow-lg shadow-purple-500/10 group-hover:bg-[#a855f7] group-hover:text-white transition-all'>
                            <i className={`${cont.icon} text-2xl`}></i>
                        </div>
                        <div className='overflow-hidden'>
                            <h3 className='text-[#94a3b8] text-sm font-semibold uppercase tracking-wider transition-colors group-hover:text-white'>
                                {cont.title}
                            </h3>
                            {cont.isLink ? (
                                <a href={cont.link} target='_blank' rel="noopener noreferrer" className='text-white hover:text-[#a855f7] transition-colors block truncate text-lg font-medium'>
                                    {cont.add}
                                </a>
                            ) : (
                                <p className='text-white text-lg font-medium'>
                                    {cont.address}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>


            

            {/* -------------------------contactForm--------------------------- */}
            <div className='flex-1 bg-[#16162a] border border-white/5 p-8 rounded-3xl shadow-xl'>
                <form className='flex flex-col gap-5'>
                    <div>
                        <label className='text-sm font-medium text-[#94a3b8] block mb-2'>Full Name</label>
                        <input 
                            type="text" 
                            className='w-full bg-[#0a0a14] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all'
                            placeholder=''
                        />
                    </div>
                    <div>
                        <label className='text-sm font-medium text-[#94a3b8] block mb-2'>Email Address</label>
                        <input 
                            type="email" 
                            className='w-full bg-[#0a0a14] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all'
                            placeholder=''
                        />
                    </div>
                    <div>
                        <label className='text-sm font-medium text-[#94a3b8] block mb-2'>Message</label>
                        <textarea 
                            rows="4"
                            className='w-full bg-[#0a0a14] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all resize-none'
                            placeholder=''
                        ></textarea>
                    </div>
                    <button 
                        type="button" 
                        className='bg-[#a855f7] text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-500/20 hover:bg-[#9333ea] transition-all active:scale-95'
                    >
                        Send Message
                    </button>
                </form>
            </div>

        </div>

        {/* foooter */}
        <div className='mt-20 py-8 border-t border-white/5 text-center text-[#94a3b8] text-sm'>
            <p>© 2026 Muhammad Samar Khayam. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Contact