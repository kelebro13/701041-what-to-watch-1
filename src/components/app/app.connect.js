import {getGenres} from "./app-utils";
import {changeSelectedGenre} from "../../reducer";
import {connect} from "react-redux";
import App from "./app";

const mapStateToProps = (state) => {
  const {genre, films, filmsByGenre} = state;
  const genres = getGenres(films);

  return {
    genre,
    genres,
    filmsByGenre
  };
};

const mapDispatchToProps = {
  changeSelectedGenre
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)(App);
