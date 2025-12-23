import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[#7be3a8] text-black px-6 md:px-16 py-12">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Logo and Contact Info */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-light leading-tight">
            Apex Education Pathfinder
          </h2>
          <div className="text-sm space-y-4">
            <h1 className="text-lg underline">Call Us Now</h1>
            <p className="text-lg">+65 -8341- 4910</p>
            <p className="text-lg">+65 -9004-7944</p>
            <p className="text-lg">+65 -9644-2667</p>
            <p className="text-lg">singapore@apexeducation.sg</p>
            <h1 className="text-lg underline">Address Information</h1>
            <p>
              223 MOUNTBATTEN ROAD,
              <br />  #03-16, 223, MOUNTBATTEN, SINGAPORE 398008
            </p>
          </div>
          <div className="flex gap-4 mt-2 text-lg">
            <FaFacebookF />
            <FaInstagram />
            <FaXTwitter />
            <FaYoutube />
          </div>
        </div>

        {/* Policy Links */}
        <div className="text-md flex flex-col gap-1">
          <a href="#">Company</a>
          <a href="#">Testimonials</a>
          <Link to="/contact#contact-header">Contact Us</Link>
          <a href="#">FAQ</a>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-2">
          {/* <p className="text-lg font-medium">All Rights Reserved</p> */}
          <label htmlFor="email" className="text-sm font-light">
            Email *
          </label>
          <input
            type="email"
            id="email"
            className="border-b border-black bg-transparent outline-none py-1 w-full"
            placeholder="Enter your email"
          />
          <div className="flex items-center gap-2">
            <input type="checkbox" id="subscribe" />
            <label htmlFor="subscribe" className="text-sm font-light">
              Yes, subscribe me to your newsletter. *
            </label>
          </div>
          <button className="border border-black px-4 py-1 w-fit mt-2">
            Submit
          </button>
        </div>
      </div>
      <hr className="bg-black w-full my-8" />
      <div className="justify-center text-center mt-8 text-lg">
        Copyright © 2025{" "}
        <span className="font-extrabold">Apex Education PathFinder</span>. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
