import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-black p-2 sm:p-6 md:p-6 lg:p-1">
      <div className="container mx-auto flex justify-between items-center">
        <img
          src="/CabuTrans.png"
          alt="CabuTrans Logo"
          className="h-8 sm:h-8 md:h-10 lg:h-16"
        />

        <h1 className="text-white text-lg sm:text-m md:text-lg lg:text-xl font-semibold mr-auto">
          CabuTrans
        </h1>
      </div>
    </nav>
  );
};

export default NavBar;
