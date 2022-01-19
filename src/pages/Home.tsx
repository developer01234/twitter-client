import { grey } from "@mui/material/colors";
import React from "react";
import { makeStyles } from "@mui/styles";
import IconButton from "@material-ui/core/IconButton";
import StarsIcon from "@mui/icons-material/AutoAwesomeOutlined";
import { Tweet } from "../components/Tweet/Tweet";
import { Sidebar } from "../components/Sidebar/Sidebar";
import SearchIcon from "@material-ui/icons/Search";
import { TextArea } from "../components/TextArea/TextArea";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { styled, Theme } from "@mui/material/styles";

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
	addForm: {
		padding: 20,
	},
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
	},
}));

const SearchTwitter = styled(TextField)({
	input: {
		backgroundColor: "#E6ECF0",
		padding: 0,
		paddingLeft: 15,
		"&.Mui-focused": {
			backgroundColor: "#fff",
			"& fieldset": { borderWidth: 1, borderColor: "#1DA1F2" },
			"& svg path": { fill: "#1DA1F2" },
		},
	},
	"&:hover": {
		"& fieldset": { borderColor: "transparent" },
	},
	"& fieldset": {
		borderWidth: 1,
		borderColor: "#1DA1F2",
	},
	"& .MuiOutlinedInput-input": { padding: "12px 14px 14px 5px" },
});

export const Home = (): React.ReactElement => {
	const classes = HomeUseStyles();
	return (
		<Container maxWidth="lg" className={classes.wrapper}>
			<Grid container spacing={3}>
				<Grid sm={1} md={3} item>
					<Sidebar classes={classes} />
				</Grid>
				<Grid sm={8} md={6} item>
					<Paper className={classes.tweetsSide} variant="outlined">
						<Paper className={classes.tweetsHead} variant="outlined">
							<Typography variant="h6">
								Home
								<IconButton aria-label="delete">
									<StarsIcon />
								</IconButton>
							</Typography>
							<TextArea classes={classes} />
						</Paper>
						{[
							...new Array(20).fill(
								<Tweet
									user={{
										fullname: "test",
										username: "tester",
										avatar:
											"https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3VwZXJtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
									}}
									classes={classes}
									text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, voluptatum."
								/>
							),
						]}
					</Paper>
				</Grid>
				<Grid sm={3} md={3} item>
					<div className={classes.rightSide}>
						<SearchTwitter
							variant="outlined"
							placeholder="Search Twitter"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<SearchIcon />
									</InputAdornment>
								),
							}}
							fullWidth
						/>
						<Paper className={classes.rightSideBlock}>
							<Paper className={classes.rightSideBlockHeader}>
								<b>Trends for you</b>
							</Paper>
							<List>
								<ListItem className={classes.rightSideBlockItem}>
									<ListItemText
										primary="Russia"
										secondary={
											<Typography component="span" variant="body2">
												tweets: 400 000
											</Typography>
										}
									/>
								</ListItem>
								<Divider component="li" />
								<ListItem className={classes.rightSideBlockItem}>
									<ListItemText
										primary="#Covid19"
										secondary={
											<Typography component="span" variant="body2">
												tweets: 500 000
											</Typography>
										}
									/>
								</ListItem>
								<Divider component="li" />
								<ListItem className={classes.rightSideBlockItem}>
									<ListItemText
										primary="#SARS-CoV-2"
										secondary={
											<Typography component="span" variant="body2">
												tweets: 500 000
											</Typography>
										}
									/>
								</ListItem>
								<Divider component="li" />
							</List>
						</Paper>
						<Paper className={classes.rightSideBlock}>
							<Paper className={classes.rightSideBlockHeader}>
								<b>Who to follow</b>
							</Paper>
							<List>
								<ListItem className={classes.rightSideBlockItem}>
									<ListItemAvatar>
										<Avatar
											alt="@tester"
											src="https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3VwZXJtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
										/>
										<b
											style={{
												display: "flex",
												position: "relative",
												top: -45,
												paddingLeft: 50,
											}}
										>
											Tester
										</b>
										<span
											style={{
												display: "flex",
												position: "relative",
												top: -50,
												paddingLeft: 50,
												color: "#9e9e9e",
											}}
										>
											@tester
										</span>
									</ListItemAvatar>
								</ListItem>
							</List>
						</Paper>
					</div>
				</Grid>
			</Grid>
		</Container>
	);
};
