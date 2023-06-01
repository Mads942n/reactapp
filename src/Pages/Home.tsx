import React from 'react'
import Menucard from '../Components/Menucard'
import styles from './Home.module.css'

function Home() {
  return (
    <>
    <div className={styles.Menucards__top}>
      <Menucard destination={'/Datapoints'} icontype={1} />
      <Menucard destination={''} icontype={2} />
      <Menucard destination={''} icontype={3} />
    </div>
    <div className={styles.Menucards__bottom}>
      <Menucard destination={'/Testresults'} icontype={4} />
      <Menucard destination={''} icontype={5} />
    </div>
    </>
  )
}

export default Home