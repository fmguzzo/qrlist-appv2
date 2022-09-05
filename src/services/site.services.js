import api from "./api.services";

export const fetchSiteServices = async () => {
  try {
    const { data } = await api.get("/api/v1/site");
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateSiteServices = async (profile) => {
  try {
    const { data } = await api.put("/api/v1/site", profile);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};
