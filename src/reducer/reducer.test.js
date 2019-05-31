import MockAdapter from 'axios-mock-adapter';
import {reducer, Actions, changeSelectedGenre, loadFilms} from "./reducer";
import {DEFAULT_GENRE} from "../components/genre-list/genre-list";
import configureAPI from '../api';

describe(`ActionCreators`, () => {

  it(`check return action CHANGE_GENRE`, () => {
    const newGenre = `Comedies`;
    const action = changeSelectedGenre(newGenre);

    expect(action).toEqual({
      type: Actions.CHANGE_GENRE,
      payload: newGenre
    });
  });

  it(`check return action LOAD_FILMS`, () => {
    const api = configureAPI();
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return loadFilms(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: Actions.LOAD_FILMS,
          payload: [{fake: true}],
        });
      });
  });
});

describe(`reducer`, () => {
  const films = [
    {
      title: `Fantastic Beasts: The Crimes of Grindelwald`,
      genre: `Kids & Family`,
      posterSrc: ``,
      sources: {
        mp4: ``,
        webm: ``
      }
    },
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

  const initialState = {
    genre: `All genres`,
    films,
    filmsByGenre: films
  };

  it(`should set correct films by genre`, () => {
    const genre = `Dramas`;

    const store = reducer(initialState, changeSelectedGenre(genre));

    expect(store).toEqual({
      ...initialState,
      genre,
      filmsByGenre: [
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
      ]
    });
  });

  it(`should return films only certain genre`, () => {
    const genre = `Dramas`;
    const store = reducer(initialState, changeSelectedGenre(genre));

    expect(store).toEqual({
      ...initialState,
      genre,
      filmsByGenre: [
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
      ]
    });
  });

  it(`should return all films by default genre`, () => {
    const genre = DEFAULT_GENRE;

    const store = reducer(initialState, changeSelectedGenre(genre));

    expect(store).toEqual({
      ...initialState,
      genre,
      filmsByGenre: films
    });
  });

  it(`should return all films by empty genre`, () => {
    const genre = ``;
    const store = reducer(initialState, changeSelectedGenre(genre));

    expect(store).toEqual({
      ...initialState,
      genre,
      filmsByGenre: films
    });
  });

  it(`should return all films by invalid genre`, () => {
    const genre = null;
    const store = reducer(initialState, changeSelectedGenre(genre));

    expect(store).toEqual({
      ...initialState,
      genre,
      filmsByGenre: films
    });
  });

  it(`should return the initial state`, () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });
});
