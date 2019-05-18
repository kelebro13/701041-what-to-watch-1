import {initialState, reducer, ActionCreators, CHANGE_GENRE, GET_FILMS_BY_GENRE} from "./reducer";

describe(`reducer`, () => {
  it(`should correct process action CHANGE_GENRE`, () => {
    const newGenre = `Comedies`;
    const actionCreator = ActionCreators[CHANGE_GENRE];
    const store = reducer(initialState, actionCreator(newGenre));

    expect(store).toEqual(Object.assign({}, initialState, {genre: newGenre}));
  });

  it(`should correct process action GET_FILMS_BY_GENRE`, () => {
    const filmsByGenre = [
      {
        title: `Aviator`,
        genre: `Dramas`,
        posterSrc: ``,
        sources: {
          mp4: ``,
          webm: ``
        }
      },
      {
        title: `We need to talk about Kevin`,
        genre: `Dramas`,
        posterSrc: ``,
        sources: {
          mp4: ``,
          webm: ``
        }
      }
    ];
    const actionCreator = ActionCreators[GET_FILMS_BY_GENRE];
    const store = reducer(initialState, actionCreator(filmsByGenre));

    expect(store).toEqual(Object.assign({}, initialState, {filmsByGenre}));
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

  it(`check GET_FILMS_BY_GENRE`, () => {
    const filmsByGenre = [
      {
        title: `Aviator`,
        genre: `Dramas`,
        posterSrc: ``,
        sources: {
          mp4: ``,
          webm: ``
        }
      },
      {
        title: `We need to talk about Kevin`,
        genre: `Dramas`,
        posterSrc: ``,
        sources: {
          mp4: ``,
          webm: ``
        }
      }
    ];
    const actionCreator = ActionCreators[GET_FILMS_BY_GENRE];
    const action = actionCreator(filmsByGenre);

    expect(action).toEqual({
      type: GET_FILMS_BY_GENRE,
      payload: filmsByGenre
    });
  });
});
