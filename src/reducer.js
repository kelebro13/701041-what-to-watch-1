import films from './mocks/films';

export const initialState = {
  genre: `All genres`,
  films
};

export const CHANGE_GENRE = `CHANGE_GENRE`;

export const ActionCreators = {
  [CHANGE_GENRE]: (genreType) => {
    return {
      type: CHANGE_GENRE,
      payload: genreType
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
  }
  return state;
};
