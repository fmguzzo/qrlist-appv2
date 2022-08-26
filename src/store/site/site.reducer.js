import { SITE_ACTION_TYPES } from "./site.types";

const initialState = {
  site: null,
  fetchStatus: "idle",
  updateStatus: "idle",
  error: null,
};

export function siteReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SITE_ACTION_TYPES.SITE_DETAILS_REQUEST:
      return { ...state, fetchStatus: "loading" };
    case SITE_ACTION_TYPES.SITE_DETAILS_SUCCESS:
      return { ...state, fetchStatus: "succeeded", site: payload };
    case SITE_ACTION_TYPES.SITE_DETAILS_FAILED:
      return { ...state, fetchStatus: "failed", error: payload };
    case SITE_ACTION_TYPES.SITE_UPDATE_REQUEST:
      return { ...state, updateStatus: "loading" };
    case SITE_ACTION_TYPES.SITE_UPDATE_SUCCESS:
      return { ...state, updateStatus: "succeeded", site: payload };
    case SITE_ACTION_TYPES.SITE_UPDATE_FAILED:
      return { ...state, updateStatus: "failed", error: payload };
    case SITE_ACTION_TYPES.SITE_RESET_REDUCER:
      return { ...initialState };
    default:
      return state;
  }
}
