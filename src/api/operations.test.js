import configureAPI from "./api";
import MockAdapter from "axios-mock-adapter";
import {Actions as DataActions} from "../reducer/data/data";
import {
  singInRequest,
  loadFilmsRequest,
  loadReviewsByFilmRequest,
  addReviewRequest,
  loadPromoFilmRequest,
  updateFavoriteFilmRequest, loadFavoriteFilmsRequest
} from "../api/operations";
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

  it(`should return action LOAD_FILMS`, () => {
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

  it(`should return action SING_IN`, () => {
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

  it(`should return action LOAD_COMMENTS_BY_FILM`, () => {
    const dispatch = jest.fn();
    const filmId = 1;

    apiMock
      .onGet(`/comments/${filmId}`)
      .reply(200, {fake: true});

    return loadReviewsByFilmRequest(filmId)(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: DataActions.LOAD_REVIEWS_BY_FILM,
          payload: {
            filmId,
            reviews: {fake: true}
          }
        });
      });
  });

  it(`should return action ADD_REVIEW_BY_FILM`, () => {
    const dispatch = jest.fn();
    const filmId = 1;

    apiMock
      .onPost(`/comments/${filmId}`)
      .reply(200, {fake: true});

    return addReviewRequest(filmId, 1, ``)(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: DataActions.LOAD_REVIEWS_BY_FILM,
          payload: {
            filmId,
            reviews: {fake: true}
          }
        });
      });
  });

  it(`should return action LOAD_PROMO_FILM`, () => {
    const dispatch = jest.fn();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, {fake: true});

    return loadPromoFilmRequest()(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: DataActions.LOAD_PROMO_FILM,
          payload: {fake: true}
        });
      });
  });

  it(`check return action UPDATE_FAVORITE_FILM`, () => {
    const dispatch = jest.fn();
    const filmId = 1;
    const status = 1;
    apiMock
      .onPost(`/favorite/${filmId}/${status}`)
      .reply(200, {fake: true});

    return updateFavoriteFilmRequest(filmId, status)(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: DataActions.UPDATE_FAVORITE_FILM,
          payload: {fake: true}
        });
      });
  });

  it(`check return action LOAD_FAVORITE_FILM`, () => {
    const dispatch = jest.fn();
    apiMock
      .onGet(`/favorite`)
      .reply(200, {fake: true});

    return loadFavoriteFilmsRequest()(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: DataActions.LOAD_FAVORITE_FILM,
          payload: {fake: true}
        });
      });
  });
});
