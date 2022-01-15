import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import NotificationIcon from "@material-ui/icons/NotificationsOutlined";
import MailIcon from "@material-ui/icons/MailOutline";
import BookIcon from "@material-ui/icons/BookmarkBorder";
import ListIcon from "@material-ui/icons/AssignmentOutlined";
import UserIcon from "@material-ui/icons/PersonOutlineOutlined";
import TwitterIcon from "@material-ui/icons/Twitter";
import { HomeUseStyles } from "../../pages/Home";
import { Typography, IconButton, Button } from "@mui/material";

interface SidebarBlockProps {
	classes: ReturnType<typeof HomeUseStyles>;
}

export const Sidebar: React.FC<SidebarBlockProps> = ({
	classes,
}): React.ReactElement => {
	return (
		<ul className={classes.sidebarList}>
			<li className={classes.sidebarListItem}>
				<IconButton>
					<TwitterIcon
						className={classes.sidebarListItemIcon}
						style={{ color: "#1DA1F3", fontSize: 36, margin: "10px 0" }}
					/>
				</IconButton>
			</li>
			<li className={classes.sidebarListItem}>
				<div>
					<HomeIcon className={classes.sidebarListItemIcon} />
					<Typography className={classes.sidebarListItemLabel} variant="h6">
						Home
					</Typography>
				</div>
			</li>
			<li className={classes.sidebarListItem}>
				<div>
					<SearchIcon className={classes.sidebarListItemIcon} />
					<Typography className={classes.sidebarListItemLabel} variant="h6">
						Search
					</Typography>
				</div>
			</li>
			<li className={classes.sidebarListItem}>
				<div>
					<NotificationIcon className={classes.sidebarListItemIcon} />
					<Typography className={classes.sidebarListItemLabel} variant="h6">
						Notifications
					</Typography>
				</div>
			</li>
			<li className={classes.sidebarListItem}>
				<div>
					<MailIcon className={classes.sidebarListItemIcon} />
					<Typography className={classes.sidebarListItemLabel} variant="h6">
						Messages
					</Typography>
				</div>
			</li>
			<li className={classes.sidebarListItem}>
				<div>
					<BookIcon className={classes.sidebarListItemIcon} />
					<Typography className={classes.sidebarListItemLabel} variant="h6">
						BookMarks
					</Typography>
				</div>
			</li>
			<li className={classes.sidebarListItem}>
				<div>
					<ListIcon className={classes.sidebarListItemIcon} />
					<Typography className={classes.sidebarListItemLabel} variant="h6">
						Lists
					</Typography>
				</div>
			</li>
			<li className={classes.sidebarListItem}>
				<div>
					<UserIcon className={classes.sidebarListItemIcon} />
					<Typography className={classes.sidebarListItemLabel} variant="h6">
						Profile
					</Typography>
				</div>
			</li>
			<li className={classes.sidebarListItem}>
				<Button
					variant="contained"
					className={classes.sidebarTweetButton}
					fullWidth
				>
					Tweet
				</Button>
			</li>
		</ul>
	);
};
