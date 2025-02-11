import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Info } from "lucide-react";

const ModeOfTransportation = () => {
  const navigate = useNavigate();
  const [selectedMode, setSelectedMode] = useState(null);

  const handleBack = () => {
    navigate(-1);
  };

  const handleConfirm = () => {
    if (selectedMode === "Walking") {
      navigate("/walking-path");
    } else if (selectedMode === "Tricycle") {
      navigate("/tricycle-route");
    }
  };

  const toggleSelection = (mode) => {
    setSelectedMode(selectedMode === mode ? null : mode);
  };

  return (
    <div className="bg-gray-100 min-h-screen px-4 py-6 flex flex-col">
      <div className="container flex items-center mx-auto bg-white shadow-lg rounded-lg mb-6 p-4">
        <button
          className="flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition"
          onClick={handleBack}
          style={{ width: "3.5rem", height: "3.5rem" }}
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold ml-4">
          Choose your mode of transportation
        </h1>
      </div>

      <div className="container mx-auto bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-between space-y-4 flex-grow">
        <div className="w-full bg-gray-800 text-white p-4 rounded-lg flex items-center">
          <Info size={24} className="mr-2" />
          <span className="text-sm sm:text-base">
            Choose one for your preferred route
          </span>
        </div>

        <button
          className={`w-full sm:w-72 md:w-96 lg:w-180 h-40 rounded-lg text-white font-bold text-center flex flex-col items-center justify-center space-y-2 ${
            selectedMode === "Walking" ? "bg-black" : "bg-gray-400"
          } hover:bg-black transition`}
          onClick={() => toggleSelection("Walking")}
        >
          <img src="/Walking.png" alt="Walking" className="w-22 h-14" />
          <span>Walking</span>
        </button>

        <button
          className={`w-full sm:w-72 md:w-96 lg:w-180 h-40 rounded-lg text-white font-bold text-center flex flex-col items-center justify-center space-y-2 ${
            selectedMode === "Tricycle" ? "bg-black" : "bg-gray-400"
          } hover:bg-black transition`}
          onClick={() => toggleSelection("Tricycle")}
        >
          <img src="/Tricycle.png" alt="Tricycle" className="w-26 h-16" />
          <span>Tricycle</span>
        </button>

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
