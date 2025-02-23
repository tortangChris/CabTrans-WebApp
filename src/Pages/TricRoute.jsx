import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Info } from "lucide-react";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindowF,
  PolylineF,
} from "@react-google-maps/api";

const TricyclePath = () => {
  const navigate = useNavigate();
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);
  const [routePath, setRoutePath] = useState(null);

  const handleBack = () => {
    navigate(-1);
  };

  const handleRouteClick = (routeName, start, end) => {
    setSelectedRoute(routeName === selectedRoute ? null : routeName);
    fetchRoute(start, end);
    setActiveMarker(null);
  };

  const fetchRoute = (start, end) => {
    const directionsService = new window.google.maps.DirectionsService();

    const request = {
      origin: start,
      destination: end,
      travelMode: window.google.maps.TravelMode.DRIVING,
    };

    directionsService.route(request, (result, status) => {
      if (status === "OK") {
        const path = result.routes[0].overview_path;
        setRoutePath(path); // Update the polyline path
      } else {
        console.error("Directions request failed due to " + status);
      }
    });
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  });

  const routes = [
    {
      id: 1,
      name: "Route 1",
      description: "Katapatan Highway to Katapatan Railway",
      price: "₱12 - ₱60",
      time: "5 min.",
      image: "/Tricycle.png",
      markers: [
        {
          id: 1,
          name: "Katapatan Highway",
          position: { lat: 14.256452563952442, lng: 121.12896323573172 },
        },
        {
          id: 2,
          name: "Katapatan Railway",
          position: { lat: 14.25766756633873, lng: 121.13510564019286 },
        },
      ],
      start: { lat: 14.256452563952442, lng: 121.12896323573172 },
      end: { lat: 14.25766756633873, lng: 121.13510564019286 },
    },
    {
      id: 2,
      name: "Route 2",
      description: "Katapatan Railway to Katapatan Highway",
      price: "₱12 - ₱60",
      time: "5 min.",
      image: "/Tricycle.png",
      markers: [
        {
          id: 1,
          name: "Katapatan Railway",
          position: { lat: 14.25766756633873, lng: 121.13510564019286 },
        },
        {
          id: 2,
          name: "Katapatan Highway",
          position: { lat: 14.256452563952442, lng: 121.12896323573172 },
        },
      ],
      start: { lat: 14.25766756633873, lng: 121.13510564019286 },
      end: { lat: 14.256452563952442, lng: 121.12896323573172 },
    },
    {
      id: 3,
      name: "Route 3",
      description: "PNC to Katapatan Highway",
      price: "₱12 - ₱60",
      time: "8 min.",
      image: "/Tricycle.png",
      markers: [
        {
          id: 1,
          name: "PNC",
          position: { lat: 14.259241501566798, lng: 121.13406361231847 },
        },
        {
          id: 2,
          name: "Katapatan Highway",
          position: { lat: 14.256452563952442, lng: 121.12896323573172 },
        },
      ],
      start: { lat: 14.259241501566798, lng: 121.13406361231847 },
      end: { lat: 14.256452563952442, lng: 121.12896323573172 },
    },
    {
      id: 4,
      name: "Route 4",
      description: "Katapatan Station to Katapatan Mall",
      price: "₱12 - ₱60",
      time: "8 min.",
      image: "/Tricycle.png",
      markers: [
        {
          id: 1,
          name: "Katapatan Highway",
          position: { lat: 14.256452563952442, lng: 121.12896323573172 },
        },
        {
          id: 2,
          name: "PNC",
          position: { lat: 14.259241501566798, lng: 121.13406361231847 },
        },
      ],
      start: { lat: 14.256452563952442, lng: 121.12896323573172 },
      end: { lat: 14.259241501566798, lng: 121.13406361231847 },
    },
  ];

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
        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold ml-4">
          Tricycle Path
        </h1>
      </div>

      <div className="container mx-auto bg-white shadow-lg rounded-lg p-6 flex flex-col space-y-4 flex-grow">
        {/* Map Section */}
        <div className="w-full h-60 sm:h-72 md:h-[450px] lg:h-[400px] bg-gray-300 rounded-lg mb-4">
          <div className="h-full bg-gray-400 flex items-center justify-center text-white font-bold">
            {isLoaded ? (
              <GoogleMap
                center={{ lat: 14.258117975456784, lng: 121.13233794156204 }}
                onClick={() => setActiveMarker(null)}
                zoom={16.2}
                mapContainerStyle={{
                  width: "100%",
                  height: "100%",
                }}
              >
                {selectedRoute &&
                  routes
                    .find((route) => route.name === selectedRoute)
                    .markers.map(({ id, name, position }, index) => (
                      <MarkerF
                        key={id}
                        position={position}
                        onClick={() => handleActiveMarker(id)}
                        icon={{
                          path:
                            index === 0
                              ? google.maps.SymbolPath.CIRCLE
                              : undefined, // End marker will use default pin icon
                          fillColor: index === 0 ? "#0000FF" : undefined, // Blue color for starting marker
                          fillOpacity: 1,
                          scale: 7,
                          strokeColor: "#FFFFFF",
                          strokeWeight: 2,
                        }}
                      >
                        {activeMarker === id ? (
                          <InfoWindowF
                            onCloseClick={() => setActiveMarker(null)}
                          >
                            <div>{name}</div>
                          </InfoWindowF>
                        ) : null}
                      </MarkerF>
                    ))}

                {routePath && (
                  <PolylineF
                    path={routePath}
                    options={{
                      strokeColor: "#0000FF", // Blue trace color
                      strokeOpacity: 1.0,
                      strokeWeight: 5,
                    }}
                  />
                )}
              </GoogleMap>
            ) : null}
          </div>
        </div>

        <div className="w-full flex flex-col space-y-4">
          <div className="bg-gray-800 text-white p-4 rounded-lg flex items-center">
            <Info size={24} className="mr-2" />
            <span className="text-sm sm:text-base">
              Please select a route from the list below to proceed.
            </span>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-base sm:text-xl md:text-2xl font-semibold mb-4">
              Select a Route:
            </h2>
            {routes.map((route) => (
              <button
                key={route.id}
                className={`w-full flex justify-between items-center p-3 mb-2 sm:p-4 rounded-lg text-left font-semibold transition ${
                  selectedRoute === route.name
                    ? "bg-black text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() =>
                  handleRouteClick(route.name, route.start, route.end)
                }
              >
                <div className="flex items-center space-x-3 sm:space-x-4 w-full">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                    <img
                      src={route.image}
                      alt="Tricycle"
                      className="w-full h-full object-contain z-10 border-white rounded-full"
                    />
                  </div>

                  <div className="flex-1">
                    <span className="block font-medium text-[14px] sm:text-lg">
                      {route.name}
                    </span>
                    <p className="text-[12px] sm:text-sm text-gray-500">
                      {route.description}
                    </p>
                  </div>

                  <div className="text-right text-[14px] sm:text-base">
                    <span className="block">{route.price}</span>
                    <span className="block">{route.time}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="w-full flex mt-8 justify-center">
          <button
            className={`w-full sm:w-72 md:w-96 lg:w-300 py-3 px-8 ${
              selectedRoute
                ? "bg-black hover:bg-gray-800"
                : "bg-gray-400 cursor-not-allowed"
            } text-white font-bold rounded-lg transition text-[14px] sm:text-base`}
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
