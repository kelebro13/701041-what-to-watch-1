import {loadFilms} from "../reducer/data/data";
import {singIn} from "../reducer/user/user";

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

export {
  loadFilmsRequest,
  singInRequest
};
