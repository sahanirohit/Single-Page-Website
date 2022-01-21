import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Blogs from "./Components/Blogs";
import Contact from "./Components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
