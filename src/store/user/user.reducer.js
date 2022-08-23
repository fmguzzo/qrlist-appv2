import USER_ACTION_TYPES from './user.types';

import { StorePersist } from '../../utils/store.utils';

const initialState = {
  userInfo: StorePersist.get(StorePersist.PERSIST_KEYS.USER_INFO),
  isLoading: false,
  error: null,
};

export function userReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.USER_LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case USER_ACTION_TYPES.USER_LOGIN_SUCCESS:
      return { ...state, isLoading: false, userInfo: payload };
    case USER_ACTION_TYPES.USER_LOGIN_FAILED:
      return { ...state, isLoading: false, error: payload };
    case USER_ACTION_TYPES.USER_REGISTER_REQUEST:
      return { ...state, isLoading: true };
    case USER_ACTION_TYPES.USER_REGISTER_SUCCESS:
      return { ...state, isLoading: false, userInfo: 'Registered' };
    case USER_ACTION_TYPES.USER_REGISTER_FAILED:
      return { ...state, isLoading: false, error: payload };
    case USER_ACTION_TYPES.USER_RESET:
      return { ...initialState, userInfo: '' };
    case USER_ACTION_TYPES.USER_LOGOUT:
      return {};
    default:
      return state;
  }
}
