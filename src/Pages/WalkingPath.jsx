import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Info } from "lucide-react";

const WalkingPath = () => {
  const navigate = useNavigate();
  const [isDone, setIsDone] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  const handleDone = () => {
    setIsDone(true);
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
          Walking Path
        </h1>
      </div>

      <div className="container mx-auto bg-white shadow-lg rounded-lg p-10 flex flex-col items-center justify-between space-y-4 flex-grow max-h-screen">
        <div className="w-full h-120 sm:h-66 md:h-[450px] lg:h-[400px] bg-gray-300 rounded-lg mb-4">
          <div className="h-full bg-gray-400 flex items-center justify-center text-white font-bold">
            Map Placeholder
          </div>
        </div>

        <div className="w-full text-center text-gray-700 mt-4 px-4">
          <div className="flex items-center justify-center space-x-2">
            <Info size={24} className="text-blue-500" />
            <p className="text-lg font-semibold">
              <span className="text-gray-900 font-bold">Note:</span> Please
              follow the highlighted path on the map to reach your destination.
            </p>
          </div>
        </div>

        {isDone ? (
          <div className="w-full text-center mt-4 text-green-600 font-semibold">
            <p>
              Congratulations! You've successfully completed the walking path!
            </p>
          </div>
        ) : (
          <div className="w-full text-center mt-4 text-gray-700">
            <p>Tap 'Done' when you’ve completed the path</p>
          </div>
        )}

        <div className="w-full flex justify-center mt-auto">
          <button
            className={`w-full sm:w-72 md:w-96 lg:w-300 py-3 px-8 ${
              isDone
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black hover:bg-gray-800"
            } text-white font-bold rounded-lg transition`}
            onClick={handleDone}
            disabled={isDone}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalkingPath;
