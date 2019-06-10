import MovieCard from "../movie-card/movie-card";
import withActiveItem from "../../hoc/with-active-item/with-active-item";
import withTransformProps from "../../hoc/with-transform-props/with-transform-props";
import withVideo from "../../hoc/with-video/with-video";
import {filmType} from "../../types/types";

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
  films: PropTypes.arrayOf(filmType).isRequired,
  activeCard: PropTypes.number.isRequired,
  onActiveCardChange: PropTypes.func
};

export default MovieList;
