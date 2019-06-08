import {connect} from "react-redux";
import MoviePageDetails from "./movie-page-details";
import {filmSelector} from "../../reducer/data/selectors";

const mapStateToProps = (state, ownProps) => {
  return {
    film: filmSelector(state, ownProps.match.params.id)
  };
};

export default connect(mapStateToProps)(MoviePageDetails);
