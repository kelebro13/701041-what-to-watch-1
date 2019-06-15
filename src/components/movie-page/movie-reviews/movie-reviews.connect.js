import {connect} from 'react-redux';
import {loadReviewsByFilmRequest} from "../../../api/operations";
import {reviewsSelector} from "../../../reducer/data/selectors";
import MovieReviews from "./movie-reviews";

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: reviewsSelector(state)[ownProps.filmId]
  };
};

const mapDispatchToProps = {
  loadReviewsByFilmRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieReviews);
