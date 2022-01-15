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
import { Typography, IconButton, Button, Hidden } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";

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
					<Hidden smDown>
						<Typography className={classes.sidebarListItemLabel} variant="h6">
							Home
						</Typography>
					</Hidden>
				</div>
			</li>
			<li className={classes.sidebarListItem}>
				<div>
					<SearchIcon className={classes.sidebarListItemIcon} />
					<Hidden smDown>
						<Typography className={classes.sidebarListItemLabel} variant="h6">
							Search
						</Typography>
					</Hidden>
				</div>
			</li>
			<li className={classes.sidebarListItem}>
				<div>
					<NotificationIcon className={classes.sidebarListItemIcon} />
					<Hidden smDown>
						<Typography className={classes.sidebarListItemLabel} variant="h6">
							Notifications
						</Typography>
					</Hidden>
				</div>
			</li>
			<li className={classes.sidebarListItem}>
				<div>
					<MailIcon className={classes.sidebarListItemIcon} />
					<Hidden smDown>
						<Typography className={classes.sidebarListItemLabel} variant="h6">
							Messages
						</Typography>
					</Hidden>
				</div>
			</li>
			<li className={classes.sidebarListItem}>
				<div>
					<BookIcon className={classes.sidebarListItemIcon} />
					<Hidden smDown>
						<Typography className={classes.sidebarListItemLabel} variant="h6">
							BookMarks
						</Typography>
					</Hidden>
				</div>
			</li>
			<li className={classes.sidebarListItem}>
				<div>
					<ListIcon className={classes.sidebarListItemIcon} />
					<Hidden smDown>
						<Typography className={classes.sidebarListItemLabel} variant="h6">
							Lists
						</Typography>
					</Hidden>
				</div>
			</li>
			<li className={classes.sidebarListItem}>
				<div>
					<UserIcon className={classes.sidebarListItemIcon} />
					<Hidden smDown>
						<Typography className={classes.sidebarListItemLabel} variant="h6">
							Profile
						</Typography>
					</Hidden>
				</div>
			</li>
			<li className={classes.sidebarListItem}>
				<Button
					style={{
						boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
						borderRadius: "30px",
					}}
					variant="contained"
					className={classes.sidebarTweetButton}
					fullWidth
				>
					<Hidden smDown>Tweet</Hidden>
					<Hidden mdUp>
						<CreateIcon />
					</Hidden>
				</Button>
			</li>
		</ul>
	);
};
