import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './BeritaDetail.css';
import { useNavigate } from "react-router-dom";

function BeritaDetail() {
  const { id } = useParams();
  const [berita, setBerita] = useState(null);
  const navigate = useNavigate();

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
    <div className="berita-detail-container">
      {/* Tombol kembali dipindah ke sini */}
      <button onClick={() => navigate(-1)} className="btn-kembali">
        ← Kembali
      </button>

      <img
        src={`http://localhost:8000/storage/${berita.thumbnail}`}
        alt={berita.name}
        className="berita-detail-image"
      />
      <h1 className="berita-detail-title">{berita.name}</h1>
      <p className="berita-detail-author">Author : {berita.author?.name || "Unknown"}</p>
      <div
        className="berita-detail-content"
        dangerouslySetInnerHTML={{ __html: berita.content }}
      ></div>
    </div>
  );
}

export default BeritaDetail;
