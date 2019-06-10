import {filmType} from "../../../types/types";
import {getRatingLevel, getMovieStarring} from '../movie-utils';

const MovieOverview = (props) => {
  const {film} = props;

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{film.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getRatingLevel(film.rating)}</span>
          <span className="movie-rating__count">{`${film.scoresCount} ratings`}</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{film.description}</p>

        <p className="movie-card__director"><strong>{`Director: ${film.director}`}</strong></p>

        <p className="movie-card__starring"><strong>{getMovieStarring(film.starring)}</strong></p>
      </div>
    </>
  );
};

MovieOverview.propTypes = {
  film: filmType,
};

export default MovieOverview;
