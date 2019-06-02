class MovieCard extends React.PureComponent {

  static DELAY = 1000;

  constructor(props) {
    super(props);
    this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
    this._handleCardMouseLeave = this._handleCardMouseLeave.bind(this);
  }

  render() {
    const {film, onTitleClick, renderVideo} = this.props;

    return (
      <article className="small-movie-card catalog__movies-card" onMouseEnter={this._handleCardMouseEnter} onMouseLeave={this._handleCardMouseLeave}>
        <div className="small-movie-card__image">
          {renderVideo && renderVideo(film.previewImage, film.previewVideoLink)}
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html" onClick={onTitleClick}>{film.name}</a>
        </h3>
      </article>
    );
  }

  _handleCardMouseEnter() {
    const {film, onPreviewClick} = this.props;
    this._playVideo();
    this._changeActiveCard(true);
    if (onPreviewClick) {
      onPreviewClick(film);
    }
  }

  _handleCardMouseLeave() {
    this._stopVideo();
    this._changeActiveCard(false);
  }

  _playVideo() {
    this.timerId = setTimeout(() => {
      this.props.switchPlayer(true);
    }, MovieCard.DELAY);
  }

  _stopVideo() {
    clearTimeout(this.timerId);
    this.props.switchPlayer(false);
  }

  _changeActiveCard(isActive) {
    const {film, onActiveCardChange} = this.props;
    if (onActiveCardChange) {
      onActiveCardChange(isActive ? film.id : undefined);
    }
  }
}

MovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string,
    previewImage: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundColor: PropTypes.string,
    videoLink: PropTypes.string,
    previewVideoLink: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.number,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number,
    isFavorite: PropTypes.bool,
  }).isRequired,
  renderVideo: PropTypes.func,
  isPlaying: PropTypes.bool.isRequired,
  switchPlayer: PropTypes.func,
  onTitleClick: PropTypes.func,
  onPreviewClick: PropTypes.func,
  onActiveCardChange: PropTypes.func,
};

export default MovieCard;
