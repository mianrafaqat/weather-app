import axiosInstance from "../utils/requestInterceptor";
import { API_KEY } from "../utils/constants";
import { API_URLS } from "../utils/apiUrls";

export const weatherService = {
  getCurrentWeather: async (city) => {
    try {
      const response = await axiosInstance.get(
        API_URLS.weather.getWeather(API_KEY, city)
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.error) {
        throw new Error(error.response.data.error.message);
      }
      throw error;
    }
  },
};
