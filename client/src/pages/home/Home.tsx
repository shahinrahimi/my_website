import React from 'react'
import { avatarImg, avatarImg2} from '../../asset'
import { BiSolidBadgeCheck as ExpIcon } from "react-icons/bi";
import { FaGraduationCap as GradIcon } from "react-icons/fa6";
import { FaGithub as GithubIcon } from "react-icons/fa";

import { IoLogoPython as PythonIcon } from "react-icons/io";
import { IoLogoJavascript as JsIcon } from "react-icons/io5";
import { IoLogoReact as ReactIcon } from "react-icons/io5";
import { IoLogoNodejs as NodeJsIcon } from "react-icons/io";
import { BiLogoMongodb as MongoDBIcon } from "react-icons/bi";
import { FaRust as RustIcon } from "react-icons/fa";
import { FaLinux as LinuxIcon } from "react-icons/fa";
import { BiLogoTypescript as TypescriptIcon } from "react-icons/bi";
import { IoLogoHtml5 as HTMLIcon } from "react-icons/io";
import { SiTailwindcss as TailwindcssIcon } from "react-icons/si";
import { IoLogoCss3 as CSSIcon } from "react-icons/io";
import { IoLogoSass as SassIcon } from "react-icons/io";


import { SiRedux as ReduxIcon } from "react-icons/si";
import { FaGitAlt as GitIcon } from "react-icons/fa";



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

const AboutMeSection = () => {
  return (
    <section className='h-[calc(100vh-40px*4)] flex flex-col justify-start gap-8 items-center'>
      <div className="flex flex-col items-center">
        <small className='text-2xl text-gray-500'>get to know me</small>
        <h1 className="text-6xl font-medium">About me</h1>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 flex-grow">
        {/* image */}
        <div className="flex">
          <div className="h-96 w-96 rounded-3xl overflow-hidden grid place-content-center">
            <img src={avatarImg2} className='w-full h-full object-cover relative grayscale' alt="" />
          </div>
        </div>


        {/* content */}
        <div className="w-full md:w-1/2 flex flex-col  justify-center gap-12">
          <div className="flex flex-row gap-4">
            {/* education */}
            <div className="p-4 flex flex-col justify-center items-center border-2 rounded-md border-blue-500 basis-1/2">
              <GradIcon className="text-4xl text-blue-500"/>
              <h2 className='text-xl font-semibold'>Education</h2>
              <p>B.Sc. Bachelors Degree</p>
              <p>M.Sc. Masters Degree</p>
            </div>
            {/* expirince */}
            <div className="p-4 flex flex-col justify-center items-center border-2 rounded-md border-green-500 basis-1/2">
              <ExpIcon className="text-4xl text-green-500" />
              <h2 className='text-xl font-semibold'>experience</h2>
              <p>+5 years freeelancer</p>
              <p>Senior full stack developer</p>
            </div>

          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, consectetur? At optio eum velit consequuntur! At dicta error architecto ipsum ullam voluptatibus magni veritatis consequuntur quia id rem porro sapiente iure non corrupti laboriosam odio saepe fuga dignissimos explicabo placeat, totam rerum! Similique minus, temporibus architecto quisquam cumque mollitia fugit!</p>

        </div>

      </div>
      
    </section>
  )
}

const SkillsSection = () => {
  return (
    <section className='h-[calc(100vh-40px*4)] flex flex-col justify-start gap-8 items-center'>
      <div className="flex flex-col items-center">
        <small className='text-2xl text-gray-500'>get to know me</small>
        <h1 className="text-6xl font-medium">About me</h1>
      </div>

      <div className="">

      </div>
    </section>
  )
}


const Home = () => {
  return (
    <main className='min-h-screen mx-auto container'>
      <HomeSection />
      <AboutMeSection />
      <SkillsSection />
    </main>
  )
}

export default Home