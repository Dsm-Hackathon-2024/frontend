import axios from "axios";
import { instance } from "./axios";

const router = "/news";

export const getNews = async () => {
  return await instance.get(`${router}`);
};
