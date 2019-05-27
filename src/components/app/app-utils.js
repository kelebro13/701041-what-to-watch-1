import {DEFAULT_GENRE} from '../genre-list/genre-list';

export const getGenres = (films) => {
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
};
