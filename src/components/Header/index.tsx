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
    <header className="fixed w-screen" ref={ref}>
      <nav className="container m-auto h-20 flex items-center justify-between">
        <h1 className="font-medium text-base text-white">CM</h1>
        <ul className="hidden md:flex gap-6">
          <li className="text-white font-semibold hover:text-accent duration-300 text-sm">
            <a href="">Home</a>
          </li>
          <li className="text-white font-semibold hover:text-accent duration-300 text-sm">
            <a href="">About</a>
          </li>
          <li className="text-white font-semibold hover:text-accent duration-300 text-sm">
            <a href="">Projects</a>
          </li>
          <li className="text-white font-semibold hover:text-accent duration-300 text-sm">
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
