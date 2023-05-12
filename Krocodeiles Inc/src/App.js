import React from "react";
import "./index.css";
import Home from "./routes/home";
import AboutUs from "./routes/about";
import Contact from "./routes/contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
