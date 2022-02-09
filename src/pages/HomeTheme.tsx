import grey from "@mui/material/colors/grey";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const HomeUseStyles = makeStyles((theme: Theme) => ({
	wrapper: { height: "100vh" },
	sidebarList: {
		position: "sticky",
		top: 0,
		listStyle: "none",
		margin: 0,
		padding: 0,
		maxWidth: 230,
	},
	sidebarListItem: {
		cursor: "pointer",
		"&:hover": {
			"& div": {
				backgroundColor: "rgba(29, 161, 242, 0.1)",
				"& h6": { color: "#1DA1F2" },
				"& svg path": { fill: "#1DA1F2" },
			},
		},
		"& div": {
			display: "inline-flex",
			alignItems: "center",
			position: "relative",
			padding: "0 25px 0 20px",
			borderRadius: 30,
			height: 50,
			marginBottom: 15,
			transition: "background-color 0.1s ease-in-out",
		},
	},
	sidebarListItemLabel: {
		fontWeight: 700,
		fontSize: 20,
		marginLeft: 15,
	},
	sidebarListItemIcon: {
		fontSize: 32,
		marginLeft: -5,
	},
	tweetsSide: {
		borderRadius: 0,
		height: "100%",
		borderTop: "0",
		borderBottom: "0",
	},
	tweetsHead: {
		borderRadius: 0,
		borderTop: "0",
		borderLeft: "0",
		borderRight: "0",
		padding: "10px 15px",
		"& h6": {
			fontWeight: 600,
		},
	},
	tweetsIcons: {
		display: "flex",
		position: "relative",
		left: -13,
		justifyContent: "space-between",
		maxWidth: 450,
	},
	tweets: {
		padding: "10px 15px",
	},
	tweet: {
		display: "flex",
		cursor: "pointer",
		paddingTop: 15,
		paddingLeft: 20,
		"&:hover": {
			backgroundColor: "rgb(245, 248, 250)",
		},
	},
	tweetAvatar: {
		width: theme.spacing(6.5),
		height: theme.spacing(6.5),
		marginRight: 15,
	},
	tweetsName: {
		color: grey[500],
	},
	IconButton: {
		"&:hover": {
			color: "#1A91DA",
		},
	},
	sidebarTweetButton: {
		padding: "30px",
		marginTop: "50px",
	},
	addForm: { padding: 20 },
	addFormBody: {
		display: "flex",
		width: "100%",
	},
	addFormTextarea: {
		width: "100%",
		border: 0,
		fontSize: 20,
		outline: "none",
		fontFamily: "inherit",
		resize: "none",
	},
	addFormBottom: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	addFormBottomActions: {
		marginTop: 10,
		paddingLeft: 70,
	},
	addFormBottomLine: {
		height: 12,
		backgroundColor: "#E6ECF0",
	},
	addFormCircleProgress: {
		position: "relative",
		width: 20,
		height: 20,
		margin: "0 10px",
		"& .MuiCircularProgress-root": {
			position: "absolute",
		},
	},
	addFormBottomRigth: {
		display: "flex",
		alignItems: "center",
	},
	rightSide: { paddingTop: 20, position: "sticky", top: 0 },
	rightSideBlock: {
		backgroundColor: "#f5f8fa",
		borderRadius: 15,
		marginTop: 20,
		"& .MuiList-root": { paddingTop: 0 },
	},
	rightSideBlockHeader: {
		borderTop: 0,
		borderLeft: 0,
		borderRight: 0,
		backgroundColor: "transparent",
		padding: "15px 18px",
		"& b": { fontSize: 20, fontWeight: 800 },
	},
	rightSideBlockItem: {
		cursor: "pointer",
		"& .MuiTypography-body1": {
			fontWeight: 700,
		},
		"& .MuiListItemAvatar-root": {
			minWidth: 60,
		},
		"& .MuiListItemText-root": {
			margin: 0,
		},
		"&:hover": { backgroundColor: "#edf3f6" },
		"& a": { color: "inherit", textDecoration: "none" },
	},
	tweetsCenter: { textAlign: "center", marginTop: 50 },
}));
