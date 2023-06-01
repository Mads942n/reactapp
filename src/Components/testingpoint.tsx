import { faEllipsis, faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import testData from '../Data/Testresults.json';
import styles from './testinpoint.module.css'

const TestingPoint = ({ test } : any) => {
  const [isExpanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!isExpanded);
  };

  return (
    <>
    <div className={styles.Testpoint}>
      <p className={styles.Testpoint__Date}>{test.date}</p>
      <p className={styles.Testpoint__Result} >Result : {test.result}</p>
      <button className={styles.Testpoint__expand} onClick={handleExpandClick}>
        <FontAwesomeIcon icon={isExpanded ? faArrowDown : faEllipsis} />
      </button>
      
    </div>
    {isExpanded && (
      <div className={styles.Testpoint__details}>
        <p className={styles.details__Testername}>{test.testerName}</p>
        <p className={styles.details__Parameters}>{test.parameters}</p>
      </div>
    )}
    </>
  );
};

const ComponentRendererTest = () => {
  const tests = testData.tests;

  return (
    <div className={styles.Container}>
      {tests.map((test: any, index: any) => (
        <TestingPoint key={index} test={test} />
      ))}
    </div>
  );
};

export default ComponentRendererTest;