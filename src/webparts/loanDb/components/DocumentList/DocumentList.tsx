import * as React from 'react';
import styles from './DocumentList.module.scss'; // Import the SCSS styles
import { Link } from 'react-router-dom';

interface Document {
  name: string;
  date: string;
  type: string;
}

interface DocumentListProps {
  lines: Document[];
}

const DocumentList: React.FC<DocumentListProps> = ({ lines }) => {
  return (
    <div className={styles.body}>
      {lines.map((line, index) => (
        <div className={styles.row} key={index}>
         <div className={styles.fileAttributes}>
          
          <div><Link to='' className={styles.type}>{line.type}</Link></div>
          
          <div><span className={styles.date}>{line.date}</span></div>
          
         </div>
         <div className={styles.fileName}>{line.name}</div>
        </div>
        
      ))}
      <div className={styles.more}><Link to='' >Go to Documents</Link></div>
    </div>
  );
};

export default DocumentList;
