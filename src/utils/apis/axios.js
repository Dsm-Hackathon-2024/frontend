import axios from "axios";
import { Cookie } from "../cookie";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASE_URL,
  timeout: 30000,
});

instance.interceptors.request.use(res => {
  const token = Cookie.get("accessToken");
  if (token) res.headers.Authorization = `Bearer ${token}`;
  return res;
});

instance.interceptors.response.use(res => {
  return res;
});
