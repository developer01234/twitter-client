import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import PeopleIcon from "@material-ui/icons/PeopleOutline";
import MessageIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/CloseOutlined";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

const useStyles = makeStyles((theme) => ({
	wrapper: { display: "flex", height: "100vh" },
	BlockLeft: {
		backgroundColor: "#71C9F8",
		flex: "0 0 50%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		overflow: "hidden",
		position: "relative",
	},
	BlockLeftList: {
		listStyle: "none",
		position: "relative",
		padding: 0,
		margin: 0,
		width: 380,
		"& h6": {
			display: "flex",
			alignItems: "center",
			color: "white",
			fontWeight: 700,
			fontSize: 20,
		},
	},
	BlockLeftBigIcon: {
		position: "absolute",
		left: "50%",
		top: "53%",
		transform: "translate(-50%, -50%)",
		width: "350%",
		height: "350%",
		color: "rgb(29, 161, 243)",
	},
	BlockLeftListItem: { marginBottom: 40 },
	BlockLeftListIcon: { fontSize: 32, marginRight: 15 },
	BlockRight: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flex: "0 0 50%",
	},
	BlockRightWrapper: {
		width: 380,
	},
	BlockRightTitle: {
		fontWeight: 700,
		fontSize: 32,
		marginBottom: 60,
		marginTop: 10,
	},
	TwitterIcon: {
		fontSize: 45,
		color: "rgb(29, 161, 242)",
	},
}));

function Register() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const classes = useStyles();

	return (
		<div className={classes.wrapper}>
			<section className={classes.BlockLeft}>
				<TwitterIcon color="primary" className={classes.BlockLeftBigIcon} />
				<ul className={classes.BlockLeftList}>
					<li className={classes.BlockLeftListItem}>
						<Typography variant="h6">
							<SearchIcon className={classes.BlockLeftListIcon} />
							Read about what interests you.
						</Typography>
					</li>
					<li className={classes.BlockLeftListItem}>
						<Typography variant="h6">
							<PeopleIcon className={classes.BlockLeftListIcon} />
							Find out what the world is talking about.
						</Typography>
					</li>
					<li className={classes.BlockLeftListItem}>
						<Typography variant="h6">
							<MessageIcon className={classes.BlockLeftListIcon} />
							Join the conversation.
						</Typography>
					</li>
				</ul>
			</section>
			<section className={classes.BlockRight}>
				<div className={classes.BlockRightWrapper}>
					<TwitterIcon className={classes.TwitterIcon} />
					<Typography
						variant="h4"
						className={classes.BlockRightTitle}
						gutterBottom
					>
						Find out what's happening in the world right now
					</Typography>
					<br />
					<Typography>
						<b>Join Twitter now!</b>
					</Typography>
					<Button
						style={{ marginBottom: 20 }}
						variant="contained"
						color="primary"
						fullWidth
					>
						Sign Up
					</Button>
					<Button
						onClick={handleClickOpen}
						variant="outlined"
						color="primary"
						fullWidth
					>
						Sign In
					</Button>
					<Dialog open={open} onClose={handleClose}>
						<DialogTitle id="form-dialog-title">
							<CloseIcon
								onClick={handleClose}
								color="secondary"
								aria-label="close"
							>
								<CloseIcon style={{ fontSize: 26 }} />
							</CloseIcon>
							Setting search
						</DialogTitle>
						<DialogContent>testing...</DialogContent>
					</Dialog>
				</div>
			</section>
		</div>
	);
}

export default Register;
