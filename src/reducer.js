import films from './mocks/films';
import {DEFAULT_GENRE} from "./components/genre-list/genre-list";

export const initialState = {
  genre: `All genres`,
  films,
  filmsByGenre: films
};

export const Actions = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  SET_FILMS_BY_GENRE: `SET_FILMS_BY_GENRE`
};

export const changeSelectedGenre = (genreType) => {
  return {
    type: Actions.CHANGE_GENRE,
    payload: genreType
  };
};

export const setFilmsByGenre = (genre, AllFilms) => {
  let filmsByGenre;
  if (!Array.isArray(AllFilms)) {
    filmsByGenre = [];
  } else if (typeof genre !== `string` || genre === DEFAULT_GENRE || genre === ``) {
    filmsByGenre = AllFilms.slice(0);
  } else {
    filmsByGenre = AllFilms.filter((film) => film.genre === genre);
  }

  return {
    type: Actions.SET_FILMS_BY_GENRE,
    payload: filmsByGenre
  };
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CHANGE_GENRE: {
      return {
        ...state,
        genre: action.payload
      };
    }
    case Actions.SET_FILMS_BY_GENRE: {
      return {
        ...state,
        filmsByGenre: action.payload
      };
    }
  }
  return state;
};
