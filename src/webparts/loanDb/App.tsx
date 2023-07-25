import * as React from 'react';
import AppRouter  from './routes/routes';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';

export default class App extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
  //   return React.createElement(
  //   AppRouter
  // )
      return (
        <FluentProvider theme={webLightTheme}>
          <AppRouter/>
        </FluentProvider>
      )
    }
}