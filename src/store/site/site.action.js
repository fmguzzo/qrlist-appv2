import { SITE_ACTION_TYPES } from "./site.types";

import {
  fetchSiteServices,
  updateSiteServices,
} from "../../services/site.services";

import errorHandler from "../../utils/errorHandler";
import { createAction } from "../../utils/reducer.utils";
import { toast } from "react-toastify";

export const fetchSiteAsync = () => async (dispatch) => {
  dispatch(createAction(SITE_ACTION_TYPES.SITE_DETAILS_REQUEST));
  try {
    const site = await fetchSiteServices();
    dispatch(createAction(SITE_ACTION_TYPES.SITE_DETAILS_SUCCESS, site));
  } catch (error) {
    const errorMessage = errorHandler(error);
    dispatch(createAction(SITE_ACTION_TYPES.SITE_DETAILS_FAILED, errorMessage));
    toast.error(errorMessage);
  }
};

export const updateSiteAsync = (profile) => async (dispatch) => {
  dispatch(createAction(SITE_ACTION_TYPES.SITE_UPDATE_REQUEST));
  try {
    const site = await updateSiteServices(profile);
    dispatch(createAction(SITE_ACTION_TYPES.SITE_UPDATE_SUCCESS, site));
    toast.success("Profile was updated.");
  } catch (error) {
    const errorMessage = errorHandler(error);
    dispatch(createAction(SITE_ACTION_TYPES.SITE_UPDATE_FAILED, errorMessage));
    toast.error("Profile was not updated.");
    toast.error(errorMessage);
  }
};

export const resetSiteReducer = () =>
  createAction(SITE_ACTION_TYPES.SITE_RESET_REDUCER);
