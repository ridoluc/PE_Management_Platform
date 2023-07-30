// import { Link } from 'react-router-dom';

import {
	Caption1Strong,
	makeStyles,
	shorthands,
	tokens,
	typographyStyles,
} from "@fluentui/react-components";

import { ArrowLeft12Regular } from "@fluentui/react-icons";

import ProjectStyle from "./ProjectStyle.module.scss";
import ContainerCard from "../../components/ContainerCard/ContainerCard";
import PropertyCard from "../../components/InfoCard/PropertyCard";

import { Link as LinkRouter } from "react-router-dom";
import DocumentList from "../../components/DocumentList/DocumentList";

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

const loanInfoData = {
	descr: [
		{
			name: "description",
			value: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque error ducimus corporis iste quas eius recusandae, sapiente ipsa dolor tenetur. Quos, animi. Aspernatur ad fugit facere officia ex nostrum. Explicabo.",
		},
	],
	loan: [
		{ name: "property 1", value: "some value" },
		{ name: "property 1", value: "some value" },
		{ name: "property 1", value: "some value" },
		{ name: "property 1", value: "some value" },
	],
	collateral: [
		{ name: "property 1", value: "some value" },
		{ name: "property 1", value: "some value" },
		{ name: "property 1", value: "some value" },
	],
};

const ProjectPage = () => {
	const styles = useStyles();

	return (
		<div className={styles.WebPartContainer}>
			<div className={ProjectStyle.navigation}>
				<ArrowLeft12Regular />
				<LinkRouter to="/"> Back to Dashboard</LinkRouter>
			</div>

			<div className={styles.TitleSection}>
				<h3 className={styles.PageTitle}>Project Name</h3>
			</div>

			<div className={ProjectStyle.ProjectLayoutContainer}>
				<div className={ProjectStyle.Info}>
					<ContainerCard name="Key Facts">
						<div className={ProjectStyle.infoGrid}>
							<div className={ProjectStyle.description}>
							<p>{loanInfoData.descr[0].value} </p>
							</div>
							<div className={ProjectStyle.loanInfo}>
								<Caption1Strong>Loan</Caption1Strong>
								<PropertyCard lines={loanInfoData.loan} />
							</div>
							<div className={ProjectStyle.collateralInfo}>
								<Caption1Strong>Collateral</Caption1Strong>

								<PropertyCard lines={loanInfoData.collateral} />
							</div>
						</div>
					</ContainerCard>
				</div>
				<div className={ProjectStyle.Documents}>
				<ContainerCard name="Documents">
						<DocumentList lines={DocsData} />
					</ContainerCard>
				</div>
				<div className={ProjectStyle.Capital}>
				<ContainerCard name="Capital Movements">
					</ContainerCard>
				</div>
			</div>
		</div>
	);
};

export default ProjectPage;
