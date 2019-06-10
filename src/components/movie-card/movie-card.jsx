import {Link} from 'react-router-dom';
import RoutePath from "../../routes";
import {filmType} from "../../types/types";

class MovieCard extends React.PureComponent {

  static DELAY = 1000;

  constructor(props) {
    super(props);
    this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
    this._handleCardMouseLeave = this._handleCardMouseLeave.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }

  render() {
    const {film, renderVideo} = this.props;
    const url = `${RoutePath.FILM}/${film.id}`;
    return (
      <article className="small-movie-card catalog__movies-card" onMouseEnter={this._handleCardMouseEnter} onMouseLeave={this._handleCardMouseLeave}>

        <div className="small-movie-card__image">
          <Link to={url}>
            {renderVideo && renderVideo(film.previewImage, film.previewVideoLink)}
          </Link>
        </div>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to={url}>{film.name}</Link>
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
  film: filmType.isRequired,
  renderVideo: PropTypes.func,
  isPlaying: PropTypes.bool.isRequired,
  switchPlayer: PropTypes.func,
  onPreviewClick: PropTypes.func,
  onActiveCardChange: PropTypes.func,
};

export default MovieCard;
