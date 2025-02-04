import React, { useState } from "react";

const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // State for burger menu toggle

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-black p-2 sm:p-6 md:p-6 lg:p-1">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img
          src="/CabuTrans.png"
          alt="CabuTrans Logo"
          className="h-8 sm:h-8 md:h-10 lg:h-16"
        />

        {/* Title */}
        <h1 className="text-white text-lg sm:text-m md:text-lg lg:text-xl font-semibold mr-auto">
          CabuTrans
        </h1>

        {/* Burger Button */}
        <button
          className="sm:block md:block lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <span className="text-xl">&#9776;</span> {/* Hamburger Icon */}
        </button>

        {/* Desktop Navigation */}
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
              onClick={() => toggleDropdown("settings")}
            >
              Settings
              <span className="ml-2">&#9662;</span>
            </button>
            {activeDropdown === "settings" && (
              <div className="absolute right-0 mt-2 bg-gray-800 text-white p-4 rounded shadow-md text-sm whitespace-nowrap">
                <a
                  href="/app-settings"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  App Settings
                </a>
                <a
                  href="/instruction"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Instruction
                </a>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="text-white hover:text-gray-400 flex items-center px-4 py-2"
              onClick={() => toggleDropdown("about")}
            >
              About Us
              <span className="ml-2">&#9662;</span>
            </button>
            {activeDropdown === "about" && (
              <div className="absolute right-0 mt-2 bg-gray-800 text-white p-4 rounded shadow-md text-sm whitespace-nowrap">
                <a
                  href="/about-the-app"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  About the App
                </a>
                <a
                  href="/about-the-team"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  About the Team
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          className={`sm:block md:block lg:hidden bg-black p-4 space-y-4 text-center border-2 border-gray-400 rounded-lg`}
        >
          <a
            href="/how-to-use"
            className="text-white hover:text-gray-400 block px-4 py-2"
          >
            How To Use?
          </a>
          <div className="relative">
            <button
              className="text-white hover:text-gray-400 flex items-center justify-center w-full"
              onClick={() => toggleDropdown("settings")}
            >
              Settings
              <span className="ml-2">&#9662;</span>
            </button>
            {activeDropdown === "settings" && (
              <div className="bg-gray-800 text-white p-4 rounded shadow-md text-sm">
                <a
                  href="/app-settings"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  App Settings
                </a>
                <a
                  href="/instruction"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Instruction
                </a>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              className="text-white hover:text-gray-400 flex items-center justify-center w-full"
              onClick={() => toggleDropdown("about")}
            >
              About Us
              <span className="ml-2">&#9662;</span>
            </button>
            {activeDropdown === "about" && (
              <div className="bg-gray-800 text-white p-4 rounded shadow-md text-sm">
                <a
                  href="/about-the-app"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  About the App
                </a>
                <a
                  href="/about-the-team"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  About the Team
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
