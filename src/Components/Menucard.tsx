import React from 'react'
import { useNavigate } from 'react-router-dom';
import plismaskine from '../Assets/plismaskine.svg';
import dynamicsettings from '../Assets/dynamicsettings.svg'
import usbsettings from '../Assets/usbsettings.svg'
import useradmin from '../Assets/useradmin.svg'
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Menucard.module.css'


type MenucardProps = {
    destination: string;
    icontype: number;
}

function Menucard(props: MenucardProps) {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(props.destination)
    };

    let icon: JSX.Element;
    icon = <></>

    switch (props.icontype){
        case 1:
            icon = <FontAwesomeIcon className={styles.icon} icon={faGear} />
            break;
        case 2:
            icon = <img className={styles.icon} src={dynamicsettings}/>
            break;
        case 3:
            icon = <img className={styles.icon} src={usbsettings}/>
            break;
        case 4:
            icon = <img className={styles.icon} src={plismaskine}/>
            break;
        case 5:
            icon = <img className={styles.icon} src={useradmin}/>
            break;
        default: icon = <FontAwesomeIcon className={styles.icon} icon={faGear} />
    }

  return (
    <>
    <button className={styles.button} onClick={handleButtonClick}>{icon}<h1 className={styles.text}>Text</h1></button>
    </>
  )
}

export default Menucard