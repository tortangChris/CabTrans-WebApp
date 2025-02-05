import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-[#D9D9D9]">
      <div className="max-w-5xl w-full bg-[#FFFFFF] shadow-lg rounded-xl p-6 sm:p-10 text-center">
           <h2 className="text-3xl font-bold text-gray-800">About The App</h2>
        <p className="mt-4 text-gray-700 text-justify">
          CabuTrans is a smart transportation app designed to make your daily commute easier, faster, and more efficient. It provides clear and easy-to-follow routes, highlighting major stops and the quickest way to your destination. You can stay up-to-date with real-time transport information, including estimated arrival times and the current status of trips. Whether you're a student heading to school or a visitor exploring the city, CabuTrans offers tailored routes and directions to meet your needs. With user-friendly maps, live updates, and a seamless experience, getting around the city has never been more convenient.
        </p>
        </div>

      <div className="max-w-5xl w-full bg-[#FFFFFF] shadow-lg rounded-xl p-6 sm:p-10 mt-8 text-center">
      <h2 className="text-3xl font-bold text-gray-800">About The Team</h2>
        <p className="text-gray-700 mt-2">Meet the Developers</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {[
            {
              name: "Chris Ashley C. Eliserio",
              role: "Frontend & Backend Developer",
              img: "/chris.png",
            },
            {
              name: "Rochelle V. Gragasin",
              role: "Frontend Developer",
              img: "/rochelle.png",
            },
            {
              name: "Jermel S. Hernandez",
              role: "Frontend Developer",
              img: "/jermel.png",
            },
            {
              name: "Sherwin P. Corrales",
              role: "Frontend Developer",
              img: "/sherwin.png",
            },
          ].map((dev, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
              <img
                src={dev.img}
                alt={dev.name}
                className="w-24 h-24 rounded-full border-4 border-gray-500"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">{dev.name}</h3>
              <p className="text-gray-700 text-sm">3rd Year ComSci Student</p>
              <p className="text-gray-600 text-sm text-center">{dev.role}</p>
            </div>
          ))}
        </div>

      </div>

      <div className="max-w-5xl w-full bg-[#FFFFFF] shadow-lg rounded-xl p-6 sm:p-10 mt-8 text-center"></div>

      <div className="mt-5"></div>
    </div>
  );
};

export default About;
