import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import BeritaList from "./components/BeritaList";
import BeritaDetail from "./components/BeritaDetail";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tips" element={<BeritaList />} />
        <Route path="/tips/:id" element={<BeritaDetail />} />
      </Routes>
    </>
  );
};

export default App;
