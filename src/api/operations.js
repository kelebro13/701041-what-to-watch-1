import {loadFilms, loadReviewsByFilm} from "../reducer/data/data";
import {singIn} from "../reducer/user/user";

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
