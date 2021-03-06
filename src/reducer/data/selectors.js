import {createSelector} from 'reselect/lib/index';
import {DEFAULT_GENRE} from "../../components/genre-list/genre-list";
import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.DATA;

export const filmsSelector = (state) => state[NAME_SPACE].films;

export const genreSelector = (state, genre) => genre || state[NAME_SPACE].genre;

export const genresSelector = createSelector(
    filmsSelector,
    (films) => {
      const defaultGenresList = [DEFAULT_GENRE];

      if (!Array.isArray(films)) {
        return defaultGenresList;
      }

      const reducer = (accumulator, film) => {
        const {genre} = film;
        if (typeof genre === `string` && genre.length > 0) {
          accumulator.add(film.genre);
        }
        return accumulator;
      };

      const genres = films.reduce(reducer, new Set(defaultGenresList));
      return Array.from(genres);
    }
);

export const filmsByGenreSelector = createSelector(
    [filmsSelector, genreSelector],
    (films, genre) => {
      if (!Array.isArray(films)) {
        return [];
      }
      if (typeof genre !== `string` || genre === DEFAULT_GENRE || genre === ``) {
        return films.slice(0);
      }
      return films.filter((film) => film.genre === genre);
    }
);

const idSelector = (state, id) => parseInt(id, 10);

export const filmSelector = createSelector(
    [filmsSelector, idSelector],
    (films, id) => {
      return films.find((film) => film.id === id) || null;
    }
);

const currentFilmSelector = (state, film) => film;

export const similarFilmsSelector = createSelector(
    [filmsSelector, currentFilmSelector],
    (films, currentFilm) => {
      return films.filter((film) => {
        return film.genre === currentFilm.genre && film.id !== currentFilm.id;
      });
    }
);

const reviewsSelector = (state) => state[NAME_SPACE].reviews;

export const reviewsByFilmSelector = createSelector(
    [reviewsSelector, idSelector],
    (reviews, filmId) => {
      if (reviews[filmId] === undefined) {
        return undefined;
      }
      return reviews[filmId].sort((film, anotherFilm) => {
        const filmDate = new Date(film.date);
        const anotherFilmDate = new Date(anotherFilm.date);
        return anotherFilmDate - filmDate;
      });
    }
);

const promoFilmIdSelector = (state) => state[NAME_SPACE].promoFilmId;

export const promoFilmSelector = createSelector(
    [filmsSelector, promoFilmIdSelector],
    (films, promoFilmId) => films.find((film) => film.id === promoFilmId)
);

export const favoriteFilmsSelector = (state) => state[NAME_SPACE].favoriteFilms;
