import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Info } from "lucide-react";
import { GoogleMap, useLoadScript, MarkerF, InfoWindowF } from "@react-google-maps/api";

const WalkingPath = () => {
  const navigate = useNavigate();
  const [isDone, setIsDone] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  const handleDone = () => {
    setIsDone(true);
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  });

  const markers = [
    {
      id:1,
      name: "Katapatan Highway",
      position:{ lat: 14.255870521797727, lng: 121.12836709719063},  
    },
    {
      id:2,
      name: "Katapatan Exit",
      position:{ lat:14.25763752585572, lng:121.13535248778192},  
    },
    {
      id:3,
      name: "PNC", 
      position:{lat: 14.259199245595466, lng: 121.1338558633464},
    }
  ];
  const [activeMarker, setActiveMarker] = useState(null);
  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
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

      <div className="container mx-auto bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-between space-y-4 flex-grow max-h-screen">
        <div className="w-full h-120 sm:h-66 md:h-[450px] lg:h-[400px] bg-gray-300 rounded-lg mb-4">
          <div className="h-full bg-gray-400 flex items-center justify-center text-white font-bold">
            {isLoaded ? (
              <GoogleMap
                center={{ lat: 14.257758225621316, lng: 121.13209697670491 }}
                onClick={() => setActiveMarker(null)}
                zoom={17}
                mapContainerStyle={{
                  width: "100%",
                  height: "100%",
                }}
              >
                {
                  markers.map(({ id, name, position}) =>(
                    <MarkerF
                    key={id}
                    position={position}
                    onClick={() => handleActiveMarker(id)}>
                      {
                        activeMarker === id ? <InfoWindowF onCloseClick={()=>setActiveMarker(null)}>
                          <div>
                            {name}
                          </div>
                        </InfoWindowF> : null}
                    </MarkerF>
                  ))
                }
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
