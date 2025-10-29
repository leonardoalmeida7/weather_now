import { useState } from 'react'

import Units from './Units'

const UnitsGroup = ({ title, unit, className }) => {
  const [selectedUnit, setSelectedUnit] = useState(unit[0])

  console.log(selectedUnit)

  return (
    <div className={className}>
        <h6 className='p-2'>{title}</h6>
        {unit && unit.map((u, index) => (
            <Units key={index} unit={u} onClick={() => setSelectedUnit(u)} selectedUnit={selectedUnit} />
        ))}
    </div>
  )
}

export default UnitsGroup