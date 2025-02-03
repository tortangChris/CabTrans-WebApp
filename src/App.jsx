import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import HowToUse from "./Pages/HowToUse";
import ModeOfTransportation from "./Pages/ModeOfTransportation";
import TricRoute from "./Pages/TricRoute";
import WalkingPath from "./Pages/WalkingPath";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/how-to-use" element={<HowToUse />} />
        <Route path="/mode-of-transport" element={<ModeOfTransportation />} />
        <Route path="/tricycle-route" element={<TricRoute />} />
        <Route path="/walking-path" element={<WalkingPath />} />
        <Route path="/" />
      </Routes>
    </Router>
  );
};

export default App;
