import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#portfolio" },
];

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

  return (
<div className="text-white/70 pt-6">
  <div className="hidden md:flex items-center justify-between max-w-6xl mx-auto px-6 py-4">
    <h1 className="text-2xl font-bold cursor-pointer">
      Haribaskar
    </h1>

    <ul className="flex items-center space-x-8">
      {navLinks.map((link, index) => (
        <li key={index}>
          <a
            href={link.path}
            className="hover:text-white transition-colors duration-300"
          >
            {link.title}
          </a>
        </li>
      ))}

      <li>
        <a href="#contact" className="group">
          <span className="text-lg font-semibold cursor-pointer">
            Contact Me
          </span>

          <div className="relative mt-1">
            <div className="absolute h-1 w-2/3 bg-orange-400 rounded-full transition-all duration-300 group-hover:w-full" />

            <div className="absolute mt-1 h-1 w-1/3 bg-orange-600 rounded-full transition-all duration-300 group-hover:w-full" />
          </div>
        </a>
      </li>
    </ul>
  </div>


  <div
    onClick={toggleNav}
    className="md:hidden fixed top-5 right-5 border border-white/70 rounded p-2 z-50 cursor-pointer"
  >
    {nav ? (
      <AiOutlineClose size={30} />
    ) : (
      <AiOutlineMenu size={30} />
    )}
  </div>


  <div
    className={`fixed top-0 left-0 w-full h-screen bg-black/95 z-40 transform transition-transform duration-500 ease-out ${nav ? "translate-x-0" : "-translate-x-full"}`}
  >
    <ul className="flex flex-col items-center justify-center h-full text-4xl font-semibold space-y-8">
      {navLinks.map((link, index) => (
        <li key={index}>
          <a href={link.path} onClick={closeNav}>
            {link.title}
          </a>
        </li>
      ))}

      <li>
        <a href="#contact" onClick={closeNav}>
          Contact Me
        </a>
      </li>
    </ul>
  </div>
</div> 
  )
}

export default Navbar