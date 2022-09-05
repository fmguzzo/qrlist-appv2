import api from "./api.services";

export const loginService = async (email, password) => {
  try {
    // TODO: Hash password
    const { data } = await api.post("/api/v1/sessions", {
      email,
      password,
    });
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const registerService = async (
  firstName,
  lastName,
  email,
  password,
  passwordConfirmation
) => {
  try {
    // TODO: Hash password
    const { data } = await api.post("/api/v1/users", {
      firstName,
      lastName,
      email,
      password,
      passwordConfirmation,
    });
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};
