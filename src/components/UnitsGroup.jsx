import { useState, useEffect } from 'react'
import { useUnits } from '../hooks/useUnits'

import Units from './Units'

const UnitsGroup = ({ title, unit, className, unitType }) => {
  const { 
    temperature, setTemperature, 
    windSpeed, setWindSpeed, 
    precipitation, setPrecipitation 
  } = useUnits();

  // Determinar qual é a unidade selecionada baseado no tipo
  const getSelectedUnit = () => {
    switch(unitType) {
      case 'temperature':
        return temperature === 'celsius' ? 'Celsius (°C)' : 'Fahrenheit (°F)';
      case 'windSpeed':
        return windSpeed === 'kmh' ? 'km/h' : 'mph';
      case 'precipitation':
        return precipitation === 'mm' ? 'Millimeters (mm)' : 'Inches (in)';
      default:
        return unit[0];
    }
  };

  const [selectedUnit, setSelectedUnit] = useState(getSelectedUnit());

  // Atualizar o contexto quando o usuário selecionar uma nova unidade
  const handleUnitChange = (newUnit) => {
    setSelectedUnit(newUnit);
    
    switch(unitType) {
      case 'temperature':
        setTemperature(newUnit === 'Celsius (°C)' ? 'celsius' : 'fahrenheit');
        break;
      case 'windSpeed':
        setWindSpeed(newUnit === 'km/h' ? 'kmh' : 'mph');
        break;
      case 'precipitation':
        setPrecipitation(newUnit === 'Millimeters (mm)' ? 'mm' : 'inch');
        break;
    }
  };

  return (
    <div className={className}>
        <h6 className='p-2'>{title}</h6>
        {unit && unit.map((u, index) => (
            <Units key={index} unit={u} onClick={() => handleUnitChange(u)} selectedUnit={selectedUnit} />
        ))}
    </div>
  )
}

export default UnitsGroup