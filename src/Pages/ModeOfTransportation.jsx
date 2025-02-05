import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ModeOfTransportation = ({ hasNavigation }) => {
  const [selectedMode, setSelectedMode] = useState(null);
  const navigate = useNavigate(); // useNavigate hook to handle routings 

  const toggleSelection = (mode) => {
    setSelectedMode(selectedMode === mode ? null : mode);
  };

  // Handle the confirm button click to navigate to the correct page
  const handleConfirm = () => {
    if (selectedMode === 'Walk') {
      navigate("/walking-path"); // Navigate to the walking path
    } else if (selectedMode === 'Tricycle') {
      navigate("/tricycle-path"); // Navigate to the tricycle path
    }
  };

  return (
    <div className="main-page h-screen flex flex-col">
      {/* Top Bar */}
      <div
        className={`bg-white text-black h-[50px] w-full flex items-center justify-between fixed ${hasNavigation ? 'top-[50px]' : 'top-0'} shadow-md px-4 transition-all duration-300 font-bold z-50`}
      >
        <div className="flex items-center">
          <Link to="/home" className="mr-2 font-bold">&lt;</Link>
          Choose your Mode of Transportation
        </div>
        <div className="flex items-center">
          <h1 className="text-black text-lg sm:text-m md:text-lg lg:text-xl font-semibold ml-2">
            CabuTrans
          </h1>
          <img
            src="/CabuTrans.png"
            alt="CabuTrans Logo"
            className="h-18 sm:h-8 md:h-10 lg:h-16"
          />
        </div>
      </div>

      {/* Main Body */}
      <div className="body flex-grow flex items-center justify-center bg-gray-100 mt-[50px] sm:mt-[100px] px-4">
        <div className="flex flex-col gap-4 items-center w-full max-w-[400px]">
          <button 
            className={`w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] py-[5vh] min-w-[200px] rounded-lg shadow-md ${selectedMode === 'Walk' ? 'bg-green-500 text-white' : 'bg-black text-white hover:bg-green-500'}`} 
            onClick={() => toggleSelection('Walk')}
          >
            Walking
          </button>
          <button 
            className={`w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] py-[5vh] min-w-[200px] rounded-lg shadow-md ${selectedMode === 'Tricycle' ? 'bg-green-500 text-white' : 'bg-black text-white hover:bg-green-500'}`} 
            onClick={() => toggleSelection('Tricycle')}
          >
            Tricycle
          </button>
        </div>
      </div>

      {/* Confirm Button stays fixed at the bottom */}
      <button 
        className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] py-[1.8vh] bg-black text-white rounded-lg shadow-md disabled:bg-gray-400 fixed bottom-10 left-1/2 transform -translate-x-1/2"
        disabled={!selectedMode}
        onClick={handleConfirm} // Handle navigation on button click
      >
        Confirm
      </button>
    </div>
  );
};

export default ModeOfTransportation;
