// @ts-nocheck
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	typography: {
		fontFamily: [
			"system-ui",
			"-apple-system",
			"BlinkMacSystemFont",
			"Segoe UI",
			"Roboto",
			"Ubuntu",
			"Helvetica Neue",
			"sans-serif",
		],
	},
	palette: {
		primary: {
			main: "#1DA1F2",
			dark: "#1A91DA",
			contrastText: "#fff",
		},
		secondary: {
			main: "#1A91DA",
		},
		error: {
			main: "#ff1744",
		},
		background: {
			default: "#fff",
		},
		text: {
			primary: "#14171a",
		},
	},
	shadows: [],
	overrides: {
		MuiButton: {
			root: {
				borderRadius: 30,
				textTransform: "none",
				fontSize: 16,
				height: 40,
				fontWeight: 700,
			},
			textPrimary: {
				paddingLeft: 20,
				paddingRigth: 20,
			},
			outlinedPrimary: {
				borderColor: "#1DA1F2",
			},
		},
		MuiFilledInput: {
			underline: {
				"&:after": {
					borderBottomWidth: "2px",
				},
				"&:before": {
					borderColor: "#000",
					borderBottomWidth: "2px",
				},
			},
			input: {
				backgroundColor: "rgb(245, 248, 250)",
			},
		},
		MuiDialog: {
			paper: {
				borderRadius: 15,
			},
		},
		MuiDialogActions: {
			root: {
				marginBottom: 8,
			},
		},
		MuiDialogTitle: {
			root: {
				borderBottom: "1px solid #CCD6DD",
				marginBottom: 10,
				padding: "10px 15px",
				"& h2": {
					display: "flex",
					alignItems: "center",
					fontWeight: 800,
				},
				"& button": {
					padding: 8,
					marginRigth: 20,
				},
			},
		},
	},
});
