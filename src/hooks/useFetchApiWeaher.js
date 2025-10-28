import { useCallback } from "react";

export const useFetchApiWeather = () => {
  const fetchWeather = useCallback(async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,wind_speed_10m_max,weather_code&hourly=weather_code,temperature_2m&current=temperature_2m,relative_humidity_2m,wind_speed_10m,apparent_temperature,precipitation&timezone=auto`
      );
      return response.json();
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
  }, []);

  const fetchGeolocation = useCallback(async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );
      return response.json();
    } catch (error) {
      console.error("Error fetching geolocation data:", error);
      throw error;
    }
  }, []);

  return { fetchWeather, fetchGeolocation };
};
