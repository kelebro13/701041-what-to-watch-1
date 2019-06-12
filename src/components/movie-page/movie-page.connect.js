import {connect} from "react-redux";
import MoviePage from "./movie-page";
import {similarFilmsSelector, filmSelector} from "../../reducer/data/selectors";
import {isAuthorizationRequiredSelector} from "../../reducer/user/selectors";
import withActiveItem from "../../hoc/with-active-item/with-active-item";

const mapStateToProps = (state, ownProps) => {
  const film = filmSelector(state, ownProps.match.params.id);
  return {
    film,
    similarFilms: similarFilmsSelector(state, film).slice(0, 4),
    isAuthorizationRequired: isAuthorizationRequiredSelector(state)
  };
};

export default connect(mapStateToProps)(withActiveItem(MoviePage));
