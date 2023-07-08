import * as React from 'react';

export default class AdditionalPage extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
    return (
      <div>
        <h2>Additional Page</h2>
        <p>This is an additional page accessed from the main page.</p>
      </div>
    );
  }
}
