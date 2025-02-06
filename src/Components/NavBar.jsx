import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-black p-2 sm:p-6 md:p-6 lg:p-1">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/home" className="flex items-center">
          <img
            src="/CabuTrans.png"
            alt="CabuTrans Logo"
            className="h-8 sm:h-8 md:h-10 lg:h-16"
          />
          <h1 className="text-white text-lg sm:text-m md:text-lg lg:text-xl font-semibold ml-2">
            CabuTrans
          </h1>
        </Link>

        <button
          className="sm:block md:block lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <span className="text-xl">&#9776;</span> {/* Hamburger Icon */}
        </button>

        <div className={`hidden sm:flex md:flex lg:flex space-x-6`}>
          <a
            href="/how-to-use"
            className="text-white hover:text-gray-400 px-4 py-2"
          >
            How To Use?
          </a>
          <div className="relative">
            <button
              className="text-white hover:text-gray-400 flex items-center px-4 py-2"
            >
              <Link to="/settings" className="text-white">
                Settings
              </Link>
            </button>
          </div>

          <div className="relative">
            <button
              className="text-white hover:text-gray-400 flex items-center px-4 py-2"
            >
              <Link to="/about" className="text-white">
                About Us
              </Link>
              <span className="ml-2">&#9662;</span>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="sm:block md:block lg:hidden bg-black p-4 space-y-4 text-center border-2 border-gray-400 rounded-lg">
          <a
            href="/how-to-use"
            className="text-white hover:text-gray-400 block px-4 py-2"
          >
            How To Use?
          </a>
          <div className="relative">
            <button className="text-white hover:text-gray-400 flex items-center justify-center w-full">
              <Link to="/settings" className="text-white">
                Settings
              </Link>
            </button>
          </div>
          <div className="relative">
            <button
              className="text-white hover:text-gray-400 flex items-center justify-center w-full"
            >
              About Us
              <span className="ml-2">&#9662;</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
