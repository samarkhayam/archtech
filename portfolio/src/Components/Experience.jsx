import React from 'react'

const Experience = () => {

    
    const experiences = [
        {
            company: "Arch Technologies",
            role: "Web Development Intern",
            duration: "May 2026 - Present",
            desc: "Developing responsive React applications and integrating REST APIs. Collaborating on UI/UX improvements using Tailwind CSS."
        }
    ]

    const achievements = [
        {
            title: "Autonomous Logic Implementation",
            desc: "Successfully moved beyond tutorial-based coding to architecting custom React solutions from scratch."
        },
        {
            title: "Professional UI/UX Refactoring",
            desc: "Redesigned project interfaces for high-end 'SaaS' aesthetics, prioritizing mobile-first responsiveness."
        },
    ]

    return (
        <div id='experience' className='min-h-auto py-20 w-full px-5 sm:px-10 md:px-15 lg:px-25 xl:px-35 bg-[#0a0a14] text-white'>
            
            <div className='flex flex-col md:flex-row gap-10'>
                
                {/* ----------------------Experience------------------ */}
                <div className='flex-1'>
                    <h1 className='text-3xl font-bold mb-8 flex items-center gap-3'>
                        <i className="fa-solid fa-briefcase text-[#a855f7]"></i> Experience
                    </h1>
                    <div className='flex flex-col gap-6'>
                        {experiences.map((exp) => (
                            <div key={exp.company} className='bg-[#16162a] p-6 rounded-2xl border border-white/5'>
                                <h2 className='text-xl font-bold text-[#a855f7]'>{exp.role}</h2>
                                <p className='text-white font-medium'>{exp.company}</p>
                                <p className='text-[#94a3b8] text-sm mb-4 font-mono'>{exp.duration}</p>
                                <p className='text-[#94a3b8] leading-relaxed'>{exp.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>




                {/* ---------------------Achievements---------------------- */}
                <div className='flex-1'>
                    <h1 className='text-3xl font-bold mb-8 flex items-center gap-3'>
                        <i className="fa-solid fa-trophy text-[#a855f7]"></i> Achievements
                    </h1>
                    <div className='flex flex-col gap-6'>
                        {achievements.map((achieve) => (
                            <div key={achieve.title} className='bg-[#16162a] p-6 rounded-2xl border border-white/5 border-l-4 border-l-[#a855f7]'>
                                <h2 className='text-lg font-bold text-white'>{achieve.title}</h2>
                                <p className='text-[#94a3b8] mt-1'>{achieve.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience