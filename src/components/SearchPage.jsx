import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import MovieModal from "./MovieModal";
import "./style.css";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const navigate = useNavigate();

  const API_KEY = import.meta.env.VITE_MOVIE_KEY;

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim().length < 2) {
      setResults([]);
      return;
    }
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(value)}`
      )
      .then((res) => {
        setResults(
          res.data.results.filter(
            (item) =>
              (item.media_type === "movie" || item.media_type === "tv") &&
              item.poster_path
          )
        );
      })
      .catch(() => {});
  };

  return (
    <div className="search-page">
      <div className="search-header">
        <button className="search-back" onClick={() => navigate("/dashboard")}>
          <IoArrowBack />
        </button>
        <input
          type="text"
          className="search-input"
          placeholder="Search movies, TV shows..."
          value={query}
          onChange={handleSearch}
          autoFocus
        />
      </div>
      <div className="search-results">
        {results.length === 0 && query.length >= 2 && (
          <p style={{ color: "rgba(255,255,255,0.5)", textAlign: "center", marginTop: "60px" }}>
            No results found for "{query}"
          </p>
        )}
        {results.map((item) => (
          <div
            key={item.id}
            className="cards"
            onClick={() => setSelectedMovie(item)}
          >
            <img
              className="img-fluid"
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title || item.name}
              loading="lazy"
            />
            <p className="text-white">{item.title || item.name}</p>
          </div>
        ))}
      </div>
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
};

export default SearchPage;
