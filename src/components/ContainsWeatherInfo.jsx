import styles from './ContainsWeatherInfo.module.css';

const ContainsWeatherInfo = ({ label, value }) => {
  return (
    <div className={`${styles.ContainsWeatherInfo} p-3 rounded-3 flex-fill`} style={{ width: '45%' }}>
        <p className='fs-5'>{label}</p>
        <span className={`${styles.value}`}>{value}</span>
    </div>
  )
}

export default ContainsWeatherInfo