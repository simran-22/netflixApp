import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./style.css";

const MovieRow = ({ title, url, onMovieClick }) => {
  const [movies, setMovies] = useState([]);
  const rowRef = useRef(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setMovies(res.data.results?.filter((m) => m.poster_path) || []);
      })
      .catch(() => {});
  }, [url]);

  const scroll = (direction) => {
    if (rowRef.current) {
      const amount = rowRef.current.clientWidth * 0.75;
      rowRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  if (movies.length === 0) return null;

  return (
    <div className="movie-row">
      <h2 className="movie-row-title">{title}</h2>
      <div className="movie-row-wrapper">
        <button className="row-arrow row-arrow-left" onClick={() => scroll("left")}>
          <FaChevronLeft />
        </button>
        <div className="movie-row-posters" ref={rowRef}>
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="cards"
              onClick={() => onMovieClick(movie)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                alt={movie.title || movie.name}
                loading="lazy"
              />
              <div className="card-hover-info">
                <span className="card-rating">
                  <FaStar /> {movie.vote_average?.toFixed(1)}
                </span>
                <p className="card-title">{movie.title || movie.name}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="row-arrow row-arrow-right" onClick={() => scroll("right")}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default MovieRow;
