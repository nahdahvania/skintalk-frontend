import { Link } from "react-router-dom";
import "./BeritaCard.css";

function BeritaCard({ id, title, excerpt, image, author }) {
  return (
    <div className="berita-card">
      <img src={image} alt={title} className="berita-image" />
      <div className="berita-content">
        <div>
          <h3 className="berita-title">
            <Link to={`/berita/${id}`} className="berita-link">
              {title}
            </Link>
          </h3>
          <div
            className="berita-excerpt"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          ></div>
        </div>
        <p className="berita-author">
          Author : {author ?? "Unknown"}
        </p>
      </div>
    </div>
  );
}

export default BeritaCard;
