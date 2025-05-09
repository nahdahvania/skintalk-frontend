import { Link } from "react-router-dom";

function BeritaCard({ id, title, excerpt, image, author }) {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow max-w-4xl mx-auto">
      <img
        src={image}
        alt={title}
        className="w-full md:w-60 h-60 object-cover"
      />
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            <Link to={`/berita/${id}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div
            className="text-sm text-gray-700 mb-3"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          ></div>
        </div>
        <p className="text-xs text-gray-500 italic mt-auto">
            Author : {author ?? "Unknown"}
 
        </p>

      </div>
    </div>
  );
}

export default BeritaCard;
