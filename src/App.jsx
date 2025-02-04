import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import HowToUse from "./Pages/HowToUse";
import ModeOfTransportation from "./Pages/ModeOfTransportation";
import TricRoute from "./Pages/TricRoute";
import WalkingPath from "./Pages/WalkingPath";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/how-to-use" element={<HowToUse />} />
        <Route path="/mode-of-transport" element={<ModeOfTransportation />} />
        <Route path="/tricycle-route" element={<TricRoute />} />
        <Route path="/walking-path" element={<WalkingPath />} />
      </Routes>
    </Router>
  );
};

export default App;
