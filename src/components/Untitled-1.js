const url =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=5144c6145a1bfa3f86f050e2d0f2c539";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTQ0YzYxNDVhMWJmYTNmODZmMDUwZTJkMGYyYzUzOSIsIm5iZiI6MTcyMzY0NTQ0NS45MDU3NSwic3ViIjoiNjZiY2FmNDBkOGM3ZjA4NjEyZDA1NTM1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.RX32EPhhS4O-OTlwT13iN5YGdszEmGByTjS6wDg-Sfc",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));

// https://api.themoviedb.org/3/movie/550?api_key=de5b74991009b973929aadf16cfa4803
