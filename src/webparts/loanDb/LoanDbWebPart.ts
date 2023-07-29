// import { IPropertyPaneConfiguration, PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { Version } from '@microsoft/sp-core-library';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import App from './App';
import {IAppContext} from './IAppContext';



export interface ILoanDbWebPartProps {
  description: string;
}



export default class LoanDbWebPart extends BaseClientSideWebPart<ILoanDbWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IAppContext> = React.createElement(
      App,
      {
        spHttpClient: this.context.spHttpClient,
        siteUrl:this.context.pageContext.web.absoluteUrl
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

}
