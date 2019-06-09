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
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string,
    previewImage: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundColor: PropTypes.string,
    videoLink: PropTypes.string,
    previewVideoLink: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.number,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number,
    isFavorite: PropTypes.bool,
  }),
};

export default MovieOverview;
