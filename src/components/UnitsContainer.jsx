import styles from "./UnitsContainer.module.css";
import UnitsGroup from "./UnitsGroup";

const UnitsContainer = () => {
  return (
    <div className={`${styles.switch} p-2 d-flex flex-column gap-2 rounded-3`}>
      <h5 className="px-2 pt-2">Switch to Imperial</h5>
      <UnitsGroup
        title="Temperature"
        unit={["Celsius (°C)", "Fahrenheit (°F)"]}
        unitType="temperature"
      />
      <UnitsGroup
        title="Wind Speed"
        unit={["km/h", "mph"]}
        className={`${styles.windSpeed} py-2`}
        unitType="windSpeed"
      />
      <UnitsGroup
        title="Precipitation"
        unit={["Millimeters (mm)", "Inches (in)"]}
        unitType="precipitation"
      />
    </div>
  );
};

export default UnitsContainer;
