import Form from "../form/form";

const RATING_INPUT = `rating`;
const REVIEW_TEXT_INPUT = `review-text`;
const MIN_LENGTH = 50;
const MAX_LENGTH = 400;

const AddReviewForm = (props) => {

  const {isDisabled} = props;

  const _handleFormSubmit = (formData) => {
    const {filmId, addReviewRequest} = props;
    if (addReviewRequest) {
      _handleDisabledStateChange();
      addReviewRequest(
          filmId,
          parseInt(formData.get(RATING_INPUT), 10),
          formData.get(REVIEW_TEXT_INPUT))
        .then(() => {
          _redirect();
        })
        .catch(() => {
          _handleDisabledStateChange();
        });
    }
  };

  const _redirect = () => {
    history.back();
  };

  const _handleDisabledStateChange = () => {
    const {onDisabledStateChange} = props;
    if (onDisabledStateChange) {
      onDisabledStateChange();
    }
  };

  return (
    <div className="add-review">
      <Form className={`add-review__form`} onSubmit={_handleFormSubmit}>
        <div className="rating">
          <div className="rating__stars">
            <input className="rating__input" id="star-1" type="radio" name={RATING_INPUT} value="1" disabled={isDisabled}/>
            <label className="rating__label" htmlFor="star-1">Rating 1</label>

            <input className="rating__input" id="star-2" type="radio" name={RATING_INPUT} value="2" disabled={isDisabled}/>
            <label className="rating__label" htmlFor="star-2">Rating 2</label>

            <input className="rating__input" id="star-3" type="radio" name={RATING_INPUT} value="3" disabled={isDisabled} defaultChecked={true}/>
            <label className="rating__label" htmlFor="star-3">Rating 3</label>

            <input className="rating__input" id="star-4" type="radio" name={RATING_INPUT} value="4" disabled={isDisabled}/>
            <label className="rating__label" htmlFor="star-4">Rating 4</label>

            <input className="rating__input" id="star-5" type="radio" name={RATING_INPUT} value="5" disabled={isDisabled}/>
            <label className="rating__label" htmlFor="star-5">Rating 5</label>
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name={REVIEW_TEXT_INPUT} id="review-text"
            placeholder="Review text" minLength={MIN_LENGTH} maxLength={MAX_LENGTH} disabled={isDisabled} required></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={isDisabled}>Post</button>
          </div>

        </div>
      </Form>
    </div>
  );
};

AddReviewForm.propTypes = {
  filmId: PropTypes.number.isRequired,
  addReviewRequest: PropTypes.func,
  isDisabled: PropTypes.bool,
  onDisabledStateChange: PropTypes.func
};

export default AddReviewForm;
