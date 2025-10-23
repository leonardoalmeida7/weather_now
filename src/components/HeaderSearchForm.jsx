import iconSearch from '../assets/images/icon-search.svg'

import styles from './HeaderSearchForm.module.css'

const HeaderSearchForm = () => {
  return (
      <form className={`d-flex flex-column gap-2 my-5 ${styles.form}`}>
          <div className={`${styles.inputContainer} d-flex align-items-center gap-3 p-3 rounded-4`}>
            <div>
                <img src={iconSearch} alt="Search Icon" />
            </div>
            <input type="text" name="search" className={`${styles.input}`} placeholder='Search for a place...' />
          </div>
          <button type="submit" className={`${styles.button} rounded-4 p-2`}>Search</button>
      </form>
  )
}

export default HeaderSearchForm