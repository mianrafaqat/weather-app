import { useState } from "react";
import { weatherService } from "../services/weatherService";

export const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("");

  const handleCitySelect = (selectedCity) => {
    setCity(selectedCity);
  };

  const fetchWeather = () => {
    getWeather(city);
  };

  const getWeather = async (city) => {
    if (!city) {
      setError("Please select a city.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await weatherService.getCurrentWeather(city);
      setWeather(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    weather,
    loading,
    error,
    getWeather,
    city,
    handleCitySelect,
    fetchWeather,
  };
};
