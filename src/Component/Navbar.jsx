"use client"; 
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faSearch } from "@fortawesome/free-solid-svg-icons"; // Search icon import
import Link from "next/link";
import Image from "next/image"; // For logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle navbar for mobile view
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="shadow-md fixed w-full z-10 top-0"
      style={{
        backgroundColor: "hsla(240,100%,4%,1)",
        backgroundImage: `
         radial-gradient(at 51% 47%, hsla(240,100%,4%,1) 0px, transparent 50%),
radial-gradient(at 51% 52%, hsla(240,100%,4%,1) 0px, transparent 50%);
        `,
      }} // Applying the dark background
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={120} height={40} />
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden" onClick={toggleNavbar}>
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className="text-2xl text-white cursor-pointer"
          />
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-gray-300 hover:text-purple-400">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-purple-400">
            About
          </Link>
          <Link href="/pricing" className="text-gray-300 hover:text-purple-400">
            Pricing
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-purple-400">
            Contact
          </Link>
          <Link href="/blog" className="text-gray-300 hover:text-purple-400">
            Blog
          </Link>
          {/* Search Icon */}
          <button className="text-white">
            <FontAwesomeIcon icon={faSearch} className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Links for Mobile */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute w-full bg-[#17171d] shadow-lg left-0 top-[72px] z-10`}
      >
        <Link
          href="/"
          className="block py-2 px-4 text-gray-300 hover:bg-gray-800"
          onClick={toggleNavbar}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="block py-2 px-4 text-gray-300 hover:bg-gray-800"
          onClick={toggleNavbar}
        >
          About
        </Link>
        <Link
          href="/pricing"
          className="block py-2 px-4 text-gray-300 hover:bg-gray-800"
          onClick={toggleNavbar}
        >
          Pricing
        </Link>
        <Link
          href="/contact"
          className="block py-2 px-4 text-gray-300 hover:bg-gray-800"
          onClick={toggleNavbar}
        >
          Contact
        </Link>
        <Link
          href="/blog"
          className="block py-2 px-4 text-gray-300 hover:bg-gray-800"
          onClick={toggleNavbar}
        >
          Blog
        </Link>
        {/* Search Icon */}
        <button className="block py-2 px-4 text-gray-300 hover:bg-gray-800">
          <FontAwesomeIcon icon={faSearch} className="w-5 h-5 text-white" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
