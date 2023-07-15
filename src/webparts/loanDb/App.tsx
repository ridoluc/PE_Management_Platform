import * as React from 'react';
import AppRouter  from './routes/routes';

export default class App extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
  //   return React.createElement(
  //   AppRouter
  // )
      return (
        <AppRouter/>
      )
    }
}