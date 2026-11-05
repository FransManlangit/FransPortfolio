import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ContactMe from "./components/ContactMe/ContactMe";
import Chatwidget from "./components/ChatBot/ChatWidget";
import "./App.css";
import Home from "./pages/Home/Home";
import Projects from "./components/Projects/Projects";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactme" element={<ContactMe />} />
        <Route path="/Projects" element={<Projects />} />
       
      </Routes>
      <Chatwidget/>
    </>
  );
}

export default App;
