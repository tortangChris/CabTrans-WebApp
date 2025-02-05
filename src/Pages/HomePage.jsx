import React, { useState } from "react";

const HomePage = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (item) => {
    setActiveDropdown(activeDropdown === item ? null : item);
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
