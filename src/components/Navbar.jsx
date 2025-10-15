import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-600">Six Sense Preschool</h1>
        <ul className="hidden md:flex space-x-6 text-gray-700 font-semibold">
          <li><a href="#about" className="hover:text-pink-500">About</a></li>
          <li><a href="#gallery" className="hover:text-pink-500">Gallery</a></li>
          <li><a href="#awards" className="hover:text-pink-500">Awards</a></li>
          <li><a href="#contact" className="hover:text-pink-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
