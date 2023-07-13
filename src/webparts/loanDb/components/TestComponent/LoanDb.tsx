import * as React from 'react';
import styles from './LoanDb.module.scss';
import { ILoanDbProps } from './ILoanDbProps';
// import { escape } from '@microsoft/sp-lodash-subset';

export default class LoanDb extends React.Component<ILoanDbProps, {}> {
  public render(): React.ReactElement<ILoanDbProps> {
    const {
      hasTeamsContext,
    } = this.props;

    return (
      <section className={`${styles.loanDb} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.welcome}>
          <h2>Hi!</h2>
          <p>This is a test of the UI 2</p>
          <p>main page xx</p>
        </div>
      </section>
    );
  }
}
