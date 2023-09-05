import Image from 'next/image'

// Functional Component
export default function Header() {
  // Rendering
  return (
    <header className="fixed w-screen">
      <nav className="w-[90%] m-auto h-28 flex items-center justify-between">
        <h1 className="font-medium text-lg text-accent">CM</h1>
        <ul className="flex gap-6">
          <a href="">
            <li className="text-white font-medium hover:text-accent duration-300 text-base">
              Home
            </li>
          </a>
          <a href="">
            <li className="text-white font-medium hover:text-accent duration-300 text-base">
              About
            </li>
          </a>
          <a href="">
            <li className="text-white font-medium hover:text-accent duration-300 text-base">
              Projects
            </li>
          </a>
          <a href="">
            <li className="text-white font-medium hover:text-accent duration-300 text-base">
              Contact
            </li>
          </a>
        </ul>
        <div></div>
      </nav>
    </header>
  )
}
