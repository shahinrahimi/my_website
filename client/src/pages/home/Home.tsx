import React from 'react'
import { SmoothScrollingContext } from '../../contexts/SmoothScrollingContext';
import { avatarImg, avatarImg2} from '../../asset'
import { BiSolidBadgeCheck as ExpIcon } from "react-icons/bi";
import { FaGraduationCap as GradIcon } from "react-icons/fa6";
import { FaGithub as GithubIcon } from "react-icons/fa";

import { IoLogoPython as PythonIcon } from "react-icons/io";
import { IoLogoJavascript as JsIcon } from "react-icons/io";

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



const HomeSection = ({ id }:{ id: string }) => {
  return (
    <section id={id} className='bg-black h-[calc(100vh-40px*4)] flex justify-center gap-8 items-center'>
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

const AboutMeSection = ({ id }:{ id: string }) => {
  return (
    <section id={id} className='bg-yellow-500 h-[calc(100vh-40px*4)] flex flex-col justify-start gap-8 items-center'>
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

const SkillsSection = ({ id }:{ id: string }) => {
  return (
    <section id={id} className='bg-green-400 min-h-[calc(100vh-40px*4)] flex flex-col justify-start gap-8 items-center'>
      <div className="flex flex-col items-center">
        <small className='text-2xl text-gray-500'>get to know me</small>
        <h1 className="text-6xl font-medium">About me</h1>
      </div>

      <ul className="text-2xl grid grid-cols-3 gap-8 ">

        <li className="flex items-center gap-2">
          <div className="text-7xl w-24 h-24 grid place-content-center text-blue-700 bg-blue-700/25 rounded-2xl border-2 border-gray-500/25">
            <PythonIcon />
          </div>
          <div className="capitalize">
            <p className='font-bold'>Python</p>
            <p>multi porpose programing language</p>
            <p>+4 years</p>
            <p>intermidiate</p>
          </div>
        </li>

        <li className="flex items-center gap-2">
          <div className="text-6xl w-24 h-24 grid place-content-center text-yellow-300 bg-yellow-300/25 rounded-2xl border-2 border-gray-500/25">
            <JsIcon />
          </div>
          <div className="capitalize">
            <p className='font-bold'>Javascript</p>
            <p>Multi-paradigm: event-driven</p>
            <p>+3 years</p>
            <p>intermidiate</p>
          </div>
        </li>

        <li className="flex items-center gap-2">
          <div className="text-7xl w-24 h-24 grid place-content-center text-teal-500 bg-teal-500/25 rounded-2xl border-2 border-gray-500/25">
            <ReactIcon />
          </div>
          <div className="capitalize">
            <p className='font-bold'>React</p>
            <p>Multi-paradigm: event-driven</p>
            <p>+2 years</p>
            <p>intermidiate</p>
          </div>
        </li>

        <li className="flex items-center gap-2">
          <div className="text-7xl w-24 h-24 grid place-content-center text-green-700 bg-green-700/25 rounded-2xl border-2 border-gray-500/25">
            <NodeJsIcon />
          </div>
          <div className="capitalize">
            <p className='font-bold'>NodeJs</p>
            <p>Multi-paradigm: event-driven</p>
            <p>+2 years</p>
            <p>intermidiate</p>
          </div>
        </li>

        <li className="flex items-center gap-2">
          <div className="text-7xl w-24 h-24 grid place-content-center text-green-700 bg-green-700/25 rounded-2xl border-2 border-gray-500/25">
            <MongoDBIcon />
          </div>
          <div className="capitalize">
            <p className='font-bold'>MongoDB</p>
            <p>Multi-paradigm: event-driven</p>
            <p>+2 years</p>
            <p>intermidiate</p>
          </div>
        </li>

        <li className="flex items-center gap-2">
          <div className="text-7xl w-24 h-24 grid place-content-center text-orange-700 bg-orange-700/25 rounded-2xl border-2 border-gray-500/25">
            <RustIcon />
          </div>
          <div className="capitalize">
            <p className='font-bold'>Rust</p>
            <p>Multi-paradigm: event-driven</p>
            <p>+1 years</p>
            <p>basic</p>
          </div>
        </li>

        <li className="flex items-center gap-2">
          <div className="text-7xl w-24 h-24 grid place-content-center text-black bg-black/25 rounded-2xl border-2 border-gray-500/25">
            <LinuxIcon />
          </div>
          <div className="capitalize">
            <p className='font-bold'>Linux</p>
            <p>Multi-paradigm: event-driven</p>
            <p>+2 years</p>
            <p>basic</p>
          </div>
        </li>

        <li className="flex items-center gap-2">
          <div className="text-7xl w-24 h-24 grid place-content-center text-blue-700 bg-blue-700/25 rounded-2xl border-2 border-gray-500/25">
            <TypescriptIcon />
          </div>
          <div className="capitalize">
            <p className='font-bold'>Typescript</p>
            <p>Multi-paradigm: event-driven</p>
            <p>+2 years</p>
            <p>basic</p>
          </div>
        </li>

        <li className="flex items-center gap-2">
          <div className="text-7xl w-24 h-24 grid place-content-center text-red-600 bg-red-600/25 rounded-2xl border-2 border-gray-500/25">
            <HTMLIcon />
          </div>
          <div className="capitalize">
            <p className='font-bold'>HTML</p>
            <p>Multi-paradigm: event-driven</p>
            <p>+2 years</p>
            <p>basic</p>
          </div>
        </li>

        <li className="flex items-center gap-2">
          <div className="text-7xl w-24 h-24 grid place-content-center text-blue-500 bg-blue-500/25 rounded-2xl border-2 border-gray-500/25">
            <CSSIcon />
          </div>
          <div className="capitalize">
            <p className='font-bold'>CSS</p>
            <p>Multi-paradigm: event-driven</p>
            <p>+2 years</p>
            <p>basic</p>
          </div>
        </li>

        <li className="flex items-center gap-2">
          <div className="text-7xl w-24 h-24 grid place-content-center text-sky-400 bg-sky-400/25 rounded-2xl border-2 border-gray-500/25">
            <TailwindcssIcon />
          </div>
          <div className="capitalize">
            <p className='font-bold'>Tailwindcss</p>
            <p>Multi-paradigm: event-driven</p>
            <p>+2 years</p>
            <p>basic</p>
          </div>
        </li>

        <li className="flex items-center gap-2">
          <div className="text-7xl w-24 h-24 grid place-content-center text-pink-500 bg-pink-500/25 rounded-2xl border-2 border-gray-500/25">
            <SassIcon />
          </div>
          <div className="capitalize">
            <p className='font-bold'>Sass</p>
            <p>Multi-paradigm: event-driven</p>
            <p>+2 years</p>
            <p>basic</p>
          </div>
        </li>

      </ul>
    </section>
  )
}

const ProjectsSection = ({ id }:{ id: string }) => {
  return (
    <section id={id} className='min-h-[calc(100vh-40px*4)] bg-red-500'>

    </section>
  )
}

const ContactSection = ({ id }:{ id: string }) => {
  return (
    <section id={id} className='min-h-[calc(100vh-40px*4)] bg-teal-400'>

    </section>
  )
}


const Home = () => {

  return (
    <main className='min-h-screen mx-auto container'>
      <HomeSection id={"home"} />
      <AboutMeSection id={"about"} />
      <SkillsSection id={"skills"} />
      <ProjectsSection id={"projects"} />
      <ContactSection id={"contact"} />
    </main>
  )
}

export default Home