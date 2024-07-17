import axios from "axios";
import { instance } from "./axios";

const router = "/user/mypage";

export const myInfo = async () => {
  return await instance.get(`${router}/userinfo`);
};

export const signUp = async data => {
  return await axios.post(
    `${import.meta.env.VITE_SERVER_BASE_URL}/${router}/signup`,
    data
  );
};
