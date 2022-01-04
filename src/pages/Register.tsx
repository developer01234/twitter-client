import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import PeopleIcon from "@material-ui/icons/PeopleOutline";
import MessageIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import Button from "@mui/material/Button";
import { DialogBlock } from "../components/Dialog/Dialog";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";

export const RegisterUseStyles = makeStyles((theme) => ({
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
	BlockRightField: { marginBottom: 18 },
}));

function Register() {
	const classes = RegisterUseStyles();
	const [openRegister, setOpenRegister] = React.useState(false);

	const handleClose = () => {
		setOpenRegister(false);
	};

	const handleClickOpen = () => {
		setOpenRegister(true);
	};

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
					<DialogBlock
						open={openRegister}
						onClose={handleClose}
						classes={classes}
						title="Login to Twitter"
					>
						<FormControl component="fieldset" fullWidth>
							<FormGroup aria-label="position" row>
								<TextField
									className={classes.BlockRightField}
									autoFocus
									id="email"
									label="Email Address"
									InputLabelProps={{
										shrink: true,
									}}
									variant="filled"
									type="email"
									fullWidth
								/>
								<TextField
									className={classes.BlockRightField}
									autoFocus
									id="password"
									label="Password"
									InputLabelProps={{
										shrink: true,
									}}
									variant="filled"
									type="password"
									fullWidth
								/>
								<Button
									onClick={handleClose}
									variant="contained"
									color="primary"
									fullWidth
								>
									Login
								</Button>
								<br />
								<br />
								<br />
							</FormGroup>
						</FormControl>
					</DialogBlock>
				</div>
			</section>
		</div>
	);
}

export default Register;
