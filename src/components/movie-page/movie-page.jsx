import {Link} from 'react-router-dom';
import {filmType} from "../../types/types";
import withActiveItem from "../../hoc/with-active-item/with-active-item";
import RoutePath from "../../routes";
import MovieList from "../movie-list/movie-list";
import Tabs from "../tabs/tabs";
import InjectSvg from "../inject-svg/inject-svg";
import VideoPlayer from "../video-player/video-player";
import Header from "../header/header.connect";
import MovieReviews from "./movie-reviews/movie-reviews.connect";
import MovieOverview from "./movie-overview/movie-overview";
import MovieDetails from "./movie-details/movie-details";
import AddFavoriteFilmButton from "../add-favorite-button/add-favorite-button.connect";
import Footer from "../footer/footer";

const VideoPlayerWrapped = withActiveItem(VideoPlayer);

const MoviePage = (props) => {
  const {film, similarFilms, isActive, onActiveStatusChange, isAuthorizationRequired} = props;

  const handlePlayButtonClick = () => {
    if (onActiveStatusChange) {
      onActiveStatusChange();
    }
  };

  return (
    film && <>
      <InjectSvg/>

      <section className="movie-card movie-card--full" style={{backgroundColor: film.backgroundColor}}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={film.backgroundImage} alt={film.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header className={`movie-card__head`}/>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={handlePlayButtonClick}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <AddFavoriteFilmButton filmId={film.id} isFavorite={film.isFavorite}/>
                {!isAuthorizationRequired && <Link to={`${RoutePath.FILM}/${film.id}${RoutePath.ADD_REVIEW}`} className="btn movie-card__button">Add review</Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={film.posterImage} alt={`${film.name} poster`} width="218"
                height="327"/>
            </div>

            <div className="movie-card__desc">
              <Tabs key={film.id} items={[`Overview`, `Details`, `Reviews`]}>
                <MovieOverview film={film}/>
                <MovieDetails film={film}/>
                <MovieReviews filmId={film.id}/>
              </Tabs>
            </div>
          </div>
        </div>
        {isActive && <VideoPlayerWrapped name={film.name} poster={film.posterImage} videoLink={film.videoLink} onExit={onActiveStatusChange}/>}
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MovieList films={similarFilms} activeCard={1} />
        </section>

        <Footer isIndexPage={false}/>
      </div>
    </>
  );
};

MoviePage.propTypes = {
  film: filmType,
  similarFilms: PropTypes.arrayOf(filmType),
  isActive: PropTypes.bool,
  onActiveStatusChange: PropTypes.func,
  isAuthorizationRequired: PropTypes.bool
};

export default MoviePage;
