import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../components/AppStyle.module.scss';
import PropertyCard from '../../components/InfoCard/PropertyCard';


export default class Dashboard extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
    return (
      <div className={styles.WebPartContainer}>
        <div className={styles.TitleSection}>
          <h2>CREDO</h2>
          <p className={styles.subtitle}>Commercial Real Estate Debt Opportunities Fund</p>
        </div>
        <div className={styles.InfoBox}>
          <PropertyCard />
        </div>
        {/* <p>This is a link to the <a href='#/additional'>additional</a> page</p> */}
        <ul>
          <li>
          Go to Additional Page with ID <Link to="/additional/123">123</Link>
          </li>
          <li>
          Go to Additional Page with ID <Link to="/additional/234">2693</Link>
          </li>
        </ul>
      </div>
    );
  }
}