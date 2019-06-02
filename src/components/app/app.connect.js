import {connect} from "react-redux";
import {filmsByGenreSelector, genreSelector, genresSelector} from "../../reducer/selectors";
import {changeSelectedGenre, loadFilms} from "../../reducer/reducer";
import App from "./app";

const mapStateToProps = (state) => {
  return {
    genre: genreSelector(state),
    genres: genresSelector(state),
    filmsByGenre: filmsByGenreSelector(state)
  };
};

const mapDispatchToProps = {
  changeSelectedGenre,
  loadFilms
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)(App);
