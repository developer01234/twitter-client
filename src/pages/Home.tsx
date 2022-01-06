import { Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import TwitterIcon from "@material-ui/icons/Twitter";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import NotificationIcon from "@material-ui/icons/NotificationsOutlined";
import MailIcon from "@material-ui/icons/MailOutline";
import BookIcon from "@material-ui/icons/BookmarkBorder";
import ListIcon from "@material-ui/icons/AssignmentOutlined";
import UserIcon from "@material-ui/icons/PersonOutlineOutlined";

export const HomeUseStyles = makeStyles((theme) => ({
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
}));

export const Home = () => {
	const classes = HomeUseStyles();
	return (
		<section>
			<Grid container spacing={3}>
				<Grid item xs={1}>
					<ul className={classes.sidebarList}>
						<li className={classes.sidebarListItem}>
							<IconButton aria-label="delete">
								<TwitterIcon
									className={classes.sidebarListItemIcon}
									style={{ color: "#1DA1F3" }}
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
				<Grid item xs={7}>
					test
				</Grid>
				<Grid item xs={4}>
					test
				</Grid>
			</Grid>
		</section>
	);
};
