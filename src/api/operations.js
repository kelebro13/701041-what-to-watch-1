import {loadFilms, updateFilm} from "../reducer/data/data";
import {singIn} from "../reducer/user/user";
import {ResponseCode} from './api';

const loadFilmsRequest = () => (dispatch, _getState, api) => {
  return api.get(`/films`)
    .then((response) => {
      dispatch(loadFilms(response.data));
    });
};

const singInRequest = (email, password) => (dispatch, _getState, api) => {
  return api.post(`/login`, {
    email,
    password
  })
    .then((response) => {
      dispatch(singIn(response.data));
    });
};

const addFavoriteFilmRequest = (filmId, status) => (dispatch, _getState, api) => {
  return api.post(`/favorite/${filmId}/${status}`)
    .then((response) => {
      if (response.status === ResponseCode.OK) {
        dispatch(updateFilm(response.data));
      }
    });
};

export {
  loadFilmsRequest,
  singInRequest,
  addFavoriteFilmRequest
};
