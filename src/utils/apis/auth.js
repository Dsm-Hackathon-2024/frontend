import axios from "axios";

const router = "auth";

export const login = async data => {
  return await axios.post(
    `${import.meta.env.VITE_SERVER_BASE_URL}/${router}/login`,
    data
  );
  return;
};
