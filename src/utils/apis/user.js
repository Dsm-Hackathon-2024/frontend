import axios from "axios";
import { instance } from "./axios";

const router = "/user";

export const myInfo = async () => {
  return await instance.get(`${router}/rank`);
};

export const userInfo = async () => {
  return await instance.get(`${router}/mypage/userinfo`);
};

export const signUp = async data => {
  return await axios.post(
    `${import.meta.env.VITE_SERVER_BASE_URL}/${router}/signup`,
    data
  );
};

export const myInvest = async () => {
  return await instance.get(`${router}/mypage/invest`);
};
