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
import {Link as LinkRouter} from "react-router-dom"

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

  table:{
    fontSize: "12px",

  },
  link:{
    textDecorationLine:"none",
    color: tokens.colorBrandForegroundLink
  }
});

const formatNumberInMillions = (number: number): string => {
	const million = 1000000;

	const formattedNumber = (number / million).toFixed(1);
	return `${formattedNumber}M`;
};

const items = [
	{
		ID: "1",
		projectName: "Project 1",
		loanType: "senior",
		jurisdiction: "UK",
		maxAmount: 10000000,
		maturity: "31/12/2025",
		interestRate: { margin: 4.5, base: "3M" },
	},
	{
		ID: "2",
		projectName: "Other Project",
		loanType: "junior",
		jurisdiction: "Spain",
		maxAmount: 35000000,
		maturity: "31/03/2027",
		interestRate: { margin: 4.0, base: "3M" },
	},
	{
		ID: "2",
		projectName: "Third",
		loanType: "mezzanine",
		jurisdiction: "France",
		maxAmount: 17400000,
		maturity: "13/07/2023",
		interestRate: { margin: 3.7, base: "6M" },
	},
];

const columns = [
	{ columnKey: "projectName", label: "Project Name" },
	{ columnKey: "loanType", label: "Loan Type" },
	{ columnKey: "jurisdiction", label: "Country" },
	{ columnKey: "maxAmount", label: "Loan Amount" },
	{ columnKey: "maturity", label: "Maturity" },
	{ columnKey: "interestRate", label: "Interest Rate" },
];

export const ProjectsTable = () => {
	const styles = useStyles();

	const loanTypeBadge = (type: string) => {
		if (type === "junior") return <Badge  appearance="tint" size="small" color="severe">j</Badge>;
		else if (type === "mezzanine") return <Badge  appearance="tint" size="small" color="warning">m</Badge>;
		else return <Badge appearance="tint" size="small" color="brand">s</Badge>;
	};


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
				{items.map((item) => (
					<TableRow key={item.ID}>
						<TableCell>
              <LinkRouter to="/additional/2" className={styles.link}>
								{item.projectName}
              </LinkRouter>

						</TableCell>
						<TableCell>

								{item.loanType+' '} 
                {loanTypeBadge(item.loanType)}
						</TableCell>
						<TableCell>{item.jurisdiction}</TableCell>
						<TableCell>
							{formatNumberInMillions(item.maxAmount)}
						</TableCell>
						<TableCell>{item.maturity}</TableCell>
						<TableCell>
							{item.interestRate.margin.toFixed(2) + "% + "}
							<Badge
								appearance="filled"
								shape="circular"
								color="informative"
								size="small"
							>
								{item.interestRate.base}
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
