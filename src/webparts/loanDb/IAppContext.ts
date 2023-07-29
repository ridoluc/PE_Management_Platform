import { SPHttpClient } from "@microsoft/sp-http";

export interface IAppContext {
	spHttpClient: SPHttpClient;
	siteUrl: string;
}