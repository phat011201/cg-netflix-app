import React from "react";

import "../../../assets/css/scroll.css";

import Navbar from "./Navbar";
import Billboard from "./BillBoard";
import MovieList from "./MovieList";

import useMovieList from "../../../hooks/useMovieList";

const Browse = () => {
  const { data: movies = [] } = useMovieList();

  return (
    <>
      <div className="bg-zinc-900">
        <Navbar />
        <Billboard />
        <div className="pb-40 h-full">
          <MovieList title="Trending Now" data={movies} />
          <MovieList title="Faviorites" data={movies} />
        </div>
      </div>
    </>
  );
};

export default Browse;
