import {connect} from "react-redux";
import MoviePageDetails from "./movie-page-details";
import {similarFilmsSelector, filmSelector} from "../../reducer/data/selectors";

const mapStateToProps = (state, ownProps) => {
  const film = filmSelector(state, ownProps.match.params.id);
  return {
    film,
    similarFilms: similarFilmsSelector(state, film)
  };
};

export default connect(mapStateToProps)(MoviePageDetails);
