import React, { useEffect, useState } from "react";
import BeritaCard from "./BeritaCard";
import { getBerita } from "../services/api";

const BeritaList = () => {
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBerita().then((data) => {
      console.log("DATA DARI API:", data);
      setBerita(data); // Menggunakan data yang diterima dari API
      setLoading(false);
    });
  }, []);

  if (loading) return <p className="text-center py-10 text-gray-500">Loading berita...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {berita.map((item) => (
        <BeritaCard
        key={item.id}
        id={item.id}
        title={item.name}
        excerpt={item.content?.slice(0, 100)}
        image={`http://localhost:8000/storage/${item.thumbnail}`}
        author={item.author}
      />        
      ))}
    </div>
  );
};

export default BeritaList;
