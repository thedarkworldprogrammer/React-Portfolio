import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Experience from './Components/Experience'

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex justify-between items-center py-3 px-4 sticky top-0 border border-b-2 border-r-0 border-l-0 backdrop-blur-lg">
        <h1 className="font-bold text-3xl animate-colorCycle">T.D.W</h1>
        <div className="flex gap-20">
          <Link to="/">
            <h3 className="">Home</h3>
          </Link>
          <Link to="/about">
            <h3>About</h3>
          </Link>
          <Link to="/projects">
            <h3>Projects</h3>
          </Link>
          <Link to="/experience">
            <h3>Experience</h3>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
