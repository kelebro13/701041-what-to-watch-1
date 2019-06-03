import {loadFilms} from "./data";

const loadFilmsRequest = () => (dispatch, _getState, api) => {
  return api.get(`/films`)
    .then((response) => {
      dispatch(loadFilms(response.data));
    });
};

export {
  loadFilmsRequest
};


