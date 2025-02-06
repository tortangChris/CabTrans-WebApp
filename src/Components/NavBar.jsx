import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Settings, Info } from "lucide-react";

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
          <span className="text-xl">&#9776;</span>
        </button>

        <div className={`hidden sm:flex md:flex lg:flex space-x-6`}>
          <div className="relative">
            <button className="text-white hover:text-gray-400 flex items-center px-4 py-2">
              <Link to="/settings" className="text-white flex items-center">
                <Settings className="mr-2 text-sm sm:text-base md:text-lg lg:text-xl" />{" "}
                Settings
              </Link>
            </button>
          </div>

          <div className="relative">
            <button className="text-white hover:text-gray-400 flex items-center px-4 py-2">
              <Link to="/about" className="text-white flex items-center">
                <Info className="mr-2 text-sm sm:text-base md:text-lg lg:text-xl" />{" "}
                About Us
              </Link>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="sm:block md:block lg:hidden bg-black p-4 space-y-4 text-center border-2 border-gray-400 rounded-lg">
          <div className="relative">
            <button className="text-white hover:text-gray-400 flex items-center justify-center w-full">
              <Link to="/settings" className="text-white flex items-center">
                <Settings className="mr-2 text-sm sm:text-base md:text-lg lg:text-xl" />{" "}
                Settings
              </Link>
            </button>
          </div>
          <div className="relative">
            <button className="text-white hover:text-gray-400 flex items-center justify-center w-full">
              <Link to="/about" className="text-white flex items-center">
                <Info className="mr-2 text-sm sm:text-base md:text-lg lg:text-xl" />{" "}
                About
              </Link>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
