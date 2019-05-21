import VideoPlayer from '../video-player/video-player';

class MovieCard extends React.PureComponent {

  static DELAY = 1000;

  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false
    };
    this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
    this._handleCardMouseLeave = this._handleCardMouseLeave.bind(this);
  }

  render() {
    const {film, onTitleClick} = this.props;
    const {posterSrc, title, sources} = film;
    const {isPlaying} = this.state;

    return (
      <article className="small-movie-card catalog__movies-card" onMouseEnter={this._handleCardMouseEnter} onMouseLeave={this._handleCardMouseLeave}>
        <div className="small-movie-card__image">
          <VideoPlayer isPlaying={isPlaying} poster={posterSrc} sourceMp4={sources.mp4} sourceWebm={sources.webm}/>
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html" onClick={onTitleClick}>{title}</a>
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
      this.setState({isPlaying: true});
    }, MovieCard.DELAY);
  }

  _stopVideo() {
    clearTimeout(this.timerId);
    this.setState({isPlaying: false});
  }

  _changeActiveCard(isActive) {
    const {id, onActiveCardChange} = this.props;
    if (onActiveCardChange) {
      onActiveCardChange(isActive ? id : null);
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
  onTitleClick: PropTypes.func,
  onPreviewClick: PropTypes.func,
  onActiveCardChange: PropTypes.func,
};

export default MovieCard;
