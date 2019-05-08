import React from "react";
import PropTypes from "prop-types";

const MovieCard = (props) => {
  const {src, title, onTitleClick, onPreviewClick} = props;
  return (
    <article className="small-movie-card catalog__movies-card">
      <button className="small-movie-card__play-btn" type="button" onClick={onPreviewClick}>Play</button>
      <div className="small-movie-card__image">
        <img src={src} alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html" onClick={onTitleClick}>{title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onTitleClick: PropTypes.func,
  onPreviewClick: PropTypes.func,
};

export default MovieCard;
