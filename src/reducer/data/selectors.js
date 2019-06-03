import {createSelector} from 'reselect/lib/index';
import {DEFAULT_GENRE} from "../../components/genre-list/genre-list";
import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.DATA;

export const filmsSelector = (state) => state[NAME_SPACE].films;

export const genreSelector = (state) => state[NAME_SPACE].genre;

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
