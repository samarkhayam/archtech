import React from 'react'

const Skills = () => {

    const skills = [
        {title: "React js", icon : "devicon-react-original colored"},
        {title: "Tailwind CSS", icon : "devicon-tailwindcss-original colored"},
        {title: "JavaScript", icon : "devicon-javascript-plain colored"},
        {title: "HTML", icon : "devicon-html5-plain colored"},
        {title: "CSS", icon : "devicon-css3-plain colored"},
        {title: "Python", icon : "devicon-python-plain colored"},
        {title: "Git / Github", icon : "devicon-git-plain colored"},
        {title: "Figma", icon : "devicon-figma-plain colored"},
    ]

  return (
    <div id='skills' className='min-h-[calc(100vh-64px)] sm:min-h-auto sm:py-20 w-full px-5 pt-5 sm:px-10 md:px-15 lg:px-25 xl:px-35 bg-[#0a0a14] text-white'>
        
        <div className='w-full text-center mt-14'>
            <h1 className='text-4xl sm:text-5xl font-bold tracking-tight'>Skills</h1>
            <div className='h-1 w-20 bg-[#a855f7] mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]'></div>
        </div>

        <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-6 mt-16'>
            {
                skills.map((skill)=>(
                <div key={skill.title} 
                     className='bg-[#16162a] border border-white/5 p-6 text-center rounded-2xl flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:border-[#a855f7]/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] group'>
                    
                    <div className='text-5xl transition-transform duration-300 group-hover:rotate-12'>
                        <i className={`${skill.icon}`}></i>
                    </div>
                    
                    <p className='text-[#94a3b8] font-medium group-hover:text-white transition-colors'>
                        {skill.title}
                    </p>
                </div>
                ))
            }
        </div>
    </div>
  )
}

export default Skills