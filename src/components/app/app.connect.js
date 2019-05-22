import {getGenres} from "./app-utils";
import {ActionCreators, Actions} from "../../reducer";
import {connect} from "react-redux";
import App from "./app";

const mapStateToProps = (state) => {
  const {genre, films, filmsByGenre} = state;
  const genres = getGenres(films);

  return {
    genre,
    genres,
    films,
    filmsByGenre
  };
};

const mapDispatchToProps = {
  changeSelectedGenre: ActionCreators[Actions.CHANGE_GENRE],
  setFilmsByGenre: ActionCreators[Actions.SET_FILMS_BY_GENRE]
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)(App);
