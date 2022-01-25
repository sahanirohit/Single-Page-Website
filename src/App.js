import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
// import { Routes, Route, Redirect } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Blogs from "./Components/Blogs";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Blogs />
      <Contact />
      <Footer />
    </>
  );
}
