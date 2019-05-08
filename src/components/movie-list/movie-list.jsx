import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";

const MovieList = (props) => {
  const titleClickHandler = () => {};
  const previewClickHandler = () => {};

  return (
    <div className="catalog__movies-list">
      {
        props.films.map((film, index) => {
          const {title, src} = film;
          return <MovieCard key={index} src={src} title={title} onTitleClick={titleClickHandler} onPreviewClick={previewClickHandler}/>;
        })
      }
    </div>
  );
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired
};

export default MovieList;
