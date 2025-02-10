import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const HomePage = () => {
  const [isOverlay, setIsOverlay] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const navigate = useNavigate();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  });

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isLargeScreen) return;

      const scrollPosition = window.scrollY;
      const mapHeight = document
        .getElementById("map-container")
        ?.getBoundingClientRect().height;

      if (scrollPosition > mapHeight) {
        setIsOverlay(false);
      } else {
        setIsOverlay(true);
      }
    };

    if (!isLargeScreen) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (!isLargeScreen) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isLargeScreen]);

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

      <div
        id="map-container"
        className="container p-4 mx-auto bg-white shadow-lg rounded-lg mb-6"
      >
        <div className="bg-gray-100 p-4 rounded-lg mb-4 shadow-sm">
          <div className="bg-gray-500 h-64 rounded-lg">
            {isLoaded ? (
              <GoogleMap
                center={{ lat: 14.25958990208862, lng: 121.13384390178402 }}
                zoom={17}
                mapContainerStyle={{
                  width: "100%",
                  height: "30vh",
                }}
              ></GoogleMap>
            ) : null}
          </div>
        </div>

        <button
          className={`py-2 px-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-all duration-300 ${
            isLargeScreen
              ? "w-full"
              : isOverlay
              ? "fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
              : "static w-full"
          }`}
          onClick={() => navigate("/mode-of-transport")}
        >
          Get Started
        </button>
      </div>

      <div className="container p-4 mx-auto bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Why Choose CabuTrans?</h1>
        <div className="mt-6">
          <div className="bg-gray-50 p-4 rounded-lg mb-4 shadow-md">
            <button className="flex items-center text-left w-full">
              <span className="mr-3">&gt;</span>
              Easy-to-read maps
            </button>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mb-4 shadow-md">
            <button className="flex items-center text-left w-full">
              <span className="mr-3">&gt;</span>
              Real-Time transport updates
            </button>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <button className="flex items-center text-left w-full">
              <span className="mr-3">&gt;</span>
              Simplified navigation for students and visitors
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
