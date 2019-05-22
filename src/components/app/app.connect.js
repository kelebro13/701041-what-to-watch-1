import {getFilmsByGenre, getGenres} from "./app-utils";
import {ActionCreators, Actions} from "../../reducer";
import {connect} from "react-redux";
import App from "./app";

const mapStateToProps = (state) => {
  const {genre} = state;
  const films = getFilmsByGenre(genre, state.films);
  const genres = getGenres(state.films);

  return {
    genre,
    genres,
    films,
  };
};

const mapDispatchToProps = {
  changeSelectedGenre: ActionCreators[Actions.CHANGE_GENRE]
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)(App);
