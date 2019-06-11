import {connect} from "react-redux";
import {
  filmForMainPageSelector,
  filmsByGenreSelector,
  genreSelector,
  genresSelector
} from "../../reducer/data/selectors";
import {changeSelectedGenre} from "../../reducer/data/data";
import {loadFilmsRequest} from "../../api/operations";
import MainPage from "./main-page";

const mapStateToProps = (state) => {
  return {
    genre: genreSelector(state),
    genres: genresSelector(state),
    filmsByGenre: filmsByGenreSelector(state),
    film: filmForMainPageSelector(state) // todo поправить когда будет логика избранных фильмов
  };
};

const mapDispatchToProps = {
  changeSelectedGenre,
  loadFilmsRequest
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)(MainPage);
