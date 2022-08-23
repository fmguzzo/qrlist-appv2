import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { listReducer } from './list/list.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  list: listReducer,
});
