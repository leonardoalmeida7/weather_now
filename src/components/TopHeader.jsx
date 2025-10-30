import { useState } from 'react'

import logo from '../assets/images/logo.svg'
import iconUnits from '../assets/images/icon-units.svg'
import dropdownIcon from '../assets/images/icon-dropdown.svg'

import styles from './TopHeader.module.css'
import UnitsContainer from './UnitsContainer'

const TopHeader = () => {
    const [showUnits, setShowUnits] = useState(false);

  return (
    <div className='d-flex justify-content-between align-items-center p-3 position-relative'>
        <div className={styles.logo}>
            <img src={logo} alt="Weather App Logo" className={styles.logo} />
        </div>
        <div className={`${styles.menu} p-2 d-flex align-items-center gap-2 rounded`} onClick={() => setShowUnits(!showUnits)}>
            <img src={iconUnits} alt="Units Icon" />
            <span>Units</span>
            <img src={dropdownIcon} alt="Dropdown Icon" />
        </div>
        {showUnits && <UnitsContainer />}
    </div>
  )
}

export default TopHeader