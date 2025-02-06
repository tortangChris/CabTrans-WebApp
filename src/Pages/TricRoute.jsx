import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TricyclePath = () => {
  const navigate = useNavigate();
  const [selectedRoute, setSelectedRoute] = useState(null);

  const handleBack = () => {
    navigate(-1);
  };

  const handleRouteClick = (routeName) => {
    setSelectedRoute((prevRoute) =>
      prevRoute === routeName ? null : routeName
    );
  };

  const routes = [
    {
      id: 1,
      name: "Route 1",
      price: "₱12 - ₱60",
      time: "10 mins",
      image: "/Tricycle.png",
    },
    {
      id: 2,
      name: "Route 2",
      price: "₱15 - ₱60",
      time: "15 mins",
      image: "/Tricycle.png",
    },
    {
      id: 3,
      name: "Route 3",
      price: "₱20 - ₱60",
      time: "20 mins",
      image: "/Tricycle.png",
    },
  ];

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
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ml-4">
          Tricycle Path
        </h1>
      </div>

      <div className="container mx-auto bg-white shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4 flex-grow max-h-screen">
        <div className="w-full h-60 sm:h-72 md:h-[450px] lg:h-[400px] bg-gray-300 rounded-lg mb-4">
          <div className="h-full bg-gray-400 flex items-center justify-center text-white font-bold">
            Map Placeholder
          </div>
        </div>

        <div className="w-full bg-white shadow-md rounded-lg p-4 mb-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
            Select a Route:
          </h2>
          {routes.map((route) => (
            <button
              key={route.id}
              className={`w-full flex justify-between items-center p-4 mb-2 rounded-lg text-left font-semibold transition ${
                selectedRoute === route.name
                  ? "bg-black text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => handleRouteClick(route.name)}
            >
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute w-12 h-12 rounded-full bg-white shadow-md"></div>
                  <img
                    src="/Tricycle.png"
                    alt="Tricycle"
                    className="w-24 h-24 object-contain z-10 border-white rounded-full"
                  />
                </div>
                <span className="font-medium text-lg sm:text-m md:text-lg">
                  {route.name}
                </span>
              </div>
              <div className="text-right">
                <span className="block">{route.price}</span>
                <span className="block">{route.time}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="w-full flex justify-center mt-auto">
          <button
            className={`w-full sm:w-72 md:w-96 lg:w-300 py-3 px-8 ${
              selectedRoute
                ? "bg-black hover:bg-gray-800"
                : "bg-gray-400 cursor-not-allowed"
            } text-white font-bold rounded-lg transition`}
            disabled={!selectedRoute}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default TricyclePath;
