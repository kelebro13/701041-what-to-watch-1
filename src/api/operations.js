import {loadFilms, loadReviewsByFilm, loadPromoFilm, updateFavoriteFilm, loadFavoriteFilms} from "../reducer/data/data";
import {singIn} from "../reducer/user/user";
import {ResponseCode} from "./api";

export const loadFilmsRequest = () => (dispatch, _getState, api) => {
  return api.get(`/films`)
    .then((response) => {
      dispatch(loadFilms(response.data));
    });
};

export const singInRequest = (email, password) => (dispatch, _getState, api) => {
  return api.post(`/login`, {
    email,
    password
  })
    .then((response) => {
      dispatch(singIn(response.data));
    });
};

export const addReviewRequest = (filmId, rating, comment) => (dispatch, _getState, api) => {
  return api.post(`/comments/${filmId}`, {
    rating,
    comment
  })
    .then((response) => {
      dispatch(loadReviewsByFilm(filmId, response.data));
    });
};

export const loadReviewsByFilmRequest = (filmId) => (dispatch, _getState, api) => {
  return api.get(`/comments/${filmId}`)
    .then((response) => {
      dispatch(loadReviewsByFilm(filmId, response.data));
    });
};

export const loadPromoFilmRequest = () => (dispatch, _getState, api) => {
  return api.get(`/films/promo`)
    .then((response) => {
      dispatch(loadPromoFilm(response.data));
    });
};


export const updateFavoriteFilmRequest = (filmId, status) => (dispatch, _getState, api) => {
  return api.post(`/favorite/${filmId}/${status}`)
    .then((response) => {
      if (response.status === ResponseCode.OK) {
        dispatch(updateFavoriteFilm(response.data));
      }
    });
};

export const loadFavoriteFilmsRequest = () => (dispatch, _getState, api) => {
  return api.get(`/favorite`)
    .then((response) => {
      dispatch(loadFavoriteFilms(response.data));
    });
};
