import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Info } from "lucide-react";
import { GoogleMap, useLoadScript, Circle } from "@react-google-maps/api";

const WalkingPath = () => {
  const navigate = useNavigate();
  const [isDone, setIsDone] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);

  const handleBack = () => {
    navigate(-1);
  };

  const handleDone = () => {
    setIsDone(true);
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    }
  }, []);

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

      <div className="container mx-auto bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-between space-y-4 flex-grow max-h-screen">
        <div className="w-full h-120 sm:h-66 md:h-[450px] lg:h-[400px] bg-gray-300 rounded-lg mb-4">
          <div className="h-full bg-gray-400 flex items-center justify-center text-white font-bold">
            {isLoaded && currentLocation ? (
              <GoogleMap
                center={currentLocation}
                zoom={17}
                mapContainerStyle={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <Circle
                  center={currentLocation}
                  radius={10}
                  options={{
                    fillColor: "blue",
                    fillOpacity: 0.5,
                    strokeColor: "blue",
                    strokeOpacity: 1,
                    strokeWeight: 2,
                  }}
                />
              </GoogleMap>
            ) : null}
          </div>
        </div>

        <div className="w-full text-center text-gray-700 mt-4">
          <div className="w-full bg-gray-800 text-white p-4 rounded-lg flex items-center text-sm sm:text-base lg:text-lg">
            <Info size={16} className="mr-2 sm:size-20 lg:size-24" />
            <p className="text-sm sm:text-base lg:text-lg">
              <span className="text-black-900 font-bold">Note:</span> Please
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
