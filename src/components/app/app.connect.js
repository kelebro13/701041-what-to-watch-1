import {connect} from "react-redux";
import {getGenres} from "../../reducer/selectors";
import {changeSelectedGenre} from "../../reducer/reducer";
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
  changeSelectedGenre
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)(App);
