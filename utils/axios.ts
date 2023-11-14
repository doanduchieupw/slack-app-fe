import axios from "axios";
import { getToken, setToken } from "./cookies";
import { refreshToken } from "api/auth";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = getToken("accessToken");
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const statusCode = error.response ? error.response.status : null;
    if (statusCode === 401) {
      const token = await refreshToken();
      setToken("accessToken", token.accessToken);
      setToken("refreshToken", token.refreshToken);
      return error.config;
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
