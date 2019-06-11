import axios from 'axios/index';
import humps from 'humps';
import RoutePath from "../routes";

export const SERVER_URL = `https://es31-server.appspot.com`;

const ResponseCode = {
  FORBIDDEN: 403
};

const configureAPI = () => {
  const api = axios.create({
    baseURL: `${SERVER_URL}/wtw`,
    timeout: 5000,
    withCredentials: true,
    transformRequest: [
      (data) => humps.decamelizeKeys(data),
      ...axios.defaults.transformRequest
    ],
    transformResponse: [
      ...axios.defaults.transformResponse,
      (data) => humps.camelizeKeys(data)
    ],
  });

  const onSuccess = (response) => response;
  const onFail = (error) => {
    if (error.response.status === ResponseCode.FORBIDDEN) {
      history.pushState(null, null, RoutePath.LOGIN);
    }
    return error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};


export default configureAPI;
