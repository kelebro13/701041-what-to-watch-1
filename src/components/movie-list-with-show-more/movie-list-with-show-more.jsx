import {filmType} from "../../types/types";
import MovieList from "../movie-list/movie-list";

const MovieListWithShowMore = (props) => {
  const {films, countItem, changeCountItem} = props;

  const handleCountChange = (evt) => {
    evt.preventDefault();
    if (changeCountItem) {
      changeCountItem();
    }
  };

  return (
  <>
    <MovieList films={films.slice(0, countItem)}/>
    {
      countItem < films.length
        ? <div className="catalog__more">
          <button className="catalog__button" type="button" onClick={handleCountChange}>Show more</button>
        </div>
        : null
    }
  </>
  );
};

MovieListWithShowMore.propTypes = {
  films: PropTypes.arrayOf(filmType),
  countItem: PropTypes.number,
  changeCountItem: PropTypes.func
};

export default MovieListWithShowMore;
