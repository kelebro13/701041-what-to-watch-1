import {initialState, reducer, ActionCreators, CHANGE_GENRE} from "./reducer";

describe(`reducer`, () => {
  it(`should correct process action CHANGE_GENRE`, () => {
    const newGenre = `Comedies`;
    const actionCreator = ActionCreators[CHANGE_GENRE];
    const store = reducer(initialState, actionCreator(newGenre));

    expect(store).toEqual(Object.assign({}, initialState, {genre: newGenre}));
  });

  it(`should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});

describe(`ActionCreators`, () => {
  it(`check CHANGE_GENRE`, () => {
    const newGenre = `Comedies`;
    const actionCreator = ActionCreators[CHANGE_GENRE];
    const action = actionCreator(newGenre);

    expect(action).toEqual({
      type: CHANGE_GENRE,
      payload: newGenre
    });
  });
});
