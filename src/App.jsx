import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import BeritaList from "./components/BeritaList";
import BeritaDetail from "./components/BeritaDetail";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tips" element={<BeritaList />} />
        <Route path="/tips/:id" element={<BeritaDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
