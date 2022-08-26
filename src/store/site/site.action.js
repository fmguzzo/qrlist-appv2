import { SITE_ACTION_TYPES } from "./site.types";

import {
  fetchSiteServices,
  updateSiteServices,
} from "../../services/site.services";

import errorHandler from "../../utils/errorHandler";
import { createAction } from "../../utils/reducer.utils";

export const fetchSiteAsync = () => async (dispatch) => {
  dispatch(createAction(SITE_ACTION_TYPES.SITE_DETAILS_REQUEST));
  try {
    const site = await fetchSiteServices();
    dispatch(createAction(SITE_ACTION_TYPES.SITE_DETAILS_SUCCESS, site));
  } catch (error) {
    dispatch(
      createAction(SITE_ACTION_TYPES.SITE_DETAILS_FAILED, errorHandler(error))
    );
  }
};

export const updateSiteAsync = (profile) => async (dispatch) => {
  dispatch(createAction(SITE_ACTION_TYPES.SITE_UPDATE_REQUEST));
  try {
    const site = await updateSiteServices(profile);
    dispatch(createAction(SITE_ACTION_TYPES.SITE_UPDATE_SUCCESS, site));
  } catch (error) {
    dispatch(
      createAction(SITE_ACTION_TYPES.SITE_UPDATE_FAILED, errorHandler(error))
    );
  }
};

export const resetSiteReducer = () =>
  createAction(SITE_ACTION_TYPES.SITE_RESET_REDUCER);
