import {DEFAULT_GENRE} from "../../components/genre-list/genre-list";

const initialState = {
  genre: DEFAULT_GENRE,
  films: [],
  favoriteFilms: null
};

const Actions = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
  UPDATE_FILM: `UPDATE_FILM`,
  LOAD_FAVORITE_FILMS: `LOAD_FAVORITE_FILMS`
};

const changeSelectedGenre = (genreType) => {
  return {
    type: Actions.CHANGE_GENRE,
    payload: genreType
  };
};

const loadFilms = (films) => {
  return {
    type: Actions.LOAD_FILMS,
    payload: films
  };
};

const updateFilm = (film) => {
  return {
    type: Actions.UPDATE_FILM,
    payload: film
  };
};

const loadFavoriteFilms = (films) => {
  return {
    type: Actions.LOAD_FAVORITE_FILMS,
    payload: films
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CHANGE_GENRE: {
      return {
        ...state,
        genre: action.payload
      };
    }
    case Actions.LOAD_FILMS: {
      return {
        ...state,
        genre: DEFAULT_GENRE,
        films: action.payload
      };
    }
    case Actions.UPDATE_FILM: {
      return {
        ...state,
        films: state.films.map((film) => {
          if (film.id === action.payload.id) {
            return action.payload;
          }
          return film;
        }),
        favoriteFilms: null
      };
    }
    case Actions.LOAD_FAVORITE_FILMS: {
      return {
        ...state,
        favoriteFilms: action.payload
      };
    }
  }
  return state;
};

export {
  Actions,
  changeSelectedGenre,
  loadFilms,
  updateFilm,
  loadFavoriteFilms,
  reducer
};
