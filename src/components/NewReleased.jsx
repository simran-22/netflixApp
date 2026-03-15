import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

const NewReleased = () => {
  const url =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=" +
    import.meta.env.VITE_MOVIE_KEY;
  const [movie, setMovie] = useState({
    nowPlaying: [],
  });

  useEffect(() => {
    axios.get(url).then((res) => {
      setMovie({ ...movie, nowPlaying: res.data.results });
    });
  }, []);

  return (
    <section className="MainSection">
      <div className="container-fluid watchingSection pl-4">
        <div className="row">
          <div className="col-sm-12">
            <h1 style={{ color: "#fff", padding: "20px 0" }}>Now Playing</h1>
          </div>
        </div>
        <div className="row continueWatching">
          {movie.nowPlaying.map((item) => {
            return (
              <div key={item.id} className="cards">
                <img
                  className="img-fluid"
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                  loading="lazy"
                />
                <p className="text-white">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewReleased;
