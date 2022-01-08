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
		width: "260%",
		height: "260%",
		color: "#1DA1F2",
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
		color: "#1DA1F2",
	},
	BlockRightField: { marginBottom: 30 },
	registerFormControl: {
		marginBottom: 30,
	},
	loginFormControl: {
		marginBottom: 30,
	},
}));

export const Register: React.FC = (): React.ReactElement => {
	const classes = RegisterUseStyles();
	const [openModel, setOpenModel] = React.useState<"Login" | "Register">();

	const handleCloseRegister = (): void => {
		setOpenModel(undefined);
	};

	const handleCloseLogin = (): void => {
		setOpenModel(undefined);
	};

	const handleClickOpenRegister = (): void => {
		setOpenModel("Register");
	};

	const handleClickOpenLogin = (): void => {
		setOpenModel("Login");
	};

	return (
		<div className={classes.wrapper}>
			<section className={classes.BlockLeft}>
				<TwitterIcon className={classes.BlockLeftBigIcon} />
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
					<br />
					<Button
						onClick={handleClickOpenRegister}
						style={{ marginBottom: 20 }}
						variant="contained"
						color="primary"
						fullWidth
					>
						Sign Up
					</Button>
					<Button
						onClick={handleClickOpenLogin}
						variant="outlined"
						color="primary"
						fullWidth
					>
						Sign In
					</Button>
					<DialogBlock
						open={openModel === "Register"}
						onClose={handleCloseRegister}
						classes={classes}
						title="Create your account"
					>
						<FormControl
							className={classes.registerFormControl}
							component="fieldset"
							fullWidth
						>
							<FormGroup aria-label="position" row>
								<TextField
									className={classes.BlockRightField}
									autoFocus
									id="name"
									label="Name"
									InputLabelProps={{
										shrink: true,
									}}
									variant="filled"
									type="text"
									fullWidth
								/>
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
									onClick={handleCloseLogin}
									variant="contained"
									color="primary"
									fullWidth
								>
									Register
								</Button>
							</FormGroup>
						</FormControl>
					</DialogBlock>
					{/* Login */}
					<DialogBlock
						open={openModel === "Login"}
						onClose={handleClickOpenLogin}
						classes={classes}
						title="Sign in to Twitter"
					>
						<FormControl
							className={classes.loginFormControl}
							component="fieldset"
							fullWidth
						>
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
									onClick={handleCloseLogin}
									variant="contained"
									color="primary"
									fullWidth
								>
									Login
								</Button>
							</FormGroup>
						</FormControl>
					</DialogBlock>
				</div>
			</section>
		</div>
	);
};
