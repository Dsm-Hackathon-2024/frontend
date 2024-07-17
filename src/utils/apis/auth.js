import axios from "axios";

const router = "user/auth";

export const login = async data => {
  return await axios.post(
    `${import.meta.env.VITE_SERVER_BASE_URL}${router}/login`,
    data
  );
};

export const signUp = async data => {
  return await axios.post(
    `${import.meta.env.VITE_SERVER_BASE_URL}/${router}/signup`,
    data
  );
};
