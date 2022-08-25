import api from "./api.services";

export const loginService = async (email, password) => {
  // TODO: Hash password
  const { data } = await api.post("/api/v1/sessions", {
    email,
    password,
  });
  return data;
};

export const registerService = async (
  firstName,
  lastName,
  email,
  password,
  passwordConfirmation
) => {
  // TODO: Hash password
  const { data } = await api.post("/api/v1/users", {
    firstName,
    lastName,
    email,
    password,
    passwordConfirmation,
  });
  return data;
};
