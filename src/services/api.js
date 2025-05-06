import axios from "axios";

export const getBerita = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/berita");
    console.log("RESPON API:", response.data);
    return response.data.data; // hanya ambil bagian data array-nya
  } catch (error) {
    console.error("Gagal mengambil data berita:", error);
    return [];
  }
};


