import {connect} from "react-redux";
import {filmsByGenreSelector, genreSelector, genresSelector} from "../../reducer/data/selectors";
import {changeSelectedGenre, loadFilms} from "../../reducer/data/data";
import {isAuthorizationRequiredSelector} from "../../reducer/user/selectors";
import App from "./app";

const mapStateToProps = (state) => {
  return {
    isAuthorizationRequired: isAuthorizationRequiredSelector(state),
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
