import Units from './Units'

const UnitsGroup = ({ title, unit, className }) => {

  return (
    <div className={className}>
        <h6 className='p-2'>{title}</h6>
        {unit && unit.map((u, index) => (
            <Units key={index} unit={u} />
        ))}
    </div>
  )
}

export default UnitsGroup