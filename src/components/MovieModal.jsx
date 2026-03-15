import { IoMdClose } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import "./style.css";

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <IoMdClose />
        </button>
        <div className="modal-backdrop">
          <img
            src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path || movie.poster_path}`}
            alt={movie.title || movie.name}
          />
          <div className="modal-backdrop-overlay"></div>
        </div>
        <div className="modal-info">
          <h1>{movie.title || movie.name}</h1>
          <div className="modal-meta">
            <span className="modal-rating">
              <FaStar style={{ color: "#ffd700", fontSize: "14px", padding: 0 }} />{" "}
              {movie.vote_average?.toFixed(1)}
            </span>
            <span className="modal-date">
              {movie.release_date || movie.first_air_date}
            </span>
            <span className="modal-lang">
              {movie.original_language?.toUpperCase()}
            </span>
          </div>
          <p className="modal-overview">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
