import React from 'react'

const Footer = () => {
  const data = new Date()
  return (
    <footer className='container mx-auto w-full grid place-content-center'>
      Copyright &copy; {data.getFullYear()}. All Right Reaseved 
    </footer>
  )
}

export default Footer