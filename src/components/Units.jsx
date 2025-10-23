import checkmarkIcon from '../assets/images/icon-checkmark.svg'

import styles from './Units.module.css'

const Units = ( { unit, onClick }) => {
  return (
    <div className={`${styles.units} d-flex justify-content-between align-items-center p-2 rounded-3`} onClick={onClick}>
        <p>{unit}</p>
        <img src={checkmarkIcon} alt="Checkmark Icon" />
    </div>
  )
}

export default Units