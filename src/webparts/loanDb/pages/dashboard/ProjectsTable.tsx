import {
	TableBody,
	TableCell,
	TableRow,
	Table,
	TableHeader,
	TableHeaderCell,
	Badge,
	makeStyles,
	tokens,
} from "@fluentui/react-components";
import { Link as LinkRouter } from "react-router-dom";
import {Project} from "./getProjects"

const useStyles = makeStyles({
	table_header: {
		textTransform: "uppercase",
		fontSize: "9px",
		fontWeight: "400",
	},

	loanTypeColor_senior: {
		color: tokens.colorBrandForeground1,
	},
	loanTypeColor_mezzanine: {
		color: tokens.colorPaletteMarigoldForeground1,
	},
	loanTypeColor_junior: {
		color: tokens.colorPaletteDarkOrangeForeground3,
	},

	table: {
		fontSize: "12px",
	},
	link: {
		textDecorationLine: "none",
		color: tokens.colorBrandForegroundLink,
	},
});
 
 interface ProjectsProps {
	projectsList: Project[];
 }

const formatNumberInMillions = (number: number): string => {
	const million = 1000000;

	const formattedNumber = (number / million).toFixed(1);
	return `${formattedNumber}M`;
};


const formatDateToDDMMYYYY = (dateString:string) :string =>{

	function padStart(str:string, targetLength:number, padString:string) {
		str = String(str);
		while (str.length < targetLength) {
		  str = padString + str;
		}
		return str;
	 }

	const date = new Date(dateString);
	const day = padStart(date.getDate().toString(), 2, '0');
	const month = padStart((date.getMonth() + 1).toString(), 2, '0'); // Months are zero-indexed, so add 1
	const year = date.getFullYear();
 
	return `${day}-${month}-${year}`;
 }

const columns = [
	{ columnKey: "projectName", label: "Project Name" },
	{ columnKey: "loanType", label: "Loan Type" },
	{ columnKey: "jurisdiction", label: "Country" },
	{ columnKey: "maxAmount", label: "Loan Amount" },
	{ columnKey: "maturity", label: "Maturity" },
	{ columnKey: "interestRate", label: "Interest Rate" },
];

export const ProjectsTable: React.FC<ProjectsProps> = ({projectsList})  => {
	const styles = useStyles();

	// const loanTypeBadge = (type: string) => {
	// 	if (type === "junior")
	// 		return (
	// 			<Badge appearance="tint" size="small" color="severe">
	// 				j
	// 			</Badge>
	// 		);
	// 	else if (type === "mezzanine")
	// 		return (
	// 			<Badge appearance="tint" size="small" color="warning">
	// 				m
	// 			</Badge>
	// 		);
	// 	else
	// 		return (
	// 			<Badge appearance="tint" size="small" color="brand">
	// 				s
	// 			</Badge>
	// 		);
	// };

	return (
		<Table size="small" arial-label="Projects Table">
			<TableHeader>
				<TableRow>
					{columns.map((column) => (
						<TableHeaderCell
							key={column.columnKey}
							className={styles.table_header}
						>
							{column.label}
						</TableHeaderCell>
					))}
				</TableRow>
			</TableHeader>
			<TableBody className={styles.table}>
				{projectsList.map((item) => (
					<TableRow key={item.Id}>
						<TableCell>
							<LinkRouter to={"/project/"+item.Id} className={styles.link}>
								{item.Title}
							</LinkRouter>
						</TableCell>
						<TableCell>
							{item.Amount + " "}
							{/* {loanTypeBadge(item.Amount)} */}
						</TableCell>
						<TableCell>{item.Country}</TableCell>
						<TableCell>
							{formatNumberInMillions(item.Balance)}
						</TableCell>
						<TableCell>{formatDateToDDMMYYYY(item.Maturity)}</TableCell>
						<TableCell>
							{item.Margin.toFixed(2) + "% + "}
							<Badge
								appearance="filled"
								shape="circular"
								color="informative"
								size="small"
							>
								{item.Base}
							</Badge>{" "}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
			{/* <tfoot>
      {columns.map((column) => (
						<td></td>
					))}
      </tfoot> */}
		</Table>
	);
};
