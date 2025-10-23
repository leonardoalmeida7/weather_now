import HeaderSearchForm from './HeaderSearchForm'
import TopHeader from './TopHeader'

import styles from './PageHeader.module.css'

const PageHeader = () => {
  return (
    <header className={`${styles.header} text-center`}>
        <TopHeader />
        <div className='my-4'>
          <h1>How's the sky looking today?</h1>
        </div>
        <HeaderSearchForm />
    </header>
  )
}

export default PageHeader