import {addReviewsByFilm, loadFilms} from "../reducer/data/data";
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
      dispatch(addReviewsByFilm(filmId, response.data));
    });
};


