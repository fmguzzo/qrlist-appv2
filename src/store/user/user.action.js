import api from '../../services/api';
import errorHandler from '../../services/errorHandler';

import { StorePersist } from '../../utils/store.utils';
import { createAction } from '../../utils/reducer.utils';

import USER_ACTION_TYPES from './user.types';

//import { SITE_UPDATE_PROFILE_RESET } from "../constants/siteConstants";

export const login = (email, password) => async (dispatch) => {
  dispatch(createAction(USER_ACTION_TYPES.USER_LOGIN_REQUEST));
  try {
    // TODO: Hash password
    const { data } = await api.post('/api/v1/sessions', {
      email,
      password,
    });

    dispatch(createAction(USER_ACTION_TYPES.USER_LOGIN_SUCCESS, data));
    StorePersist.set(StorePersist.PERSIST_KEYS.USER_INFO, data);
  } catch (error) {
    dispatch(
      createAction(USER_ACTION_TYPES.USER_LOGIN_FAILED, errorHandler(error))
    );
  }
};

export const logout = () => (dispatch) => {
  StorePersist.remove(StorePersist.PERSIST_KEYS.USER_INFO);
  dispatch(createAction(USER_ACTION_TYPES.USER_LOGOUT));
  //dispatch({ type: SITE_UPDATE_PROFILE_RESET });
  /*
  localStorage.removeItem('cartItems')
  dispatch({ type: ORDER_LIST_MY_RESET })
  dispatch({ type: USER_LIST_RESET })
  */
  document.location.href = '/';
};

export const register =
  (firstName, lastName, email, password, passwordConfirmation) =>
  async (dispatch) => {
    dispatch(createAction(USER_ACTION_TYPES.USER_REGISTER_REQUEST));

    try {
      // TODO: Hash password
      const { data } = await api.post('/api/v1/users', {
        firstName,
        lastName,
        email,
        password,
        passwordConfirmation,
      });

      dispatch(createAction(USER_ACTION_TYPES.USER_REGISTER_SUCCESS, data));
    } catch (error) {
      dispatch(
        createAction(
          USER_ACTION_TYPES.USER_REGISTER_FAILED,
          errorHandler(error)
        )
      );
    }
  };

export const reset = () => createAction(USER_ACTION_TYPES.USER_RESET);
