# PE Management Platform
![version](https://img.shields.io/badge/version-0.1.0-green.svg)

## Summary

This software is a proof of concept for a management platform for private equity projects, funds or portfolios. The software serves as a comprehensive database UI, streamlining the organization, updating, and secure the project's data. It offers an easy access and organisation of documents. Automates certain data analysis workflows. 
One of the key advantages is its integration with SharePoint websites and Microsoft Office Teams, eliminating the need for complex server setups and costly databases.



**Table of Contents:**
- [Features](#features)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Disclaimer](#disclaimer)

## Features

- :heavy_check_mark: **Efficient Data Management** -  Streamlined and securely stored project data. Eliminate error-prone "Excel databases" by leveraging a robust relational database with an intuitive and user-friendly interface.
- :heavy_check_mark: **Seamless Document Management** - Effortless access and seamless organization of documents. 
- :heavy_check_mark: **Integration with SharePoint websites and Microsoft Office Teams** - No need for intricate server setups or expensive databases. Utilize the existing infrastructure of the Office Suite.
- :heavy_check_mark: **Automated Data Analysis Workflows** - Automate certain data analysis orkflows. Leverage automation for reporting tasks and save time.

## Tech Stack

Built with:

| Name       | Version |
|------------|-----|
| [React](https://reactjs.org/)        | ![version](https://img.shields.io/badge/version-17.0.1-green.svg)  |
| [Node.js](https://nodejs.org/)       |  ![version](https://img.shields.io/badge/version-17.0.0-green.svg) |
| [SharePoint Framework (SPFx)](https://learn.microsoft.com/en-us/sharepoint/dev/spfx/sharepoint-framework-overview?WT.mc_id=m365-15744-cxa)       |  ![version](https://img.shields.io/badge/version-1.17.4-green.svg) |
| [Fluent UI Components](https://react.fluentui.dev/)       |  ![version](https://img.shields.io/badge/version-9.26.0-green.svg) |


## Installation and Usage

1. Follow Microsoft [guide](https://learn.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant) for setting up Microsoft 365 Tenant 
1. Modify the `initial page` property in *./config/serve.json*
1. Start the local web server to preview the web part by running `gulp serve`



## License
This code is provided under the **GPL-3.0 license**.

## Disclaimer

**THIS CODE IS PROVIDED _AS IS_ WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**
