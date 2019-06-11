import {Link} from 'react-router-dom';
import GenreList from "../genre-list/genre-list";
import RoutePath from "../../routes";
import {filmType} from "../../types/types";
import withShowMore from "../../hoc/with-show-more/with-show-more";
import MovieListWithShowMore from "../movie-list-with-show-more/movie-list-with-show-more";
import InjectSvg from "../inject-svg/inject-svg";

const MovieListWithShowMoreWrapped = withShowMore(MovieListWithShowMore);

class MainPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleChangeSelectedGenre = this.handleChangeSelectedGenre.bind(this);
  }

  componentDidMount() {
    const {loadFilmsRequest} = this.props;
    if (loadFilmsRequest) {
      loadFilmsRequest();
    }
  }

  handleChangeSelectedGenre(selectedGenre) {
    const {changeSelectedGenre} = this.props;
    if (changeSelectedGenre) {
      changeSelectedGenre(selectedGenre);
    }
  }

  render() {
    const {genre, genres, filmsByGenre, film} = this.props;
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

            <header className="page-header movie-card__head">
              <div className="logo">
                <a className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </a>
              </div>

              <div className="user-block">
                <Link to={RoutePath.MY_LIST}>
                  <div className="user-block__avatar">
                    <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
                  </div>
                </Link>
              </div>
            </header>

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
                    <button className="btn btn--play movie-card__button" type="button">
                      <svg viewBox="0 0 19 19" width="19" height="19">
                        <use xlinkHref="#play-s"></use>
                      </svg>
                      <span>Play</span>
                    </button>
                    <button className="btn btn--list movie-card__button" type="button">
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use xlinkHref="#add"></use>
                      </svg>
                      <span>My list</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
  loadFilmsRequest: PropTypes.func
};

export default MainPage;
