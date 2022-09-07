import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { siteReducer } from "./site/site.reducer";
import { listReducer } from "./list/list.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  site: siteReducer,
  list: listReducer,
});
