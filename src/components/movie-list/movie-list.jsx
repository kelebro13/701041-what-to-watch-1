import MovieCard from "../movie-card/movie-card";
import withActiveItem from "../../hoc/with-active-item/with-active-item";
import withTransformProps from "../../hoc/with-transform-props/with-transform-props";
import withVideo from "../../hoc/with-video/with-video";

const MovieCardWrapped = withActiveItem(withTransformProps((props) => {
  return {
    ...props,
    isPlaying: props.isActive,
    switchPlayer: props.onActiveStatusChange,
  };
})(withVideo(MovieCard)));

const MovieList = (props) => {
  const {films, onActiveCardChange} = props;

  return (
    <div className="catalog__movies-list">
      {
        films.map((film) => {
          return <MovieCardWrapped
            key={film.id}
            film={film}
            onActiveCardChange={onActiveCardChange}/>;
        })
      }
    </div>
  );
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
  activeCard: PropTypes.number.isRequired,
  onActiveCardChange: PropTypes.func
};

export default MovieList;
