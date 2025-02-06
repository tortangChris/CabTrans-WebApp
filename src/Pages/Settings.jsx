import React, { useState } from "react";
import { Bell, Star, Share2, Phone } from "lucide-react"; // Import Lucide Icons

const Settings = () => {
  const [notifications, setNotifications] = useState(true);

  // Handle changes for notification toggle
  const handleNotificationChange = () => {
    setNotifications(!notifications);
  };

  // Handler for the clickable table rows (Rate App, Share App, Contact Us)
  const handleTableActionClick = (action) => {
    alert(`${action} clicked`);
    // You can replace this with actual functionality such as navigating or calling an API
  };

  return (
    <div className="p-6">
      {/* App Settings Card */}
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">App Settings</h1>

        <div className="space-y-4">
          {/* Rate App Table */}
          <div>
            <table className="min-w-full">
              <tbody>
                <tr
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => handleTableActionClick("Rate App")}
                >
                  <td className="py-2 px-4 flex items-center">
                    <Star className="w-5 h-5 mr-3 text-gray-500" />
                    Rate App
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Share App Table */}
          <div>
            <table className="min-w-full">
              <tbody>
                <tr
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => handleTableActionClick("Share App")}
                >
                  <td className="py-2 px-4 flex items-center">
                    <Share2 className="w-5 h-5 mr-3 text-gray-500" />
                    Share App
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Contact Us Table */}
          <div>
            <table className="min-w-full">
              <tbody>
                <tr
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => handleTableActionClick("Contact Us")}
                >
                  <td className="py-2 px-4 flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-gray-500" />
                    Contact Us
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Notifications Table */}
          <div>
            <table className="min-w-full">
              <tbody>
                <tr>
                  <td className="py-2 px-4 flex items-center">
                    <Bell className="w-5 h-5 mr-3 text-gray-500" />
                    Notifications
                  </td>
                  <td className="py-2 px-4">
                    <label className="mr-4">
                      <input
                        type="checkbox"
                        checked={notifications}
                        onChange={handleNotificationChange}
                      />
                      {notifications ? "Turn Off" : "Turn On"}
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Instructions Cards Section */}
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
              Find Nearest Walking Path
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
