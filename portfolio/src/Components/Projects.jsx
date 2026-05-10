import React from 'react'

const Projects = () => {

    const projects = [
        {
            title: "Github Profile Finder",
            icon: "fa-brands fa-github",
            built: "Solo Developer",
            description: "Search any GitHub username and instantly view their public repos, followers, bio, and activity stats. Built to practice API integration and async JavaScript.",
            feature: "Real-time search with clean error handling",
            techs: ["React", "Github API", "Tailwind CSS", "JavaScript"],
            github_Link: "https://github.com/samarkhayam/github-finder/",
            demo_Link: "https://github-finder-samar.vercel.app/",
        },
        
        {
            title: "To-Do List",
            icon: "fa-solid fa-list-check",
            built: "Solo Developer",
            description: "A functional task management app to organize daily goals. Features include adding tasks, marking them as complete, and deleting items.",
            feature: "Local state management for real-time updates",
            techs: ["React", "Tailwind CSS", "JavaScript"],
            github_Link: "", 
            demo_Link: "",
            status: "In Progress"
        },
        {
            title: "Weather App",
            icon: "fa-solid fa-cloud",
            built: "Solo Developer",
            description: "Location-based weather dashboard showing current conditions, temperature, humidity, and a 5-day forecast using the OpenWeather API.",
            feature: "Async data fetching via OpenWeather API",
            techs: ["React", "OpenWeather API", "Tailwind CSS"],
            github_Link: "",
            demo_Link: "",
            status: "Coming Soon"
        },
    ]

  return (
    <div className='min-h-[calc(100vh-64px)] sm:min-h-auto sm:py-20 w-full px-5 pt-5 sm:px-10 md:px-15 lg:px-25 xl:px-35 bg-[#0a0a14] text-white' id='projects'>
        
        <div className='w-full text-center mt-14'>
            <h1 className='text-4xl sm:text-5xl font-bold tracking-tight'>Projects</h1>
            <div className='h-1 w-20 bg-[#a855f7] mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]'></div>
        </div>

        <div className='mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
            projects.map((project)=>(
                <div key={project.title}
                 className={`bg-[#16162a] border border-white/5 rounded-2xl p-6 flex flex-col gap-4 w-full transition-all duration-300 group ${project.demo_Link ? "opacity-100 hover:border-[#a855f7]/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]" : "opacity-60 hover:opacity-100"}`}>
                    
                    <div className='w-full flex items-start gap-4'>
                        <div className='text-4xl sm:text-5xl text-[#a855f7] bg-[#a855f7]/10 p-3 rounded-xl'>
                            <i className={`${project.icon}`}></i>
                        </div>
                        <div className='flex-1'>
                            <h1 className='font-bold text-2xl text-white group-hover:text-[#a855f7] transition-colors'>
                                {project.title}
                            </h1>
                            <p className='text-[#94a3b8] text-sm uppercase tracking-wider font-semibold'>
                                {project.built}
                            </p>
                        </div>
                    </div>

                    <div className='flex-1 flex flex-col'>
                        <p className='text-[#94a3b8] text-lg leading-relaxed flex-1'>
                            {project.description}
                        </p>
                        
                        <p className='text-[13px] mt-4 bg-green-500/10 text-green-400 border border-green-500/20 w-fit px-3 py-1 rounded-full font-medium'>
                            {project.feature}
                        </p>

                        <div className='flex gap-2 flex-wrap mt-4'>
                            {
                                project.techs.map((tech)=>(
                                    <span key={tech} className='px-2 py-1 rounded bg-[#0a0a14] text-[#94a3b8] text-xs border border-white/5'>
                                        {tech}
                                    </span>
                                ))
                            }
                        </div>
                    </div>

                    {/* ------------------buttons---------------------- */}

                    <div className='mt-6 flex gap-3'>
                        {project.github_Link ? 
                            <a className='flex-1 text-center border border-[#a855f7] text-[#a855f7] py-2 rounded-xl font-bold hover:bg-[#a855f7] hover:text-white transition-all'
                            href={project.github_Link} target='_blank' rel="noopener noreferrer">
                                Github
                            </a>
                            :
                            <span className='flex-1 text-center border border-gray-700 py-2 rounded-xl text-sm text-gray-500 cursor-not-allowed italic font-medium'>
                                Code Private
                            </span>
                        }
                        
                        {project.demo_Link ?
                            <a className='flex-1 text-center bg-[#a855f7] text-white py-2 rounded-xl font-bold hover:bg-[#9333ea] transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                            href={project.demo_Link} target='_blank' rel="noopener noreferrer">
                                Live Demo
                            </a>
                            :
                            <span className='flex-1 text-center border border-gray-700 py-2 rounded-xl text-sm text-gray-500 cursor-not-allowed italic font-medium'>
                                {project.status}
                            </span>
                        }
                    </div>
                </div>
            ))
            }
        </div>
    </div>
  )
}

export default Projects