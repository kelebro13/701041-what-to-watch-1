export const initialState = {
  genre: `All genres`,
  filmsByGenre: []
};

export const CHANGE_GENRE = `CHANGE_GENRE`;
export const GET_FILMS_BY_GENRE = `GET_FILMS_BY_GENRE`;

export const ActionCreators = {
  [CHANGE_GENRE]: (genreType) => {
    return {
      type: CHANGE_GENRE,
      payload: genreType
    };
  },
  [GET_FILMS_BY_GENRE]: (films) => {
    return {
      type: GET_FILMS_BY_GENRE,
      payload: films
    };
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_GENRE: {
      return Object.assign({}, state, {
        genre: action.payload
      });
    }
    case GET_FILMS_BY_GENRE: {
      return Object.assign({}, state, {
        filmsByGenre: action.payload
      });
    }
  }
  return state;
};
