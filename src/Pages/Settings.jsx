import React, { useState } from "react";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);

  // Handle changes for notification toggle
  const handleNotificationChange = () => {
    setNotifications(!notifications);
  };

  return (
    <div className="p-6">
      {/* Notifications Settings */}
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">App Settings</h1>

        {/* Notifications Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Notifications</h2>
          <label className="mr-4">
            <input
              type="checkbox"
              checked={notifications}
              onChange={handleNotificationChange}
            />
            {notifications ? "Turn Off" : "Turn On"}
          </label>
        </div>
      </div>

      {/* Instruction Cards Section */}
      <div className="container mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-6">Instructions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Instruction 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 min-h-[350px] flex flex-col">
            <img
              src="/images/image-removebg-preview-2.png"  // Correct path
              alt="Instruction 1"
              className="w-full h-56 object-contain rounded-t-lg mb-4" // Use object-contain to display the full image
            />
            <h3 className="text-xl font-semibold mb-2">Instruction 1: Get Started</h3>
            <p className="text-gray-600 flex-grow">
              Begin by Clicking the get started
            </p>
          </div>

          {/* Instruction 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 min-h-[350px] flex flex-col">
            <img
              src="/images/image-removebg-preview-1.png"  // Correct path
              alt="Instruction 2"
              className="w-full h-56 object-contain rounded-t-lg mb-4" // Use object-contain to display the full image
            />
            <h3 className="text-xl font-semibold mb-2">Instruction 2: Select Transport Mode</h3>
            <p className="text-gray-600 flex-grow">
             Choose Your Mode of Transportation
            </p>
          </div>

          {/* Instruction 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 min-h-[350px] flex flex-col">
            <img
              src="/images/image-removebg-preview.png"  // Correct path
              alt="Instruction 3"
              className="w-full h-56 object-contain rounded-t-lg mb-4" // Use object-contain to display the full image
            />
            <h3 className="text-xl font-semibold mb-2">Instruction 3: Route</h3>
            <p className="text-gray-600 flex-grow">
            Find Nearest Walking Path            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
