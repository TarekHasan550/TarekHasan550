import React from 'react'
import Navbar from "../components/shared/navbar/Navbar"
import Hero from '@/components/pages/Hero'
import AboutMe from '@/components/pages/AboutMe'
import Project from '@/components/pages/Project'
import Skill from '@/components/pages/Skill'
import Contact from '@/components/pages/Contact'
import Footer from '@/components/shared/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='mt-60'>
        <Hero />
        <AboutMe />
        <Project />
        <Skill />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
