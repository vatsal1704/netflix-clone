import axios from "./axios";
import React, { useEffect, useState } from "react";
import requests from "./requests";
import "./banner.css";
const base_url = "https://image.tmdb.org/t/p/original/";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * (request.data.results.length - 1))
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            ${base_url}${movie?.backdrop_path}
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className="banner-btns">
          <button className="btn">Play</button>
          <button className="btn">My list</button>
        </div>
        <h1 className="description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="banner-fadeBottom" />
    </header>
  );
};

export default Banner;
