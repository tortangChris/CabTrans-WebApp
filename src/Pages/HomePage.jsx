import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindowF,
  CircleF,
} from "@react-google-maps/api";

const HomePage = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [mapCenter, setMapCenter] = useState({ lat: 14.5995, lng: 120.9842 });
  const [activeMarker, setActiveMarker] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = (item) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  const handleGetStarted = () => {
    navigate("/mode-of-transport");
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
          setMapCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          alert("Permission to access location was denied.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleActiveMarker = (id) => {
    setActiveMarker(id);
  };

  return (
    <div className="bg-gray-100 min-h-screen px-4 py-6">
      <div className="container p-4 mx-auto bg-white shadow-lg rounded-lg mb-6">
        <h1 className="text-3xl font-bold mb-4">
          Navigate around Cabuyao with ease
        </h1>
        <h1 className="text-2xl text-gray-500 mb-4">
          Using the best transportation options
        </h1>
      </div>

      <div className="container p-4 mx-auto bg-white shadow-lg rounded-lg mb-6">
        <h1 className="text-2xl font-bold mb-4">
          Whether you're traveling by tricycle or walking, we'll guide you to
          the best routes.
        </h1>
        <h1 className="mb-4">
          Get real-time transport updates and simplified navigation for
          students.
        </h1>
      </div>

      <div className="container p-4 mx-auto bg-white shadow-lg rounded-lg mb-6">
        <div className="bg-gray-100 p-4 rounded-lg mb-4 shadow-sm">
          <div className="bg-gray-500 h-64 rounded-lg">
            {isLoaded && currentLocation ? (
              <GoogleMap
                center={mapCenter}
                zoom={17}
                mapContainerStyle={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <MarkerF
                  position={currentLocation}
                  onClick={() => handleActiveMarker("currentLocation")}
                  icon={{
                    path: google.maps.SymbolPath.CIRCLE,
                    fillColor: "#0000FF", // Blue color
                    fillOpacity: 1,
                    scale: 7,
                    strokeColor: "#FFFFFF",
                    strokeWeight: 2,
                  }}
                >
                  {activeMarker === "currentLocation" && (
                    <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                      <div>Your Current Location</div>
                    </InfoWindowF>
                  )}
                </MarkerF>
                <CircleF
                  center={currentLocation}
                  radius={20}
                  options={{
                    fillColor: "#0000FF",
                    fillOpacity: 0.2,
                    strokeColor: "#0000FF",
                    strokeOpacity: 0.4,
                    strokeWeight: 2,
                  }}
                />
              </GoogleMap>
            ) : (
              <p>Loading your location...</p>
            )}
          </div>
        </div>
        <button
          className="w-full py-2 bg-black text-white font-bold rounded-lg hover:bg-gray-800"
          onClick={handleGetStarted}
        >
          Get Started
        </button>
      </div>

      <div className="container p-4 mx-auto bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Why Choose CabuTrans?</h1>
        <div className="mt-6">
          <div className="bg-gray-50 p-4 rounded-lg mb-4 shadow-md">
            <button
              className="flex items-center text-left w-full"
              onClick={() => toggleDropdown("maps")}
            >
              <span className="mr-3">&gt;</span>
              Easy-to-read maps
            </button>
            {activeDropdown === "maps" && (
              <p className="ml-8 text-gray-600 mt-2">
                Find your way around with intuitive and clear maps designed for
                convenience.
              </p>
            )}
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mb-4 shadow-md">
            <button
              className="flex items-center text-left w-full"
              onClick={() => toggleDropdown("updates")}
            >
              <span className="mr-3">&gt;</span>
              Real-Time transport updates
            </button>
            {activeDropdown === "updates" && (
              <p className="ml-8 text-gray-600 mt-2">
                Stay updated with live transport schedules and delays to save
                time.
              </p>
            )}
          </div>

          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <button
              className="flex items-center text-left w-full"
              onClick={() => toggleDropdown("navigation")}
            >
              <span className="mr-3">&gt;</span>
              Simplified navigation for students and visitors
            </button>
            {activeDropdown === "navigation" && (
              <p className="ml-8 text-gray-600 mt-2">
                Get step-by-step guidance tailored for students and first-time
                visitors.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
