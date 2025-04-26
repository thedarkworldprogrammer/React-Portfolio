import React from 'react'
import Himanshu from '../assets/himanshu.jpg'
import About from './About'
const Home = () => {
  return (
    <>
      <div className="max-w-[768px] md:max-w-full md:w-full h-[500px] flex mt-8 md:px-4 px-3 md:flex-row flex-col md:mb-0 mb-[450px] items-center">
        <div className="md:w-[60%] w-full h-full mt-8">
          <h2 className="font-bold text-6xl md:w-[450px] w-full">
            Creating Modern Web Experiences
          </h2>
          <p className="mt-4 text-lg md:mr-10 md:w-full w-full">
            I build full-stack applications using MongoDB, Express, React, and
            Node.js with a focus on performance, accessibility, and exceptional
            user experience.
          </p>
          <div className="flex mt-4 items-center flex-wrap">
            <h1 className="font-bold">My Tech: </h1>
            <p className="rounded-full bg-slate-500 px-2 ml-2">Java</p>
            <p className="rounded-full bg-slate-500 px-2 ml-2">React</p>
            <p className="rounded-full bg-slate-500 px-2 ml-2">Express</p>
            <p className="rounded-full bg-slate-500 px-2 ml-2">Node</p>
            <p className="rounded-full bg-slate-500 px-2 ml-2">MongoDB</p>
            <p className="rounded-full bg-slate-500 px-2 ml-2">Tailwind</p>
          </div>
        </div>
        <div className="md:w-[40%] w-full h-[580px]  md:h-full border border-l-gray-950 flex flex-col items-center md:mt-0 mt-8">
          <div
            className="w-[95%] h-[580px] md:h-[410px] bg-no-repeat bg-cover bg-top mt-3 rounded-tl-lg rounded-tr-lg"
            style={{ backgroundImage: `url(${Himanshu})` }}
          ></div>
          <p className="font-bold">Himanshu Kumar Tiwari</p>
          <p className="text-gray-700">MERN STACK Developer</p>
        </div>
      </div>
      <About />
    </>
  )
}

export default Home
