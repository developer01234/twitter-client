import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@mui/material/Hidden";
import { HomeUseStyles } from "../../pages/HomeTheme";
import { DialogBlock } from "../Dialog/Dialog";
import { TextArea } from "../TextArea/TextArea";
import { Link } from "react-router-dom";
// Icon
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import NotificationIcon from "@material-ui/icons/NotificationsOutlined";
import MailIcon from "@material-ui/icons/MailOutline";
import BookIcon from "@material-ui/icons/BookmarkBorder";
import ListIcon from "@material-ui/icons/AssignmentOutlined";
import UserIcon from "@material-ui/icons/PersonOutlineOutlined";
import TwitterIcon from "@material-ui/icons/Twitter";
import CreateIcon from "@mui/icons-material/Create";

interface SidebarBlockProps {
	classes: ReturnType<typeof HomeUseStyles>;
}

export const Sidebar: React.FC<SidebarBlockProps> = ({
	classes,
}): React.ReactElement => {
	const [open, setOpen] = React.useState<boolean>(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<ul className={classes.sidebarList}>
			<li className={classes.sidebarListItem}>
				<Link to="/">
					<IconButton>
						<TwitterIcon
							className={classes.sidebarListItemIcon}
							style={{ color: "#1DA1F3", fontSize: 36, margin: "10px 0" }}
						/>
					</IconButton>
				</Link>
			</li>
			<li className={classes.sidebarListItem}>
				<Link to="/home">
					<div>
						<HomeIcon className={classes.sidebarListItemIcon} />
						<Hidden smDown>
							<Typography className={classes.sidebarListItemLabel} variant="h6">
								Home
							</Typography>
						</Hidden>
					</div>
				</Link>
			</li>
			<li className={classes.sidebarListItem}>
				<Link to="/search">
					<div>
						<SearchIcon className={classes.sidebarListItemIcon} />
						<Hidden smDown>
							<Typography className={classes.sidebarListItemLabel} variant="h6">
								Search
							</Typography>
						</Hidden>
					</div>
				</Link>
			</li>
			<li className={classes.sidebarListItem}>
				<Link to="/notifications">
					<div>
						<NotificationIcon className={classes.sidebarListItemIcon} />
						<Hidden smDown>
							<Typography className={classes.sidebarListItemLabel} variant="h6">
								Notifications
							</Typography>
						</Hidden>
					</div>
				</Link>
			</li>
			<li className={classes.sidebarListItem}>
				<Link to="/messages">
					<div>
						<MailIcon className={classes.sidebarListItemIcon} />
						<Hidden smDown>
							<Typography className={classes.sidebarListItemLabel} variant="h6">
								Messages
							</Typography>
						</Hidden>
					</div>
				</Link>
			</li>
			<li className={classes.sidebarListItem}>
				<Link to="/bookmarks">
					<div>
						<BookIcon className={classes.sidebarListItemIcon} />
						<Hidden smDown>
							<Typography className={classes.sidebarListItemLabel} variant="h6">
								BookMarks
							</Typography>
						</Hidden>
					</div>
				</Link>
			</li>
			<li className={classes.sidebarListItem}>
				<Link to="/lists">
					<div>
						<ListIcon className={classes.sidebarListItemIcon} />
						<Hidden smDown>
							<Typography className={classes.sidebarListItemLabel} variant="h6">
								Lists
							</Typography>
						</Hidden>
					</div>
				</Link>
			</li>
			<li className={classes.sidebarListItem}>
				<Link to="/profile">
					<div>
						<UserIcon className={classes.sidebarListItemIcon} />
						<Hidden smDown>
							<Typography className={classes.sidebarListItemLabel} variant="h6">
								Profile
							</Typography>
						</Hidden>
					</div>
				</Link>
			</li>
			<li className={classes.sidebarListItem}>
				<Button
					onClick={handleClickOpen}
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
				<DialogBlock onClose={handleClose} open={open}>
					<div style={{ width: 550 }}>
						<TextArea maxRows={15} classes={classes} />
					</div>
				</DialogBlock>
			</li>
		</ul>
	);
};
