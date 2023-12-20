import React from "react";

import "../../../assets/css/scroll.css";

import Navbar from "./Navbar";
import Billboard from "./BillBoard";
import MovieList from "./MovieList";
import BrowseFooter from "./BrowseFooter";

import useMovieList from "../../../hooks/useMovieList";

const Browse = React.memo(() => {
  const { data: movies = [] } = useMovieList();

  return (
    <>
      <div className="bg-[#141414]">
        <Navbar />
        <Billboard />
        <div className="pb-40 pt-40 h-full">
          <MovieList title="Faviorites" data={movies} />
        </div>
        <BrowseFooter />
      </div>
    </>
  );
});

export default Browse;
