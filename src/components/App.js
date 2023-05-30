import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import React, { useRef } from "react";
import About from "../pages/About";
import Logement from "../pages/Logement";
import Error from "../pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
