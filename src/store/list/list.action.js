import { LIST_ACTION_TYPES } from "./list.types";
import { createAction } from "../../utils/reducer.utils";
import {
  getListsService,
  createListService,
  deleteListService,
  updateListService,
} from "../../services/list.services";
import errorHandler from "../../utils/errorHandler";

export const getListsAsync = (siteId) => async (dispatch) => {
  dispatch(createAction(LIST_ACTION_TYPES.LIST_LIST_REQUEST));

  try {
    const lists = await getListsService(siteId);
    dispatch(createAction(LIST_ACTION_TYPES.LIST_LIST_SUCCESS, lists));
  } catch (error) {
    dispatch(
      createAction(LIST_ACTION_TYPES.LIST_LIST_FAILED, errorHandler(error))
    );
  }
};

export const createListAsync = (siteId, list) => async (dispatch) => {
  dispatch(createAction(LIST_ACTION_TYPES.LIST_CREATE_REQUEST));

  try {
    const newList = await createListService(siteId, list);
    dispatch(createAction(LIST_ACTION_TYPES.LIST_CREATE_SUCCESS, newList));
  } catch (error) {
    dispatch(
      createAction(LIST_ACTION_TYPES.LIST_CREATE_FAILED, errorHandler(error))
    );
  }
};

export const updateListAsync = (listId, list) => async (dispatch) => {
  dispatch(createAction(LIST_ACTION_TYPES.LIST_UPDATE_REQUEST));

  try {
    const updatedList = await updateListService(listId, list);
    dispatch(createAction(LIST_ACTION_TYPES.LIST_UPDATE_SUCCESS, updatedList));
  } catch (error) {
    dispatch(
      createAction(LIST_ACTION_TYPES.LIST_UPDATE_FAILED, errorHandler(error))
    );
  }
};

export const deleteListAsync = (listId) => async (dispatch) => {
  dispatch(createAction(LIST_ACTION_TYPES.LIST_DELETE_REQUEST));

  try {
    const deletedList = await deleteListService(listId);
    dispatch(createAction(LIST_ACTION_TYPES.LIST_DELETE_SUCCESS, deletedList));
    dispatch(listFetchReset());
  } catch (error) {
    dispatch(
      createAction(LIST_ACTION_TYPES.LIST_DELETE_FAILED, errorHandler(error))
    );
  }
};

export const listFetchReset = () =>
  createAction(LIST_ACTION_TYPES.LIST_RESET_STATUS);
