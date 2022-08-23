import axios from 'axios';
import configApp from '../config/configApp';
import { StorePersist } from '../../utils/store/store.utils';
import APP_CONSTANTS from '../constants/app.constants';

axios.defaults.withCredentials = true;

const api = axios.create({
  baseURL: configApp.baseURL,
  withCredentials: true,
});

api.interceptors.request.use(function (config) {
  const userInfo = StorePersist.get(StorePersist.PERSIST_KEYS.USER_INFO);
  config.headers.Authorization = `Bearer ${userInfo?.token}`;
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (err) => {
    const { status } = err.response;

    switch (status) {
      case 403:
        StorePersist.remove(StorePersist.PERSIST_KEYS.USER_INFO);
        window.location.replace(APP_CONSTANTS.LOGIN_PAGE);
        break;
      default:
        break;
    }

    return Promise.reject(err);
  }
);

export default api;
