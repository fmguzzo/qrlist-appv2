import { LIST_ACTION_TYPES } from "./list.types";

const initialState = {
  lists: [],
  fetchStatus: "idle",
  deleteStatus: "idle",
  createStatus: "idle",
  updateStatus: "idle",
  error: null,
};

export function listReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LIST_ACTION_TYPES.LIST_LIST_REQUEST:
      return { ...state, fetchStatus: "loading" };
    case LIST_ACTION_TYPES.LIST_LIST_SUCCESS:
      return { ...state, fetchStatus: "succeeded", lists: payload };
    case LIST_ACTION_TYPES.LIST_LIST_FAILED:
      return { ...state, fetchStatus: "failed", error: payload };

    case LIST_ACTION_TYPES.LIST_CREATE_REQUEST:
      return { ...state, createStatus: "loading" };
    case LIST_ACTION_TYPES.LIST_CREATE_SUCCESS:
      return { ...state, createStatus: "succeeded" };
    case LIST_ACTION_TYPES.LIST_CREATE_FAILED:
      return { ...state, createStatus: "failed", error: payload };

    case LIST_ACTION_TYPES.LIST_DELETE_REQUEST:
      return { ...state, deleteStatus: "loading" };
    case LIST_ACTION_TYPES.LIST_DELETE_SUCCESS:
      return { ...state, deleteStatus: "succeeded" };
    case LIST_ACTION_TYPES.LIST_DELETE_FAILED:
      return { ...state, deleteStatus: "failed", error: payload };

    case LIST_ACTION_TYPES.LIST_UPDATE_REQUEST:
      return { ...state, updateStatus: "loading" };
    case LIST_ACTION_TYPES.LIST_UPDATE_SUCCESS:
      return { ...state, updateStatus: "succeeded" };
    case LIST_ACTION_TYPES.LIST_UPDATE_FAILED:
      return { ...state, updateStatus: "failed", error: payload };

    case LIST_ACTION_TYPES.LIST_RESET_STATUS:
      return { ...state, ...initialState };

    default:
      return state;
  }
}
