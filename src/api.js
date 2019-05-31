import axios from 'axios';

const configureAPI = () => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/wtw`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;
  const onFail = (error) => {
    if (error.response.status === 403) {
      // редирект на страницу авторизации
    }
    return error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};


export default configureAPI;
