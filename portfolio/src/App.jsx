import { useState } from 'react'
import { Navbar } from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import './App.css'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Experience from './Components/Experience'
import Testimonials from './Components/Testimonials'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen w-full bg-[#0a0a14] text-white tiny-phone-shrink'>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <div id='experience' className='scroll-mt-20'>
        <Experience/>
        <Testimonials/>
      </div>
      <Contact/>
    </div>
  )
}

export default App
