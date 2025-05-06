import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const BeritaDetail = () => {
  const { id } = useParams()
  const [berita, setBerita] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`http://localhost:8000/api/berita/${id}`)
      .then((res) => {
        setBerita(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Gagal fetch detail berita:", err)
        setLoading(false)
      })
  }, [id])

  if (loading) return <p className="text-center py-10 text-gray-500">Memuat...</p>
  if (!berita) return <p className="text-center py-10 text-red-500">Berita tidak ditemukan</p>

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img src={berita.image_url} alt={berita.title} className="w-full rounded-xl mb-6 shadow" />
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{berita.title}</h1>
      <p className="text-sm text-gray-500 mb-6">by {berita.author_name} | {new Date(berita.published_at).toLocaleDateString()}</p>
      <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: berita.content }} />
    </div>
  )
}

export default BeritaDetail

