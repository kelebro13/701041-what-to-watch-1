import {DEFAULT_GENRE} from "../components/genre-list/genre-list";

export const initialState = {
  genre: `All genres`,
  films: [],
  filmsByGenre: [],
};

export const Actions = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
};

export const changeSelectedGenre = (genreType) => {
  return {
    type: Actions.CHANGE_GENRE,
    payload: genreType
  };
};

export const loadFilms = () => (dispatch, _getState, api) => {
  return api.get(`/films`)
    .then((response) => {
      dispatch({
        type: Actions.LOAD_FILMS,
        payload: response.data
      });
    });
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
    case Actions.LOAD_FILMS: {
      return {
        ...state,
        genre: DEFAULT_GENRE,
        films: action.payload, // todo нужно доделать особенно
        filmsByGenre: action.payload
      };
    }
  }
  return state;
};
