const MovieCard = (props) => {
  const {film, id, onTitleClick, onActiveCardChange, onPreviewClick} = props;
  const {posterSrc, title} = film;

  const _handleCardMouseEnter = () => {
    if (onActiveCardChange) {
      onActiveCardChange(id);
    }
  };

  const _handleCardMouseLeave = () => {
    if (onActiveCardChange) {
      onActiveCardChange();
    }
  };

  const _handlePreviewClick = () => {
    if (onPreviewClick) {
      onPreviewClick(film);
    }
  };

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={_handleCardMouseEnter} onMouseLeave={_handleCardMouseLeave}>
      <button className="small-movie-card__play-btn" type="button" onClick={_handlePreviewClick}>Play</button>
      <div className="small-movie-card__image">
        <img src={posterSrc} alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html" onClick={onTitleClick}>{title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    posterSrc: PropTypes.string.isRequired,
    sources: PropTypes.shape({
      mp4: PropTypes.string,
      webm: PropTypes.string
    }).isRequired
  }).isRequired,
  onTitleClick: PropTypes.func,
  onPreviewClick: PropTypes.func,
  onActiveCardChange: PropTypes.func,
};

export default MovieCard;
