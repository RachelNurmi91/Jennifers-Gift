"use client"
import Link from "next/link"
import Logo from "../public/images/logo.png"

const Nav = () => {
  return (
    <nav className="flex-between w-full text-center bg-gray-500">
      <div className="mx-auto" style={{ maxWidth: "900px", height: "100%" }}>
        <div className="text-white text-xl font-bold py-4  font-satoshi">
          <img src={Logo.src} alt="Jennifer's Gift Logo"/>
        </div>
      </div>
      <div>
        <div className="border-t-2 border-white text-white text-s uppercase font-bold py-4">
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
      </div>
    </nav>
  )
}

export default Nav
