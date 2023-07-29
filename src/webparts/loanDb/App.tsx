import * as React from "react";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import ProjectPage from "./pages/project/project";
import {IAppContext} from "./IAppContext"



export default class App extends React.Component<IAppContext, any> {
	public constructor(props: IAppContext) {
		super(props);
	}

	public render(): React.ReactElement<{}> {


		return (
			<FluentProvider theme={webLightTheme}>
				<MemoryRouter>
					<Routes>
						<Route path="/" element={<Dashboard spHttpClient={this.props.spHttpClient} siteUrl={this.props.siteUrl} />}></Route>
						<Route path="/dashboard" element={<Dashboard spHttpClient={this.props.spHttpClient} siteUrl={this.props.siteUrl} />} />

						<Route
							path="/project/:id"
							loader={async ({ params }) => {
								console.log(params.id);
							}}
							element={<ProjectPage />}
						/>
					</Routes>
				</MemoryRouter>
			</FluentProvider>
		);
	}
}
