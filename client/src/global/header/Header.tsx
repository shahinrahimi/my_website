import React from 'react'
import { SmoothScrollingContext } from '../../contexts/SmoothScrollingContext'

const Header = () => {

  const { scrollToSection } = React.useContext(SmoothScrollingContext)

  const handleScroll = (sectionId: string) => {
    scrollToSection(sectionId)
    
  }
  return (
    <header className='container mx-auto p-8 flex justify-between items-center h-40 '>
      <h1 
        onClick={(e) => handleScroll("home")}
        className='text-5xl font-light'>
        <a href="#home">Shahin Rahimi</a>
      </h1>
      <ul  className='flex gap-8 text-3xl'>
        <li onClick={(e) => handleScroll("about")}><a className='cursor-pointer hover:text-blue-700 transition-colors' >About</a></li>
        <li onClick={(e) => handleScroll("skills")}><a className='cursor-pointer hover:text-blue-700 transition-colors' >Skills</a></li>
        <li onClick={(e) => handleScroll("projects")}><a className='cursor-pointer hover:text-blue-700 transition-colors' >Projects</a></li>
        <li onClick={(e) => handleScroll("contact")}><a className='cursor-pointer hover:text-blue-700 transition-colors' >Contact</a></li>
      </ul>
    </header>
  )
}

export default Header