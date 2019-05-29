import films from '../mocks/films';
import {DEFAULT_GENRE} from "../components/genre-list/genre-list";

export const initialState = {
  genre: `All genres`,
  films,
  filmsByGenre: films
};

export const Actions = {
  CHANGE_GENRE: `CHANGE_GENRE`
};

export const changeSelectedGenre = (genreType) => {
  return {
    type: Actions.CHANGE_GENRE,
    payload: genreType
  };
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CHANGE_GENRE: {
      const {payload: genre} = action;
      const {films: allFilms} = state;
      let filmsByGenre;
      if (typeof genre !== `string` || genre === DEFAULT_GENRE || genre === ``) {
        filmsByGenre = allFilms.slice(0);
      } else {
        filmsByGenre = allFilms.filter((film) => film.genre === genre);
      }
      return {
        ...state,
        genre,
        filmsByGenre
      };
    }
  }
  return state;
};
