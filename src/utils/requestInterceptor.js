import axios from "axios";
import { BASE_URL } from "./constants";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log("Request sent:", config.url);
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response received:", response.status);
    return response;
  },
  (error) => {
    console.error("Response error:", error.response?.status || "Network Error");

    if (error.response?.status === 401) {
      console.log("Unauthorized access, redirecting to login...");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
