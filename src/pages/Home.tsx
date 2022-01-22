import React from "react";
import IconButton from "@material-ui/core/IconButton";
import StarsIcon from "@mui/icons-material/AutoAwesomeOutlined";
import { Tweet } from "../components/Tweet/Tweet";
import { Sidebar } from "../components/Sidebar/Sidebar";
import SearchIcon from "@material-ui/icons/Search";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { HomeUseStyles } from "./HomeTheme";
import { SearchTwitter } from "../components/Search/Search";
import { TextArea } from "../components/TextArea/TextArea";

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
						</Paper>
						<Paper>
							<div className={classes.addForm}>
								<TextArea classes={classes} />
							</div>
							<div className={classes.addFormBottomLine} />
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
