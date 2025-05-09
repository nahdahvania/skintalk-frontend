import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function BeritaDetail() {
  const { id } = useParams();
  const [berita, setBerita] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/berita/${id}`)
      .then((res) => {
        setBerita(res.data.data); 
      })
      .catch((err) => {
        console.error("Gagal ambil data:", err);
      });
  }, [id]);

  if (!berita) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <img
        src={`http://localhost:8000/storage/${berita.thumbnail}`}
        alt={berita.name}
        className="w-full rounded-xl mb-4 object-cover h-64"
      />
      <h1 className="text-3xl font-bold mb-2 text-gray-800">{berita.name}</h1>
      <p className="text-sm text-gray-500 italic mb-6">By {berita.author?.name || "Unknown"}</p>
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: berita.content }}
      ></div>
    </div>
  );
}

export default BeritaDetail;
