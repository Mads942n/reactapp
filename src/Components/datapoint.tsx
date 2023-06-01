import { faEllipsis, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react'
import data from '../Data/DatapointData.json'
import styles from '../Components/datapoint.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Datapoint({ datapoint, onUpdate } : any ) {

  const [isExpanded, Expand] = useState(false);
  const [Editing, Edit] = useState(false);

  const ClickEdit = () => {
    Edit(!Editing)
  }
    
  const ClickExpand = () => {
    Expand(!isExpanded)
  }

  const handleValueChange = (index : any, event : any) => {
    const newDetails = [...datapoint.details];
    newDetails[index].value = event.target.value;
    const updatedDatapoint = { ...datapoint, details: newDetails };
    onUpdate(updatedDatapoint);
  };

  return (
    <>
    <div className={styles.Container}>
    <div className={styles.Datapoint}>
      <p className={styles.Datapoint__text}>{datapoint.title}</p>
      <button className={styles.Datapoint__expand} onClick={ClickExpand}><FontAwesomeIcon className={styles.icon} icon={isExpanded ? faArrowRight : faEllipsis} /></button>
      
    </div>
    </div>
    {isExpanded && (
      <div className={styles.Datapoint__details}>
        {datapoint.details.map((detail : any, index : any) => (
            <div key={index}>
              <div className={styles.Datapoint__editable}>
              <p className={styles.detail__label}>
                {detail.label}
              </p>
              {!Editing ? <button className={styles.Datapoint__expand} onClick={ClickEdit}><FontAwesomeIcon className={styles.icon} icon={faEllipsis} /></button> : 
                  <input
                    className={styles.detail__input}
                    type="text"
                    value={detail.value}
                    onChange={(event) => handleValueChange(index, event)}
                  />}
              </div>
            </div>
          ))}
      </div>
    )}
    </>
  )
}

const ComponentRendererDatapoint = () => {

  const [updatedData, setUpdatedData] = useState(data);

  const handleDataChange = (index : any, updatedDatapoint : any) => {
    const newData = [...updatedData];
    newData[index] = updatedDatapoint;
    setUpdatedData(newData);
  };

  return (
    <div className={styles.Datapoints}>
      {data.map((datapoint, index) => (
        <Datapoint key={datapoint.id} 
        datapoint={datapoint} 
        onUpdate={(updatedDatapoint : any) => handleDataChange(index, updatedDatapoint)}
        />
      ))}
    </div>
  );
};

export default ComponentRendererDatapoint;