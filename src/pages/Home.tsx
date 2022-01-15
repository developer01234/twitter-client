import {
	Container,
	Grid,
	Typography,
	styled,
	Paper,
	Theme,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { makeStyles } from "@mui/styles";
import InputBase from "@mui/material/InputBase";
import IconButton from "@material-ui/core/IconButton";
import StarsIcon from "@mui/icons-material/AutoAwesomeOutlined";
import { Tweet } from "../components/Tweet/Tweet";
import { Sidebar } from "../components/Sidebar/Sidebar";

export const HomeUseStyles = makeStyles((theme: Theme) => ({
	wrapper: { height: "100vh" },
	sidebarList: { listStyle: "none", margin: 0, padding: 0, width: 230 },
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
	tweetsIcons: { display: "flex", justifyContent: "space-between", width: 450 },
	tweets: {
		padding: "10px 15px",
	},
	tweet: {
		cursor: "pointer",
		paddingTop: 15,
		paddingLeft: 20,
		"&:hover": {
			backgroundColor: "rgb(245, 248, 250)",
		},
	},
	tweetAvatar: {
		width: theme.spacing(5),
		height: theme.spacing(5),
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
}));

export const SearchTwitter = styled(InputBase)({
	input: {
		borderRadius: 30,
		backgroundColor: "#E6ECF0",
		padding: 0,
		height: "50px",
	},
});

export const Home = () => {
	const classes = HomeUseStyles();
	return (
		<Container maxWidth="lg" className={classes.wrapper}>
			<Grid container spacing={3}>
				<Grid item xs={3}>
					<Sidebar classes={classes} />
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.tweetsSide} variant="outlined">
						<Paper className={classes.tweetsHead} variant="outlined">
							<Typography variant="h6">
								Home
								<IconButton aria-label="delete">
									<StarsIcon />
								</IconButton>
							</Typography>
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
				<Grid item xs={3}>
					<SearchTwitter placeholder="Search Twitter" fullWidth />
				</Grid>
			</Grid>
		</Container>
	);
};
