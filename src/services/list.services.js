import api from "./api.services";

export const getListsService = async (siteId) => {
  try {
    const { data } = await api.get(`/api/v1/list/site/${siteId}`);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createListService = async (siteId, list) => {
  try {
    const { data } = await api.post(`/api/v1/list/site/${siteId}`, list);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateListService = async (listId, list) => {
  try {
    const { data } = await api.put(`/api/v1/list/${listId}`, list);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteListService = async (listId) => {
  return await api.delete(`/api/v1/list/${listId}`).data;
};
