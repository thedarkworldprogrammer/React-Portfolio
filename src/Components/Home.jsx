import React from 'react'
import Himanshu from '../assets/himanshu.jpg'
import About from './About'
const Home = () => {
  return (
    <>
      <div className="w-full h-[500px] flex mt-8 px-4">
        <div className="w-[60%] h-full mt-8">
          <h2 className="font-bold text-6xl w-[500px]">
            Creating Modern Web Experiences
          </h2>
          <p className="mt-4 text-lg mr-10">
            I build full-stack applications using MongoDB, Express, React, and
            Node.js with a focus on performance, accessibility, and exceptional
            user experience.
          </p>
          <div className="flex mt-4">
            <h1 className="font-bold">My Tech: </h1>
            <p className="rounded-full bg-slate-500 px-2 ml-2">Java</p>
            <p className="rounded-full bg-slate-500 px-2 ml-2">React</p>
            <p className="rounded-full bg-slate-500 px-2 ml-2">Express</p>
            <p className="rounded-full bg-slate-500 px-2 ml-2">Node</p>
            <p className="rounded-full bg-slate-500 px-2 ml-2">MongoDB</p>
            <p className="rounded-full bg-slate-500 px-2 ml-2">Tailwind</p>
          </div>
        </div>
        <div className="w-[40%] h-full border border-l-gray-950 flex flex-col items-center">
          <div
            className="w-[95%] h-[410px] bg-no-repeat bg-cover bg-top mt-3 rounded-tl-lg rounded-tr-lg"
            style={{ backgroundImage: `url(${Himanshu})` }}
          >
            {/* <img src={Himanshu} className="h-full bg-scroll" alt="" /> */}
          </div>
          <p className="font-bold">Himanshu Kumar Tiwari</p>
          <p className="text-gray-700">MERN STACK Developer</p>
        </div>
      </div>
      <About />
    </>
  )
}

export default Home
