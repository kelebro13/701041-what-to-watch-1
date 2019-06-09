import {connect} from "react-redux";
import MoviePage from "./movie-page";
import {similarFilmsSelector, filmSelector} from "../../reducer/data/selectors";

const mapStateToProps = (state, ownProps) => {
  const film = filmSelector(state, ownProps.match.params.id);
  return {
    film,
    similarFilms: similarFilmsSelector(state, film).slice(0, 4)
  };
};

export default connect(mapStateToProps)(MoviePage);
