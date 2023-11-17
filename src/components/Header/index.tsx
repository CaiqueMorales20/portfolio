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
    <header className="absolute z-30 w-screen" ref={ref}>
      <nav className="container m-auto flex h-20 items-center justify-between">
        <h1 className="text-medium font-medium text-white">CM</h1>
        <ul className="z-20 hidden gap-6 md:flex">
          <li className="text-sm font-semibold text-white duration-300 hover:text-accent">
            <a href="">Home</a>
          </li>
          <li className="text-sm font-semibold text-white duration-300 hover:text-accent">
            <a href="">About</a>
          </li>
          <li className="text-sm font-semibold text-white duration-300 hover:text-accent">
            <a href="">Projects</a>
          </li>
          <li className="text-sm font-semibold text-white duration-300 hover:text-accent">
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
