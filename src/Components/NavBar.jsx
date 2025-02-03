import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-black p-2 sm:p-5 md:p-5 lg:p-3">
      <div className="container mx-auto flex justify-between items-start">
        <h1 className="text-white text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold mr-auto">
          CabuTrans
        </h1>
      </div>
    </nav>
  );
};

export default NavBar;
