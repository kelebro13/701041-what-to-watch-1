import films from './mocks/films';

export const initialState = {
  genre: `All genres`,
  films
};

export const Actions = {
  CHANGE_GENRE: `CHANGE_GENRE`
};

export const ActionCreators = {
  [Actions.CHANGE_GENRE]: (genreType) => {
    return {
      type: Actions.CHANGE_GENRE,
      payload: genreType
    };
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CHANGE_GENRE: {
      return Object.assign({}, state, {
        genre: action.payload
      });
    }
  }
  return state;
};
