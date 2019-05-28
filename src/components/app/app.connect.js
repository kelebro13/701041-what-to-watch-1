import {getGenres} from "./app-utils";
import {setFilmsByGenre, changeSelectedGenre} from "../../reducer";
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
  changeSelectedGenre,
  setFilmsByGenre
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)(App);
