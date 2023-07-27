// import { Link } from 'react-router-dom';

import {
	Body1,
	makeStyles,
	shorthands,
	tokens,
	typographyStyles,
} from "@fluentui/react-components";

import DashboardStyle from "./DashboardStyle.module.scss";
import PropertyCard from "../../components/InfoCard/PropertyCard";
import ContainerCard from "../../components/ContainerCard/ContainerCard";
import { ProjectsTable } from "./ProjectsTable";

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

const Dashboard = () => {
	const styles = useStyles();

	return (
		<div className={styles.WebPartContainer}>
			<div className={styles.TitleSection}>
				<h3 className={styles.PageTitle}>Fund Name</h3>
				<p className={styles.caption}>
					Commercial Real Estate Debt Opportunities Fund
				</p>
			</div>

			<div className={DashboardStyle.DasboardLayoutContainer}>
				<div className={DashboardStyle.Description}>
					<Body1>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Veniam quia pariatur eaque, accusamus hic maxime ipsam
						facilis perferendis nobis non dignissimos iusto error
						ducimus velit! Ipsam repudiandae aperiam quaerat
						praesentium.
					</Body1>
				</div>
				<div className={DashboardStyle.Info}>
					<ContainerCard name="Card 1">
						<PropertyCard />
					</ContainerCard>
				</div>
				<div className={DashboardStyle.Equity}>
					<ContainerCard name="Card 2">
						<p>Lorem Ipsum</p>
					</ContainerCard>
				</div>
				<div className={DashboardStyle.Table}>
					<ContainerCard name="Card 3">
						<ProjectsTable />
					</ContainerCard>
				</div>
				<div>
					{/* <p>This is a link to the <a href='#/additional'>additional</a> page</p>
            <ul>
              <li>
              Go to Additional Page with ID <Link to="/additional/123">123</Link>
              </li>
              <li>
              Go to Additional Page with ID <Link to="/additional/234">2693</Link>
              </li>
            </ul> */}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
