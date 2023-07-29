import * as React from 'react';
import styles from './PropertyCard.module.scss'; // Import the SCSS styles

interface Line {
  name: string;
  value: string;
}

interface PropertyCardProps {
  lines: Line[];
}

const PropertyCard: React.FC<PropertyCardProps> = ({ lines }) => {
  return (
    <div className={styles.body}>
      {lines.map((line, index) => (
        <div className={styles.row} key={index}>
          <span className={styles.name}>{line.name}</span>
          <span className={styles.value}>{line.value}</span>
        </div>
      ))}
    </div>
  );
};

export default PropertyCard;
