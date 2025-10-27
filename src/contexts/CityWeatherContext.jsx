import { createContext, useState, useCallback } from "react";
import { useFetchApiWeather } from "../hooks/useFetchApiWeaher";

export const CityWeatherContext = createContext();

export const CityWeatherProvider = ({ children }) => {
    const { fetchWeather } = useFetchApiWeather();
    
    const [cityWeather, setCityWeather] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCityWeatherData = useCallback(async () => {
        if (!cityWeather || cityWeather.length === 0) {
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const { lat, lon, name } = cityWeather[0];
            const data = await fetchWeather(lat, lon);
            setWeatherData({ weatherData: data, name });
        } catch (err) {
            console.error('Erro ao buscar dados do clima:', err);
            setError('Erro ao buscar dados do clima. Tente novamente.');
            setWeatherData(null);
        } finally {
            setLoading(false);
        }
    }, [cityWeather, fetchWeather]);

    const value = {
        cityWeather,
        setCityWeather,
        weatherData,
        loading,
        error,
        fetchCityWeatherData
    };

    return (
        <CityWeatherContext.Provider value={value}>
            {children}
        </CityWeatherContext.Provider>
    );
};