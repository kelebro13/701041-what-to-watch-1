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
        films.map((film, index) => {
          return <MovieCardWrapped
            key={index}
            id={index}
            film={film}
            onActiveCardChange={onActiveCardChange}/>;
        })
      }
    </div>
  );
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    posterSrc: PropTypes.string.isRequired,
    sources: PropTypes.shape({
      mp4: PropTypes.string,
      webm: PropTypes.string
    }).isRequired
  })).isRequired,
  activeCard: PropTypes.number.isRequired,
  onActiveCardChange: PropTypes.func
};

export default MovieList;
