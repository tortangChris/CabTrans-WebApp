import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  CircleF,
  InfoWindowF,
} from "@react-google-maps/api";

const HomePage = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [mapCenter, setMapCenter] = useState({ lat: 14.5995, lng: 120.9842 });
  const [heading, setHeading] = useState(null);
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

  useEffect(() => {
    const handleOrientation = (event) => {
      const compassHeading = event.alpha;
      setHeading(compassHeading);
    };

    window.addEventListener("deviceorientation", handleOrientation);
    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
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
                    fillColor: "#0000FF",
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

                {heading !== null && (
                  <>
                    <MarkerF
                      position={currentLocation}
                      icon={{
                        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                        fillColor: "#FF0000",
                        fillOpacity: 1,
                        scale: 5,
                        strokeColor: "#FFFFFF",
                        strokeWeight: 2,
                        rotation: heading,
                      }}
                    />
                    <CircleF
                      center={currentLocation}
                      radius={50}
                      options={{
                        fillColor: "rgba(255, 255, 0, 0.5)",
                        strokeColor: "yellow",
                        strokeWeight: 2,
                      }}
                    />
                  </>
                )}
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
    </div>
  );
};

export default HomePage;
