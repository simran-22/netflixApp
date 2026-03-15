import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { TfiSearch } from "react-icons/tfi";
import { GoHome } from "react-icons/go";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { LuClapperboard } from "react-icons/lu";
import { FaPlus, FaPlay } from "react-icons/fa";
import { IoTrendingUp } from "react-icons/io5";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import MovieRow from "./MovieRow";
import MovieModal from "./MovieModal";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const API_KEY = import.meta.env.VITE_MOVIE_KEY;
const BASE = "https://api.themoviedb.org/3";

const sections = [
  { title: "New This Week", url: `${BASE}/movie/now_playing?api_key=${API_KEY}` },
  { title: "Trending Now", url: `${BASE}/trending/all/day?api_key=${API_KEY}` },
  { title: "Popular Movies", url: `${BASE}/movie/popular?api_key=${API_KEY}` },
  { title: "Top Rated", url: `${BASE}/movie/top_rated?api_key=${API_KEY}` },
  { title: "Upcoming", url: `${BASE}/movie/upcoming?api_key=${API_KEY}` },
  { title: "Popular TV Shows", url: `${BASE}/tv/popular?api_key=${API_KEY}` },
];

const Dashboard = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [heroMovie, setHeroMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!API_KEY || API_KEY === "YOUR_TMDB_API_KEY_HERE") {
      setLoading(false);
      return;
    }
    axios
      .get(`${BASE}/trending/movie/week?api_key=${API_KEY}`)
      .then((res) => {
        const movies = res.data.results?.filter((m) => m.backdrop_path) || [];
        if (movies.length > 0) {
          setHeroMovie(movies[Math.floor(Math.random() * Math.min(5, movies.length))]);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const handleSignOut = () => {
    signOut();
    navigate("/");
  };

  const noApiKey = !API_KEY || API_KEY === "YOUR_TMDB_API_KEY_HERE";

  return (
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-icon" onClick={() => navigate("/search")}>
          <TfiSearch />
        </div>
        <div className="sidebar-icon active">
          <Link to="/dashboard"><GoHome /></Link>
        </div>
        <div className="sidebar-icon">
          <Link to="/tvscreen"><PiTelevisionSimpleBold /></Link>
        </div>
        <div className="sidebar-icon">
          <LuClapperboard />
        </div>
        <div className="sidebar-icon">
          <IoTrendingUp />
        </div>
        <div className="sidebar-icon">
          <FaPlus />
        </div>
        <div className="sidebar-icon">
          <HiOutlineArrowsRightLeft />
        </div>
      </div>

      {/* Main content */}
      <div className="dash-main">
        {/* No API Key warning */}
        {noApiKey && (
          <div className="no-api-banner">
            <h2>Welcome{user ? `, ${user.fname}` : ""}!</h2>
            <p>
              To see movies, add your free TMDB API key to the <code>.env</code> file:
            </p>
            <code style={{ display: "block", background: "#000", padding: "12px 16px", borderRadius: "6px", marginTop: "10px", fontSize: "14px" }}>
              VITE_MOVIE_KEY=your_api_key_here
            </code>
            <p style={{ marginTop: "12px", fontSize: "14px", opacity: 0.6 }}>
              Get a free key at themoviedb.org/settings/api — then restart the dev server.
            </p>
            <button className="signout-btn" onClick={handleSignOut}>Sign Out</button>
          </div>
        )}

        {/* Hero Banner */}
        {heroMovie && (
          <div
            className="dash-hero"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${heroMovie.backdrop_path})`,
            }}
          >
            <div className="dash-hero-overlay" />
            <div className="dash-hero-content">
              <div className="hero-tag">
                <span className="n-logo">N</span> SERIES
              </div>
              <h1>{heroMovie.title || heroMovie.name}</h1>
              <div className="hero-stats">
                <span className="hero-rating">
                  ⭐ {heroMovie.vote_average?.toFixed(1)}/10
                </span>
                <span className="hero-popularity">
                  {Math.round(heroMovie.popularity)}+ Streams
                </span>
              </div>
              <div className="hero-buttons">
                <button className="play-btn">
                  <FaPlay /> Play
                </button>
                <button
                  className="trailer-btn"
                  onClick={() => setSelectedMovie(heroMovie)}
                >
                  Watch Trailer
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Loading state */}
        {loading && !noApiKey && (
          <div style={{ height: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="loader"></div>
          </div>
        )}

        {/* Movie Rows */}
        {!noApiKey && (
          <div className="movie-sections">
            {sections.map((section) => (
              <MovieRow
                key={section.title}
                title={section.title}
                url={section.url}
                onMovieClick={setSelectedMovie}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default Dashboard;
