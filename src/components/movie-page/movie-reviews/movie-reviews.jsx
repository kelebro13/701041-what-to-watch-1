import Review from "../../review/review";
import {reviewType} from "../../../types/types";

class MovieReviews extends React.PureComponent {
  componentDidMount() {
    const {reviews, filmId, loadReviewsByFilmRequest} = this.props;
    if (reviews === undefined && loadReviewsByFilmRequest) {
      loadReviewsByFilmRequest(filmId);
    }
  }

  render() {
    const {reviews} = this.props;
    if (reviews === undefined) {
      return null;
    }

    const borderIndex = Math.ceil(reviews.length / 2);
    return (
      <div className="movie-card__reviews movie-card__row">
        {this._renderCol(reviews.slice(0, borderIndex))}
        {this._renderCol(reviews.slice(borderIndex))}
      </div>
    );
  }

  _renderCol(reviews) {
    return (
      reviews.length > 0 && <div className="movie-card__reviews-col">
        {reviews.map((review) => <Review key={review.id} review={review}/>)}
      </div>
    );
  }
}

MovieReviews.propTypes = {
  filmId: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(reviewType),
  loadReviewsByFilmRequest: PropTypes.func
};

export default MovieReviews;
