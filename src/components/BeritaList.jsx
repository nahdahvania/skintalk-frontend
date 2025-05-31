import React, { useEffect, useState } from "react";
import BeritaCard from "./BeritaCard";
import { getBerita } from "../services/api";
import "./BeritaList.css";

const BeritaList = ({ selectedCategory }) => {
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBerita().then((data) => {
      console.log("Data berita:", data); 
      setBerita(data);
      setLoading(false);
    });
  }, []);

  const filteredBerita = selectedCategory
    ? berita.filter((item) => item.category?.name === selectedCategory)
    : berita;

  if (loading) return <p className="loading-text">Loading berita...</p>;

  return (
    <div className="berita-list">
      {filteredBerita.map((item) => (
        <BeritaCard
          key={item.id}
          id={item.id}
          title={item.name}
          excerpt={item.content?.slice(0, 100)}
          image={`http://localhost:8000/storage/${item.thumbnail}`}
          author={item.author?.name} 
        />
      ))}
    </div>
  );
};

export default BeritaList;
