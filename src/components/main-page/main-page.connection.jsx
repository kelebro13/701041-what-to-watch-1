import {connect} from "react-redux";
import {
  promoFilmSelector,
  filmsByGenreSelector,
  genreSelector,
  genresSelector
} from "../../reducer/data/selectors";
import {changeSelectedGenre} from "../../reducer/data/data";
import {loadFilmsRequest, loadPromoFilmRequest} from "../../api/operations";
import withActiveItem from "../../hoc/with-active-item/with-active-item";
import MainPage from "./main-page";

const mapStateToProps = (state) => {
  return {
    genre: genreSelector(state),
    genres: genresSelector(state),
    filmsByGenre: filmsByGenreSelector(state),
    film: promoFilmSelector(state)
  };
};

const mapDispatchToProps = {
  changeSelectedGenre,
  loadFilmsRequest,
  loadPromoFilmRequest
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)(withActiveItem(MainPage));
