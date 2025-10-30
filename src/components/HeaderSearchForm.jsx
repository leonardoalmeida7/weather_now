import { useState } from 'react'
import { useCityWeather } from '../hooks/useCityWeather'
import { useFetchApiWeather } from '../hooks/useFetchApiWeaher'

import iconSearch from '../assets/images/icon-search.svg'

import styles from './HeaderSearchForm.module.css'

const HeaderSearchForm = () => {
  const [searchCity, setSearchCity] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { setCityWeather } = useCityWeather();
  const { fetchGeolocation } = useFetchApiWeather();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!searchCity.trim()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetchGeolocation(searchCity);
      if (response && response.length > 0) {
        setCityWeather(response);
        setSearchCity("");
      } else {
        alert("Cidade não encontrada. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao buscar cidade:", error);
      alert("Erro ao buscar cidade. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className={`d-flex flex-column gap-3 my-5 mb-md-4 my-xl-4 ${styles.form} flex-md-row`} onSubmit={handleSubmit}>
      <div className={`${styles.inputContainer} d-flex align-items-center gap-3 p-3 py-xl-2 rounded-3 `}>
        <div>
          <img src={iconSearch} alt="Search Icon" />
        </div>
        <input 
          type="text" 
          name="search" 
          className={`${styles.input}`} 
          placeholder='Search for a place...' 
          value={searchCity} 
          onChange={(e) => setSearchCity(e.target.value)}
          disabled={isSubmitting}
        />
      </div>
      <button 
        type="submit" 
        className={`${styles.button} rounded-3 p-2 px-md-4`}
        disabled={isSubmitting || !searchCity.trim()}
      >
        {isSubmitting ? 'Searching...' : 'Search'}
      </button>
    </form>
  )
}

export default HeaderSearchForm