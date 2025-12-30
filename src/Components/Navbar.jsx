import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Install lucide-react if not already installed
import { Link } from "react-router-dom";
import Logo from "../assets/Final-logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md shadow-red-400 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/Global-path-education"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="md:text-2xl text-xl font-thin text-red-500"
        >
          <img src={Logo} alt="company-logo" className=" h-10 md:h-14 w-full" />
        </Link>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-12 text-lg items-center text-[#4b3f2f] font-sans">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-[#322a1f]"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-[#322a1f]"
          >
            About
          </Link>
          <Link
            to="/services"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-[#322a1f]"
          >
            Services
          </Link>
          <Link
            to="/destinations"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-[#322a1f]"
          >
            Destinations
          </Link>
          <Link
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-500 hover:text-white hover:shadow-md transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 text-center font-sans flex flex-col text-[#4b3f2f] gap-4">
          <Link
            to="/Global-path-education"
            className="hover:text-[#322a1f]"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-[#322a1f]"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="hover:text-[#322a1f]"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/destinations"
            className="hover:text-[#322a1f]"
            onClick={() => setIsOpen(false)}
          >
            Destinations
          </Link>
          <Link
            to="/contact"
            className="bg-white m-auto px-4 py-2 rounded-md hover:bg-[#d3ffe6] transition w-fit"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
