import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./Components/Home/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import Membership from "./Components/Membership/Membership";
import TravelDesk from "./Components/Client/TravelDesk/TravelDesk";
import Activities from "./Components/Client/Activities/Activities";
import Destinations from "./Components/Destinations/Destinations";
import HotesLocations from "./Components/Destinations/HotesLocations";
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/travceldesk" element={<TravelDesk />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/destinations/:type" element={<Destinations />} />
        <Route path="/hotels" element={<HotesLocations />} />

        


        
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
