import { useCallback } from "react";

export const useFetchApiWeather = () => {
  const fetchWeather = useCallback(async (latitude, longitude, temperature = "celsius", windSpeed = "kmh", precipitation = "mm") => {
    try {
      // Mapear valores do frontend para os parâmetros da API
      const unitMapping = {
        temperature: {
          "Celsius (°C)": "celsius",
          "Fahrenheit (°F)": "fahrenheit"
        },
        windSpeed: {
          "km/h": "kmh",
          "mph": "mph"
        },
        precipitation: {
          "Millimeters (mm)": "mm",
          "Inches (in)": "inch"
        }
      };

      // Converter se necessário (caso venha com o label completo)
      const tempUnit = unitMapping.temperature[temperature] || temperature;
      const windUnit = unitMapping.windSpeed[windSpeed] || windSpeed;
      const precipUnit = unitMapping.precipitation[precipitation] || precipitation;

      const units = `&temperature_unit=${tempUnit}&wind_speed_unit=${windUnit}&precipitation_unit=${precipUnit}`;
      
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,wind_speed_10m_max,weather_code&hourly=weather_code,temperature_2m&current=temperature_2m,relative_humidity_2m,wind_speed_10m,apparent_temperature,precipitation&timezone=auto${units}`
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
