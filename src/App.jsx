import { useEffect } from "react";
import PageHeader from "./components/PageHeader";
import WeatherInformationSection from "./components/WeatherInformationSection";
import DailyForecastSection from "./components/DailyForecastSection";
import HourlyForecastSection from "./components/HourlyForecastSection";
import { useCityWeather } from "./hooks/useCityWeather";
import { useUnits } from "./hooks/useUnits";

import "./App.css";

function App() {
  const { weatherData, cityWeather, fetchCityWeatherData, error } =
    useCityWeather();
  const { temperature, windSpeed, precipitation } = useUnits();

  useEffect(() => {
    if (cityWeather) {
      fetchCityWeatherData(temperature, windSpeed, precipitation);
    }
  }, [
    cityWeather,
    temperature,
    windSpeed,
    precipitation,
    fetchCityWeatherData,
  ]);

  return (
    <>
      <PageHeader />
      {weatherData && (
        <main className="d-xl-flex gap-xl-4">
          <div>
            <WeatherInformationSection />
            <DailyForecastSection />
          </div>
          <aside>
            <HourlyForecastSection />
          </aside>
        </main>
      )}
      {!weatherData && (
        <div className="text-center my-5">
          <p className="h2 fw-bold">No search result found!</p>
        </div>
      )}
    </>
  );
}

export default App;
