import * as React from 'react';
import styles from './PropertyCard.module.scss'; // Import the SCSS styles


const PropertyCard: React.FC = () => {

  return (
      <div className={styles.body }>
      <div className={styles.row}>
        <span className={styles.name}>property 1</span>
        <span className={styles.value}>value 1</span>
      </div>
      <div className={styles.row}>
        <span className={styles.name}>property 2</span>
        <span className={styles.value}>value 2</span>
      </div>
      <div className={styles.row}>
        <span className={styles.name}>property 3</span>
        <span className={styles.value}>value 3</span>
      </div>
      <div className={styles.row}>
        <span className={styles.name}>property 4</span>
        <span className={styles.value}>value 4</span>
      </div>
      <div className={styles.row}>
        <span className={styles.name}>property 5</span>
        <span className={styles.value}>value 5</span>
      </div>
      </div>
  );
};

export default PropertyCard;
