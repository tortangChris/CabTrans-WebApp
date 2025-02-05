import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Info } from "lucide-react";

const ModeOfTransportation = () => {
  const navigate = useNavigate();
  const [selectedMode, setSelectedMode] = useState(null);

  const handleBack = () => {
    navigate(-1);
  };

  const handleConfirm = () => {};

  const toggleSelection = (mode) => {
    if (selectedMode === mode) {
      setSelectedMode(null);
    } else {
      setSelectedMode(mode);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen px-4 py-6 flex flex-col">
      <div className="container flex items-center mx-auto bg-white shadow-lg rounded-lg mb-6 p-4">
        <button
          className="flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition"
          onClick={handleBack}
          style={{
            width: "3.5rem",
            height: "3.5rem",
          }}
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold ml-4">
          Choose your mode of transportation
        </h1>
      </div>

      <div className="container mx-auto bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-between space-y-4 flex-grow">
        <button
          className={`w-full sm:w-72 md:w-96 lg:w-180 h-40 rounded-lg text-white font-bold text-center ${
            selectedMode === "Walking" ? "bg-black" : "bg-gray-400"
          } hover:bg-black transition`}
          onClick={() => toggleSelection("Walking")}
        >
          Walking
        </button>

        <button
          className={`w-full sm:w-72 md:w-96 lg:w-180 h-40 rounded-lg text-white font-bold text-center ${
            selectedMode === "Tricycle" ? "bg-black" : "bg-gray-400"
          } hover:bg-black transition`}
          onClick={() => toggleSelection("Tricycle")}
        >
          Tricycle
        </button>

        <div className="w-full flex justify-center mt-4 text-red-600 mb-4">
          <Info size={24} className="mr-2" />
          <span className="font-semibold">Choice 1: Your selected route</span>
        </div>

        <div className="w-full flex justify-center mt-auto">
          <button
            className={`w-full sm:w-72 md:w-96 lg:w-300 py-3 px-8 ${
              selectedMode
                ? "bg-black hover:bg-gray-800"
                : "bg-gray-400 cursor-not-allowed"
            } text-white font-bold rounded-lg transition`}
            onClick={handleConfirm}
            disabled={!selectedMode}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModeOfTransportation;
