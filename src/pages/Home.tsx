import {
	Container,
	Grid,
	Typography,
	styled,
	Paper,
	Avatar,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { makeStyles } from "@mui/styles";
import InputBase from "@mui/material/InputBase";
import TwitterIcon from "@material-ui/icons/Twitter";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import NotificationIcon from "@material-ui/icons/NotificationsOutlined";
import MailIcon from "@material-ui/icons/MailOutline";
import BookIcon from "@material-ui/icons/BookmarkBorder";
import ListIcon from "@material-ui/icons/AssignmentOutlined";
import UserIcon from "@material-ui/icons/PersonOutlineOutlined";
import StarsIcon from "@mui/icons-material/AutoAwesomeOutlined";
import CommentIcon from "@mui/icons-material/ModeCommentOutlined";
import RepostIcon from "@mui/icons-material/RepeatOutlined";
import LikeIcon from "@mui/icons-material/FavoriteBorder";
import UploadIcon from "@mui/icons-material/FileUploadOutlined";
import classNames from "classnames";

export const HomeUseStyles = makeStyles((theme) => ({
	wrapper: { height: "100vh" },
	sidebarList: { listStyle: "none", margin: 0, padding: 0 },
	sidebarListItem: { display: "flex", alignItems: "center" },
	sidebarListItemLabel: {
		fontWeight: 700,
		fontSize: 20,
		marginLeft: 15,
	},
	sidebarListItemIcon: {
		fontSize: 28,
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
		"&:hover": {
			backgroundColor: "rgb(245, 248, 250)",
		},
	},
	tweetsName: {
		color: grey[500],
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
					<ul className={classes.sidebarList}>
						<li className={classes.sidebarListItem}>
							<IconButton aria-label="delete">
								<TwitterIcon
									className={classes.sidebarListItemIcon}
									style={{ color: "#1DA1F3", fontSize: 36, margin: "10px 0" }}
								/>
							</IconButton>
						</li>
						<li className={classes.sidebarListItem}>
							<IconButton aria-label="delete">
								<HomeIcon className={classes.sidebarListItemIcon} />
							</IconButton>
							<Typography className={classes.sidebarListItemLabel} variant="h6">
								Home
							</Typography>
						</li>
						<li className={classes.sidebarListItem}>
							<IconButton aria-label="delete">
								<SearchIcon className={classes.sidebarListItemIcon} />
							</IconButton>
							<Typography className={classes.sidebarListItemLabel} variant="h6">
								Search
							</Typography>
						</li>
						<li className={classes.sidebarListItem}>
							<IconButton aria-label="delete">
								<NotificationIcon className={classes.sidebarListItemIcon} />
							</IconButton>
							<Typography className={classes.sidebarListItemLabel} variant="h6">
								Notifications
							</Typography>
						</li>
						<li className={classes.sidebarListItem}>
							<IconButton aria-label="delete">
								<MailIcon className={classes.sidebarListItemIcon} />
							</IconButton>
							<Typography className={classes.sidebarListItemLabel} variant="h6">
								Messages
							</Typography>
						</li>
						<li className={classes.sidebarListItem}>
							<IconButton aria-label="delete">
								<BookIcon className={classes.sidebarListItemIcon} />
							</IconButton>
							<Typography className={classes.sidebarListItemLabel} variant="h6">
								BookMarks
							</Typography>
						</li>
						<li className={classes.sidebarListItem}>
							<IconButton aria-label="delete">
								<ListIcon className={classes.sidebarListItemIcon} />
							</IconButton>
							<Typography className={classes.sidebarListItemLabel} variant="h6">
								Lists
							</Typography>
						</li>
						<li className={classes.sidebarListItem}>
							<IconButton aria-label="delete">
								<UserIcon className={classes.sidebarListItemIcon} />
							</IconButton>
							<Typography className={classes.sidebarListItemLabel} variant="h6">
								Profile
							</Typography>
						</li>
					</ul>
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
						<Paper
							className={classNames(classes.tweet, classes.tweetsHead)}
							variant="outlined"
						>
							<Grid container spacing={3}>
								<Grid item xs={1}>
									<Avatar
										alt="User"
										src="https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3VwZXJtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
									/>
								</Grid>
								<Grid item xs={11}>
									<Typography>
										<b>test</b>{" "}
										<span className={classes.tweetsName}>@tester</span>
									</Typography>
									<Typography variant="body1" gutterBottom>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Quas, aperiam!
									</Typography>
									<div className={classes.tweetsIcons}>
										{/* TODO: write hover */}
										<div>
											<IconButton style={{ color: "#1A91DA" }}>
												<CommentIcon style={{ fontSize: 20 }} />
											</IconButton>
											<span style={{ fontSize: 14 }}>1</span>
										</div>
										<div>
											<IconButton style={{ color: "#1A91DA" }}>
												<RepostIcon style={{ fontSize: 20 }} />
											</IconButton>
										</div>
										<div>
											<IconButton style={{ color: "#1A91DA" }}>
												<LikeIcon style={{ fontSize: 20 }} />
											</IconButton>
										</div>
										<div>
											<IconButton style={{ color: "#1A91DA" }}>
												<UploadIcon style={{ fontSize: 20 }} />
											</IconButton>
										</div>
									</div>
								</Grid>
							</Grid>
						</Paper>
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<SearchTwitter placeholder="Search Twitter" fullWidth />
				</Grid>
			</Grid>
		</Container>
	);
};
