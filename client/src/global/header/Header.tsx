import React from 'react'
const Header = () => {
  return (
    <header className='container mx-auto flex justify-between items-center h-40 '>
      <h1 className='text-5xl font-light'><a href="#home">Shahin Rahimi</a></h1>
      <ul  className='flex gap-8 text-3xl'>
        <li><a className='cursor-pointer hover:text-blue-700 transition-colors' href="#about">About</a></li>
        <li><a className='cursor-pointer hover:text-blue-700 transition-colors' href="#skills">Skills</a></li>
        <li><a className='cursor-pointer hover:text-blue-700 transition-colors' href="#projects">Projects</a></li>
        <li><a className='cursor-pointer hover:text-blue-700 transition-colors' href="#contact">Contact</a></li>
      </ul>
    </header>
  )
}

export default Header