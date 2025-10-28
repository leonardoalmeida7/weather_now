import { useState, useMemo } from "react";

import { useCityWeather } from "../hooks/useCityWeather";
import IconDropdown from "../assets/images/icon-dropdown.svg";
import HourlyForecast from "./HourlyForecast";

import styles from "./HourlyForecastSection.module.css";

const HourlyForecastSection = () => {
  const [isActive, setIsActive] = useState(false);
  const { weatherData } = useCityWeather();

  const weekdaysList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  const currentWeekday = date.toLocaleDateString("en-US", { weekday: "long" });

  const [weekdaySelected, setWeekdaySelected] = useState(currentWeekday);

  const orderedWeekdays = useMemo(() => {
    const indexOfCurrentDay = weekdaysList.indexOf(currentWeekday);
    return weekdaysList
      .slice(indexOfCurrentDay)
      .concat(weekdaysList.slice(0, indexOfCurrentDay));
  }, [currentWeekday]);

  const { initial, end } = useMemo(() => {
    const initial = orderedWeekdays.indexOf(weekdaySelected) * 24;
    const end = initial + 24;
    return { initial, end };
  }, [orderedWeekdays, weekdaySelected]);

  const { weatherCodes, time } = useMemo(() => {
    const weatherCodes =
      weatherData?.weatherData?.hourly?.weather_code?.slice(initial, end) || [];
    const time =
      weatherData?.weatherData?.hourly?.time?.slice(initial, end) || [];
    return { weatherCodes, time };
  }, [weatherData, initial, end]);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`${styles.container} mt-5 p-4 rounded-4`}>
      <div className="d-flex justify-content-center align-items-center">
        <h2 className="fs-4">Hourly forecast</h2>
        <div className="mx-5"></div>
        <div className="position-relative">
          <div
            className={`${styles.button} d-flex gap-3 p-2 rounded-3`}
            onClick={handleClick}
          >
            <span style={{ color: "#fff" }}>{weekdaySelected}</span>
            <img src={IconDropdown} alt="Dropdown Icon" />
          </div>
          <div
            className={`${styles.timeframeSelector} gap-2 flex-column p-2 ${
              isActive ? "d-flex" : "d-none"
            }`}
          >
            {orderedWeekdays.map((day, index) => (
              <span
                key={index}
                className="border-bottom"
                onClick={() => {
                  setWeekdaySelected(day);
                  setIsActive(false);
                }}
              >
                {day}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="d-flex flex-column" style={{height: '500px', overflow:"scroll"}}>
        {weatherCodes.map((code, index) => (
          <HourlyForecast key={index} weatherCode={code} />
        ))}
      </div>
    </div>
  );
};

export default HourlyForecastSection;
