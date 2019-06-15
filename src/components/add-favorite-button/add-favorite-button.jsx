const AddFavoriteFilmButton = (props) => {
  const {isFavorite, filmId, updateFavoriteFilmRequest} = props;

  const handleButtonClick = () => {
    if (updateFavoriteFilmRequest) {
      updateFavoriteFilmRequest(filmId, isFavorite ? 0 : 1);
    }
  };

  return (
    <button className="btn btn--list movie-card__button" type="button" onClick={handleButtonClick}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFavorite ? `#in-list` : `#add`}></use>
      </svg>
      <span>My list</span>
    </button>
  );
};

AddFavoriteFilmButton.propTypes = {
  filmId: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool,
  updateFavoriteFilmRequest: PropTypes.func
};

export default AddFavoriteFilmButton;
