import {DEFAULT_GENRE} from "../../components/genre-list/genre-list";

const initialState = {
  genre: DEFAULT_GENRE,
  films: [],
};

const Actions = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
};

const changeSelectedGenre = (genreType) => {
  return {
    type: Actions.CHANGE_GENRE,
    payload: genreType
  };
};

const loadFilms = () => (dispatch, _getState, api) => {
  return api.get(`/films`)
    .then((response) => {
      dispatch({
        type: Actions.LOAD_FILMS,
        payload: response.data
      });
    });
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
  }
  return state;
};

export {
  Actions,
  changeSelectedGenre,
  loadFilms,
  reducer
};
