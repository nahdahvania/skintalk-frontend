import { useEffect, useState } from "react";
import axios from "axios";

export default function AuthorList() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/authors")
      .then((res) => {
        setAuthors(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {authors.map((author) => (
        <div key={author.id} className="bg-white shadow-md rounded-2xl p-4 transition hover:shadow-lg">
          <h2 className="text-xl font-bold mb-2">{author.name}</h2>
          <p className="text-gray-600 text-sm">{author.bio}</p>
        </div>
      ))}
    </div>
  );
}
