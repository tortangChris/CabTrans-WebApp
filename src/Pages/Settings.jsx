import React, { useState } from "react";
import { ToggleLeft, ToggleRight } from "lucide-react";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);

  
  const handleNotificationChange = () => {
    setNotifications(!notifications);
  };

  return (
    <div className="p-6">
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">App Settings</h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Notifications</h2>
          <div className="flex items-center space-x-3">
            <div
              className={`relative flex items-center cursor-pointer transition-all 
                ${notifications ? 'bg-blue-500' : 'bg-gray-400'}
                w-12 h-6 sm:w-14 sm:h-7 md:w-16 md:h-8 lg:w-12 lg:h-6 rounded-full`}
              onClick={handleNotificationChange}
            >
              <div
                className={`absolute bg-white rounded-full shadow-md transform transition-all 
                  w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-5 lg:h-5 
                  ${notifications ? 'translate-x-6 sm:translate-x-7 md:translate-x-8 lg:translate-x-7' : 'translate-x-1'}`}
              />
            </div>
            <span className="text-gray-700 text-sm sm:text-base md:text-lg font-semibold">
              {notifications ? "On" : "Off"}
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-6">Instructions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Instruction 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 min-h-[350px] flex flex-col">
            <img
              src="/images/image-removebg-preview-2.png"
              alt="Instruction 1"
              className="w-full h-56 object-contain rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Instruction 1: Get Started</h3>
            <p className="text-gray-600 flex-grow">
              Begin by Clicking the get started
            </p>
          </div>

          {/* Instruction 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 min-h-[350px] flex flex-col">
            <img
              src="/images/image-removebg-preview-1.png"
              alt="Instruction 2"
              className="w-full h-56 object-contain rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Instruction 2: Select Transport Mode</h3>
            <p className="text-gray-600 flex-grow">
             Choose Your Mode of Transportation
            </p>
          </div>

          {/* Instruction 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 min-h-[350px] flex flex-col">
            <img
              src="/images/image-removebg-preview.png"
              alt="Instruction 3"
              className="w-full h-56 object-contain rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Instruction 3: Route</h3>
            <p className="text-gray-600 flex-grow">
              Find Nearest Walking Path
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;