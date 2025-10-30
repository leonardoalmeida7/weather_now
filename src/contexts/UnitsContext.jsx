import { createContext, useState } from "react";

export const UnitsContext = createContext();

export const UnitsProvider = ({ children }) => {
    // Valores padrão baseados no sistema métrico
    const [temperature, setTemperature] = useState("celsius");
    const [windSpeed, setWindSpeed] = useState("kmh");
    const [precipitation, setPrecipitation] = useState("mm");

    const value = {
        temperature,
        setTemperature,
        windSpeed,
        setWindSpeed,
        precipitation,
        setPrecipitation
    };

    return (
        <UnitsContext.Provider value={value}>
            {children}
        </UnitsContext.Provider>
    );
};
