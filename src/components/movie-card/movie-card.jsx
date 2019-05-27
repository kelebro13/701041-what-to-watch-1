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
          {renderVideo && renderVideo(film)}
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html" onClick={onTitleClick}>{film.title}</a>
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
    const {id, onActiveCardChange} = this.props;
    if (onActiveCardChange) {
      onActiveCardChange(isActive ? id : undefined);
    }
  }
}

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
  renderVideo: PropTypes.func,
  isPlaying: PropTypes.bool.isRequired,
  switchPlayer: PropTypes.func,
  onTitleClick: PropTypes.func,
  onPreviewClick: PropTypes.func,
  onActiveCardChange: PropTypes.func,
};

export default MovieCard;
