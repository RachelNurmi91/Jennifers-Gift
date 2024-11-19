"use client"
import Link from "next/link"

const Nav = () => {
  return (
    <nav className="flex-between w-full text-center">
      <div className="text-white text-xl font-bold py-4 bg-gray-500 font-satoshi">Jennifer's Gift</div>
      <div className="text-white text-xs uppercase font-bold py-2 bg-gray-400">
        <Link 
          href="/"
          className="mx-3"
        >
          Home
        </Link>
        <Link 
          href="/mission"
          className="mx-3"
        >
          Our Mission
        </Link>
        <Link 
          href="/charity"
          className="mx-3"
        >
          Annual Golf Tournament
        </Link>
        <Link 
          href="/resources"
          className="mx-3"
        >
          Resources
        </Link>
        <Link 
          href="/about"
          className="mx-3"
        >
          About Us
        </Link>
        <Link 
          href="/contact"
          className="mx-3"
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Nav
