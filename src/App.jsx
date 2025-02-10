import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import ModeOfTransportation from "./Pages/ModeOfTransportation";
import TricRoute from "./Pages/TricRoute";
import WalkingPath from "./Pages/WalkingPath";
import NavBar from "./Components/NavBar";
import Settings from "./Pages/Settings";
import LoadingScreen from "./Components/LoadingScreen";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/mode-of-transport" element={<ModeOfTransportation />} />
        <Route path="/tricycle-route" element={<TricRoute />} />
        <Route path="/walking-path" element={<WalkingPath />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
