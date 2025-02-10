import React, { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLogoOut, setIsLogoOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Make the logo appear
    }, 700);

    const logoOutTimer = setTimeout(() => {
      setIsLogoOut(true);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(logoOutTimer);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative  flex justify-center items-center w-full h-full">
        \
        <div className="absolute inset-0 bg-black opacity-90 backdrop-blur-md"></div>
        <img
          src="/CabuTrans.png"
          alt="CabuTrans Logo"
          className={`transition-all duration-800 ease-in-out ${
            isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
          } h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 z-10 object-contain ${
            isLogoOut ? "translate-x-[-150%]" : ""
          }`}
        />
        <h1
          className={`absolute text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white transition-all duration-1000 ease-in-out ${
            isLogoOut
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          CabuTrans
        </h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
