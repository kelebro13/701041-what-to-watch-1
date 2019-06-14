import {Link} from 'react-router-dom';
import {filmType} from "../../types/types";
import withActiveItem from "../../hoc/with-active-item/with-active-item";
import RoutePath from "../../routes";
import MovieList from "../movie-list/movie-list";
import Tabs from "../tabs/tabs";
import InjectSvg from "../inject-svg/inject-svg";
import VideoPlayer from "../video-player/video-player";
import Header from "../header/header.connect";
import MovieReviews from "./movie-reviews/movie-reviews";
import MovieOverview from "./movie-overview/movie-overview";
import MovieDetails from "./movie-details/movie-details";

const VideoPlayerWrapped = withActiveItem(VideoPlayer);

const MoviePage = (props) => {
  const {film, similarFilms, onActiveStatusChange, isActive, isAuthorizationRequired} = props;

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
                <span className="movie-card__year">{film.release}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={onActiveStatusChange}>
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
                <MovieReviews/>
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

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
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
};

MoviePage.propTypes = {
  film: filmType,
  similarFilms: PropTypes.arrayOf(filmType),
  isActive: PropTypes.bool,
  onActiveStatusChange: PropTypes.func,
  isAuthorizationRequired: PropTypes.bool
};

export default MoviePage;
