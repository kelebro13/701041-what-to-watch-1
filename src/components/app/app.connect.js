import {connect} from "react-redux";
import {filmsByGenreSelector, genreSelector, genresSelector} from "../../reducer/data/selectors";
import {changeSelectedGenre} from "../../reducer/data/data";
import {loadFilmsRequest} from "../../reducer/data/operations";
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
  loadFilmsRequest
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)(App);
