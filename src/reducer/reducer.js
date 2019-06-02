import {DEFAULT_GENRE} from "../components/genre-list/genre-list";

export const initialState = {
  genre: `All genres`,
  films: []
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
  }
  return state;
};
