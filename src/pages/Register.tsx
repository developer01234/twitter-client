import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@mui/material/Button';

const useStyles = makeStyles(theme => ({
	wrapper: { display: 'flex', height: '100vh' },
	BlockLeft: { backgroundColor: '#1DA1F2', flex: '0 0 50%' },
	BlockRight: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flex: '0 0 50%',
	},
	BlockRightWrapper: { width: 380 },
	TwitterIcon: {
		fontSize: 80,
		color: 'rgb(29, 161, 242)',
	},
}));

function Register() {
	const classes = useStyles();

	return (
		<div className={classes.wrapper}>
			<section className={classes.BlockLeft}>
				<ul>
					<li>
						<Typography>Read about what interests you.</Typography>
					</li>
					<li>
						<Typography>Find out what the world is talking about.</Typography>
					</li>
					<li>
						<Typography>Join the conversation.</Typography>
					</li>
				</ul>
			</section>
			<section className={classes.BlockRight}>
				<div>
					<TwitterIcon className={classes.TwitterIcon} />
					<Typography variant='h4' className={classes.BlockRightWrapper}>
						Find out what's happening in the world right now
					</Typography>
					<Typography>Join Twitter now!</Typography>
					<Button variant='contained' color='primary' fullWidth>
						Sign Up
					</Button>
					<Button variant='outlined' color='primary' fullWidth>
						Sign In
					</Button>
				</div>
			</section>
		</div>
	);
}

export default Register;
