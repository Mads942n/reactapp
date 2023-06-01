import { IconName, faArrowLeft, faFilter, faHouse, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Headerbuttons.module.css'

type HeaderbuttonsProps = {
    icon: 'back' | 'home' | 'power' | 'filter';
    to: string;
    children: React.ReactNode;
}


function Headerbuttons(props: HeaderbuttonsProps) {

    const navigate = useNavigate();

   

    let icontype: FontAwesomeIconProps["icon"];

    switch (props.icon) {
        case 'back':
            icontype = faArrowLeft
        break;
        case 'home':
            icontype = faHouse
            break;
        case 'power':
            icontype = faPowerOff
            break;
        case 'filter':
            icontype = faFilter
            break;
        default:
            icontype = faHouse
      }

      const handleButtonClick = () => {
        if (props.icon == 'back'){
            navigate(-1)
        } else navigate(props.to)
    };

  return (
    <button className={styles.button} onClick={handleButtonClick}><FontAwesomeIcon icon={icontype}/></button>
  )
}

export default Headerbuttons