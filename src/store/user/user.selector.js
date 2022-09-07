export const selectUserReducer = (state) => state.user;
export const selectUserInfo = (state) => selectUserReducer(state).userInfo;
