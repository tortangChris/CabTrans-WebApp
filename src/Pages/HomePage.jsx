import React, { useState } from "react";

const HomePage = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (item) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  return (
    <div className="p-6">
      <div className="container p-4 mx-auto bg-white mb-6">
        <h1 className="text-3xl font-bold">
          Navigate around Cabuyao with ease
        </h1>
        <h1 className="text-2xl text-gray-500">
          Using the best transportation options
        </h1>
      </div>

      <div className="container p-4 mx-auto bg-white mb-6">
        <h1 className="text-2xl font-bold">
          Whether you're traveling by tricycle or walking, we'll guide you to
          the best routes.
        </h1>
        <h1>
          Get real-time transport updates and simplified navigation for
          students.
        </h1>
      </div>

      <div className="container p-4 mx-auto bg-white">
        <h1 className="text-2xl font-bold">Why Choose CabuTrans?</h1>
        <div className="mt-4">
          <div className="bg-gray-50 p-3 mb-2">
            <button
              className="flex items-center text-left w-full"
              onClick={() => toggleDropdown("maps")}
            >
              <span className="mr-2">&gt;</span>
              Easy-to-read maps
            </button>
            {activeDropdown === "maps" && (
              <p className="ml-6 text-gray-600 mt-2">
                CabuTrans maps are designed to be easy to follow, showing major
                routes, stops, and the fastest ways to your destination.
              </p>
            )}
          </div>

          <div className="bg-gray-50 p-3 mb-2">
            <button
              className="flex items-center text-left w-full"
              onClick={() => toggleDropdown("updates")}
            >
              <span className="mr-2">&gt;</span>
              Real-Time transport updates
            </button>
            {activeDropdown === "updates" && (
              <p className="ml-6 text-gray-600 mt-2">
                Get live updates about public transport in your area, including
                estimated arrival times and real-time status of trips.
              </p>
            )}
          </div>

          <div className="bg-gray-50 p-3">
            <button
              className="flex items-center text-left w-full"
              onClick={() => toggleDropdown("navigation")}
            >
              <span className="mr-2">&gt;</span>
              Simplified navigation for students and visitors
            </button>
            {activeDropdown === "navigation" && (
              <p className="ml-6 text-gray-600 mt-2">
                We’ve made navigation easier for students and visitors, with
                specific routes and directions to help you get to schools or
                tourist spots with ease.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
