export const API_URLS = {
  weather: {
    getWeather: (key, city) => `/current.json?key=${key}&q=${city}`,
  },
};
