import GenreList from "../genre-list/genre-list";
import {filmType} from "../../types/types";
import withShowMore from "../../hoc/with-show-more/with-show-more";
import MovieListWithShowMore from "../movie-list-with-show-more/movie-list-with-show-more";
import InjectSvg from "../inject-svg/inject-svg";
import withActiveItem from "../../hoc/with-active-item/with-active-item";
import VideoPlayer from "../video-player/video-player";
import Header from "../header/header.connect";
import AddFavoriteFilmButton from "../add-favorite-button/add-favorite-button.connect";

const MovieListWithShowMoreWrapped = withShowMore(MovieListWithShowMore);
const VideoPlayerWrapped = withActiveItem(VideoPlayer);

class MainPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleChangeSelectedGenre = this.handleChangeSelectedGenre.bind(this);
  }

  componentDidMount() {
    const {filmsByGenre, loadFilmsRequest, film, loadPromoFilmRequest} = this.props;
    if (filmsByGenre.length === 0 && loadFilmsRequest) {
      loadFilmsRequest();
    }

    if (film === undefined && loadPromoFilmRequest) {
      loadPromoFilmRequest();
    }
  }

  handleChangeSelectedGenre(selectedGenre) {
    const {changeSelectedGenre} = this.props;
    if (changeSelectedGenre) {
      changeSelectedGenre(selectedGenre);
    }
  }

  render() {
    const {genre, genres, filmsByGenre, film, isActive, onActiveStatusChange} = this.props;
    return (
      <>
        <InjectSvg/>
        {
          film &&
          <section className="movie-card">
            <div className="movie-card__bg" style={{backgroundColor: film.backgroundColor}}>
              <img src={film.backgroundImage} alt={film.name}/>
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header className={`movie-card__head`} isIndexPage={true} />

            <div className="movie-card__wrap">
              <div className="movie-card__info">
                <div className="movie-card__poster">
                  <img src={film.posterImage} alt={`${film.name} poster`} width="218"
                    height="327"/>
                </div>

                <div className="movie-card__desc">
                  <h2 className="movie-card__title">{film.name}</h2>
                  <p className="movie-card__meta">
                    <span className="movie-card__genre">{film.genre}</span>
                    <span className="movie-card__year">{film.released}</span>
                  </p>

                  <div className="movie-card__buttons">
                    <button className="btn btn--play movie-card__button" type="button" onClick={onActiveStatusChange}>
                      <svg viewBox="0 0 19 19" width="19" height="19">
                        <use xlinkHref="#play-s"></use>
                      </svg>
                      <span>Play</span>
                    </button>
                    <AddFavoriteFilmButton filmId={film.id} isFavorite={film.isFavorite}/>
                  </div>
                </div>
              </div>
            </div>
            { film && isActive
              ? <VideoPlayerWrapped name={film.name} poster={film.posterImage} videoLink={film.videoLink} onExit={onActiveStatusChange}/>
              : null}
          </section>
        }
        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <GenreList genres={genres} activeGenre={genre} changeSelectedGenre={this.handleChangeSelectedGenre}/>
            <MovieListWithShowMoreWrapped key={`movie-list-by-${genre}`} films={filmsByGenre} initCount={20} stepCount={20}/>
          </section>

          <footer className="page-footer">
            <div className="logo">
              <a className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </>
    );
  }
}

MainPage.propTypes = {
  genre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  filmsByGenre: PropTypes.arrayOf(filmType).isRequired,
  film: filmType,
  changeSelectedGenre: PropTypes.func,
  loadFilmsRequest: PropTypes.func,
  loadPromoFilmRequest: PropTypes.func,
  isActive: PropTypes.bool,
  onActiveStatusChange: PropTypes.func
};

export default MainPage;
