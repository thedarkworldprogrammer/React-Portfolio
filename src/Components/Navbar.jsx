import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const Toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <nav className="flex items-center justify-between bg-slate-300 py-3 px-3">
        <Link to="/">
          <span className="text-3xl font-bold">T.D.W</span>
        </Link>
        {/* mobile nav */}
        <div className="fixed top-0 right-0 w-36">
          <div className="w-full flex md:hidden justify-end mt-2 px-3">
            <button className=" text-2xl" onClick={Toggle}>
              ☰
            </button>
          </div>
          {isOpen && (
            <div className="w-full flex flex-col justify-between bg-slate-300 gap-4 mt-2 items-center rounded-sm text-sm py-4">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
            </div>
          )}
        </div>
        <div className="w-1/2 hidden md:flex justify-between ml-20">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
