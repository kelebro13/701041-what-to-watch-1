import axios from 'axios';
import humps from 'humps';
import {requireAuthorization} from "./reducer/user/user";

const ResponseCode = {
  FORBIDDEN: 403
};

const configureAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/wtw`,
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
      dispatch(requireAuthorization(true));
    }
    return error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};


export default configureAPI;
