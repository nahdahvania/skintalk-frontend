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
        <Route path="/tips" element={<BeritaList selectedCategory="Tips & Guides" />} />
        <Route path="/trends" element={<BeritaList selectedCategory="Trends & News" />} />
        <Route path="/skin-types" element={<BeritaList selectedCategory="Skin Types" />} />
        <Route path="/tips/:id" element={<BeritaDetail />} />
        <Route path="/trends/:id" element={<BeritaDetail />} />
        <Route path="/skin-types/:id" element={<BeritaDetail />} />
        <Route path="/berita/:id" element={<BeritaDetail />} />
      </Routes>
    </>
  );
};

export default App;
