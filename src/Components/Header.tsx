import React from 'react'
import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faHouse } from '@fortawesome/free-solid-svg-icons'
import Headerbuttons from './Headerbuttons'
import { useNavigate } from 'react-router-dom';

type HeaderProps = {
  };

function Header(props: HeaderProps) {

    const currentHref = window.location.href
    const powerHref = 'http://localhost:3000/'

  return (
    <>
    <div className={styles.Header}>
        <Headerbuttons icon='back' to='/' children={undefined}/>
        <Headerbuttons icon='home' to='/' children={undefined}/>
        {currentHref === powerHref && <Headerbuttons icon='power' to='/' children={undefined}/>}
        {currentHref !== powerHref && <Headerbuttons icon='power' to='/' children={undefined}/>}
    </div>
    </>
    
  )
}

export default Header