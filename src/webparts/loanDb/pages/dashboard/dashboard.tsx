// import { Link } from 'react-router-dom';

import * as React from 'react';
import {
	makeStyles,
	shorthands,
	tokens,
	typographyStyles,
} from "@fluentui/react-components";

import DashboardStyle from "./DashboardStyle.module.scss";
import PropertyCard from "../../components/InfoCard/PropertyCard";
import ContainerCard from "../../components/ContainerCard/ContainerCard";
import DocumentList from "../../components/DocumentList/DocumentList";
import { getProjectsData, ProjLists } from "./getProjects";
import { ProjectsTable } from "./ProjectsTable";
// import {SPHttpClient, SPHttpClientResponse} from '@microsoft/sp-http';
import {IAppContext} from "../../IAppContext"


const useStyles = makeStyles({
	WebPartContainer: {
		backgroundColor: tokens.colorNeutralBackground2,
		...shorthands.padding("10px", "20px"),
	},
	TitleSection: {
		marginBottom: "35px",
	},
	PageTitle: {
		...typographyStyles.title3,
		marginBottom: "5px",
		marginTop: "10px",
	},
	caption: {
		...typographyStyles.subtitle2,
		color: tokens.colorNeutralForeground4,
		marginTop: "0px",
	},
});

const Dashboard: React.FC<IAppContext> = (dashboardProp:IAppContext) => {
	const styles = useStyles();

	const [projects, seProjects] = React.useState<ProjLists | null>(null);

	React.useEffect(() => { 
		async function fetchLists() {
		  const data = await getProjectsData(dashboardProp.spHttpClient, dashboardProp.siteUrl);
		  seProjects(data);
		}
  
		fetchLists();
	 }, []);

	const DocsData = [
		{
			type: "Facility Agreement",
			date: "02 Apr 23",
			name: "Proj_facility_agreement.pdf",
		},
		{ type: "Investement Memo", date: "23 Mar 23", name: "IM_final.pdf" },
		{ type: "DD Report", date: "10 Feb 23", name: "DD_proj_feb23.pdf" },
		{ type: "Report", date: "03 Jun 23", name: "Report_Q1-2023.pdf" },
	];

	const KeyFactsData = [
		{ name: "Investments Type", value: "Secured Loans" },
		{ name: "Vintage", value: "2021" },
		{ name: "Maturity", value: "December 2031 (10 Years)" },
		{ name: "Currency", value: "EUR" },
		{ name: "Latest NAV", value: "€ 143.8m" },
		{ name: "Number of investments", value: projects ? projects.value.length.toString() : "0"},
	];

	// const projectsList = [
	// 	{
	// 		ID: "1",
	// 		projectName: "Project 1",
	// 		loanType: "senior",
	// 		jurisdiction: "UK",
	// 		maxAmount: 10000000,
	// 		maturity: "31/12/2025",
	// 		interestRate: { margin: 4.5, base: "3M" },
	// 	},
	// 	{
	// 		ID: "2",
	// 		projectName: "Other Project",
	// 		loanType: "junior",
	// 		jurisdiction: "Spain",
	// 		maxAmount: 35000000,
	// 		maturity: "31/03/2027",
	// 		interestRate: { margin: 4.0, base: "3M" },
	// 	},
	// 	{
	// 		ID: "2",
	// 		projectName: "Third",
	// 		loanType: "mezzanine",
	// 		jurisdiction: "France",
	// 		maxAmount: 17400000,
	// 		maturity: "13/07/2023",
	// 		interestRate: { margin: 3.7, base: "6M" },
	// 	},
	// ];

	return (
		<div className={styles.WebPartContainer}>
			<div className={styles.TitleSection}>
				<h3 className={styles.PageTitle}>Fund Name</h3>
				<p className={styles.caption}>
					European Senior Credit Opportunities Portfolio
				</p>
			</div>

			<div className={DashboardStyle.DasboardLayoutContainer}>
				<div className={DashboardStyle.Description}>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Veniam quia pariatur eaque, accusamus hic maxime ipsam
						facilis perferendis nobis non dignissimos iusto error
						ducimus velit! Ipsam repudiandae aperiam quaerat
						praesentium.
					</p>
				</div>
				<div className={DashboardStyle.Info}>
					<ContainerCard name="Key Facts">
						<PropertyCard lines={KeyFactsData} />
					</ContainerCard>
				</div>
				<div className={DashboardStyle.Equity}>
					<ContainerCard name="Performance">
						<PropertyCard lines={[
							{ name: "YTD Return", value: "8.3%" },
							{ name: "LTM Return", value: "9.8%" },
							{ name: "Since inception", value: "10.7%" },
							{ name: "Running Yield", value: "8.0%" },
							{ name: "IRR", value: "9.1%" },
						]} />
					</ContainerCard>
				</div>
				<div className={DashboardStyle.Table}>
					<ContainerCard name="Projects">
						<ProjectsTable projectsList={projects ? projects.value : []}/>
					</ContainerCard>
				</div>
				<div className={DashboardStyle.Documents}>
					<ContainerCard name="Documents">
						<DocumentList lines={DocsData} />
					</ContainerCard>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
