import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Dashboard extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
    return (
      <div>
        <h2>This is the Dashboard</h2>
        <p>Hello</p>
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