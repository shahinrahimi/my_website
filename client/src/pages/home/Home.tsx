import React from 'react'
import { avatarImg } from '../../asset'
const HomeSection = () => {
  return (
    <section className='h-[calc(100vh-40px*4)] flex justify-center gap-8 items-center'>
      {/* image */}
      <div className="w-96 h-96 rounded-full overflow-hidden bgcustom border-4 border-blue-400">
        <img src={avatarImg} className='w-full h-full object-cover relative left-4 top-4' alt="" />
      </div>
      {/* content */}
      <div className="flex flex-col items-center gap-4">
        <small className='text-2xl text-gray-500'>Hi, I'm</small>
        <h2 className="text-6xl font-medium">Shahin Rahimi</h2>
        <small className='text-2xl text-gray-500'>Self-taught</small>
        <div className="text-3xl text-gray-500">Fullstack developer</div>
        <div className="text-3xl text-gray-500">Sofware Enginner</div>
      </div>
    </section>
  )
}

const Home = () => {
  return (
    <main className='min-h-screen mx-auto container'>
      <HomeSection />
    </main>
  )
}

export default Home