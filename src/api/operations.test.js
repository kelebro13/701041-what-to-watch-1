import configureAPI from "./api";
import MockAdapter from "axios-mock-adapter";
import {loadFilmsRequest, singInRequest, addFavoriteFilmRequest, loadFavoriteFilmsRequest} from './operations';
import {Actions as DataActions} from "../reducer/data/data";
import {Actions as UserActions} from "../reducer/user/user";

describe(`Operations`, () => {
  let api;
  let apiMock;

  beforeEach(() => {
    api = configureAPI();
    apiMock = new MockAdapter(api);
  });

  afterEach(() => {
    api = null;
    apiMock = null;
  });

  it(`check return action LOAD_FILMS`, () => {
    const dispatch = jest.fn();
    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return loadFilmsRequest()(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: DataActions.LOAD_FILMS,
          payload: [{fake: true}],
        });
      });
  });

  it(`check return action SING_IN`, () => {
    const dispatch = jest.fn();
    apiMock
      .onPost(`/login`)
      .reply(200, {fake: true});

    return singInRequest()(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: UserActions.SING_IN,
          payload: {fake: true}
        });
      });
  });

  it(`check return action UPDATE_FILM`, () => {
    const dispatch = jest.fn();
    const filmId = 1;
    const status = 1;
    apiMock
      .onPost(`/favorite/${filmId}/${status}`)
      .reply(200, {fake: true});

    return addFavoriteFilmRequest(filmId, status)(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: DataActions.UPDATE_FILM,
          payload: {fake: true}
        });
      });
  });

  it(`check return action LOAD_FAVORITE_FILMS`, () => {
    const dispatch = jest.fn();
    apiMock
      .onGet(`/favorite`)
      .reply(200, {fake: true});

    return loadFavoriteFilmsRequest()(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: DataActions.LOAD_FAVORITE_FILMS,
          payload: {fake: true}
        });
      });
  });
});
