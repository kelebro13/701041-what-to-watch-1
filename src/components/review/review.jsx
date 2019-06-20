import {reviewType} from "../../types/types";
import {getDateToString} from "../movie-page/movie-utils";

const Review = (props) => {
  const {review} = props;
  const date = new Date(review.date).toISOString().substring(0, 10);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime={date}>{getDateToString(review.date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
};

Review.propTypes = {
  review: reviewType
};

export default Review;
