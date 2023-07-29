import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';

export interface ProjLists {
  length: any;
  value: Project[];
}

export interface Project {
   Id: string,
   Title: string,
   Amount: string,
   Country: string,
   Balance: number,
   Maturity: string,
   Margin: number, 
   Base: string ,
}

export const getProjectsData = (spHttpClient: SPHttpClient, webUrl: string): Promise<ProjLists> => {
  const apiUrl = `${webUrl}/_api/web/lists/GetByTitle('LoanList')/items`;
  return spHttpClient.get(apiUrl, SPHttpClient.configurations.v1)
    .then((response: SPHttpClientResponse) => {
      return response.json();
    })
    .catch(() => ({} as ProjLists));
};