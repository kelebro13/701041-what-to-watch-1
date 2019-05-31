import {connect} from "react-redux";
import {getGenres} from "../../reducer/selectors";
import {changeSelectedGenre, loadFilms} from "../../reducer/reducer";
import App from "./app";

const mapStateToProps = (state) => {
  const {genre, filmsByGenre} = state;
  const genres = getGenres(state);

  return {
    genre,
    genres,
    filmsByGenre
  };
};

const mapDispatchToProps = {
  changeSelectedGenre,
  loadFilms
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)(App);
