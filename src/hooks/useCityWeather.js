import { useContext } from "react";
import { CityWeatherContext } from "../contexts/CityWeatherContext";

export const useCityWeather = () => {
  const context = useContext(CityWeatherContext);

  if (!context) {
    throw new Error("useCityWeather must be used within a CityWeatherProvider");
  }

  return context;
};
