'use client'

import { useOnClickOutside } from '@/src/utils/useOnClickOutside'
import { useRef } from 'react'

// Functional Component
export default function Header() {
  // Variables
  const ref = useRef(null)

  const handleClickOutside = () => {
    console.log('clicked outside')
  }

  useOnClickOutside(ref, handleClickOutside)

  // Rendering
  return (
    <header className="fixed w-screen bg-primary" ref={ref}>
      <nav className="w-[90%] max-w-[1600px] m-auto h-20 flex items-center justify-between">
        <h1 className="font-medium text-base text-white">CM</h1>
        <ul className="hidden md:flex gap-6">
          <a href="">
            <li className="text-white hover:text-accent duration-300 text-sm">
              Home
            </li>
          </a>
          <a href="">
            <li className="text-white hover:text-accent duration-300 text-sm">
              About
            </li>
          </a>
          <a href="">
            <li className="text-white hover:text-accent duration-300 text-sm">
              Projects
            </li>
          </a>
          <a href="">
            <li className="text-white hover:text-accent duration-300 text-sm">
              Contact
            </li>
          </a>
        </ul>
        <button className="text-white text-sm py-2 px-4 border-2 font-medium rounded-md border-solid border-white hover:text-accent duration-300 hover:bg-white ">
          Download CV
        </button>
      </nav>
    </header>
  )
}
