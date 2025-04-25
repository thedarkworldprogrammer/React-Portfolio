import React from 'react'
import aboutImage from '../assets/a.avif'
import Footer from './Footer'
const About = () => {
  return (
    <>
      <div className="flex justify-center mt-4">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold ">About me</h1>
          <div className="h-2 w-20 bg-yellow-400 mt-3 rounded-lg"></div>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-lg mt-8 text-slate-700">
          here! you will be able to know all about myself.
        </p>
      </div>
      <div className="w-full h-[500px] mt-6 rounded-sm flex">
        {/* about image */}
        <div className="w-[50%] h-full flex justify-start ml-3">
          <img
            src={aboutImage}
            className="rounded-lg w-full max-w-md bg-contain"
            alt="About"
          />
        </div>
        {/* about name */}
        <div className="w-[50%] h-full border border-s-amber-700 p-4 shadow-lg shadow-slate-900 rounded-lg">
          <div className="text-2xl">
            <h2 className="font-bold">Hello!</h2>
            <h3 className="animate-colorCycle font-bold">
              I'm Himanshu Tiwari
            </h3>
          </div>
          <p className="mt-4 w-full text-[17px] text-gray-700">
            I am a{' '}
            <span className="text-red-500 font-semibold">
              Software Engineer
            </span>{' '}
            based in Bhopal, India. I am very passionate about improving my
            coding skills & developing web-applications & websites. I build
            WebApps and Websites using HTML, CSS, JS as well as Wordpress.
            Working for myself to improve my skills. Love to build Full-Stack
            clones.
          </p>
          <p className="mt-2 w-full text-[17px] text-gray-700">
            My expertise spans the entire development lifecycle, from
            conceptualizing user-friendly interfaces to implementing robust
            backend systems. I specialize in building scalable applications
            using <span className="text-violet-800 font-bold">MERN Stack</span>.
          </p>
          <div className="flex justify-between mt-6">
            <div>
              <div>
                <p className="font-bold">Name:</p>
                <p className="text-gray-700">Himanshu Kumar Tiwari</p>
              </div>
              <div>
                <p className="font-bold">Email:</p>
                <p className="text-gray-700">thedarkworld@programmer.net</p>
              </div>
            </div>
            <div className="mr-8">
              <div>
                <p className="font-bold">Location:</p>
                <p>Bhopal M.P</p>
              </div>
              <p className="font-bold">Age:</p>
              <p>22</p>
            </div>
          </div>
          <div className="mt-4">
            <a
              href="https://web-himanshu.netlify.app/documents/Himanshu%20Resume.pdf"
              target="_blank"
            >
              <button className="bg-yellow-400 rounded-lg p-2">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
