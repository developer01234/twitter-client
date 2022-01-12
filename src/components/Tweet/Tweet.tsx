import React from "react";
import { Grid, Typography, Paper, Avatar } from "@mui/material";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@mui/icons-material/ModeCommentOutlined";
import RepostIcon from "@mui/icons-material/RepeatOutlined";
import LikeIcon from "@mui/icons-material/FavoriteBorder";
import UploadIcon from "@mui/icons-material/FileUploadOutlined";
import classNames from "classnames";
import { HomeUseStyles } from "../../pages/Home";

interface TweetBlockProps {
	text: string;
	classes: ReturnType<typeof HomeUseStyles>;
	user: {
		fullname: string;
		username: string;
		avatar: string;
	};
}

export const Tweet: React.FC<TweetBlockProps> = ({
	text,
	user,
	classes,
}: TweetBlockProps): React.ReactElement => {
	return (
		<Paper
			className={classNames(classes.tweet, classes.tweetsHead)}
			variant="outlined"
		>
			<Grid container spacing={3}>
				<Grid item xs={1}>
					<Avatar
						className={classes.tweetAvatar}
						alt={`User avatar ${user.fullname}`}
						src={user.avatar}
					/>
				</Grid>
				<Grid item xs={11}>
					<Typography>
						<b>{user.fullname}</b>{" "}
						<span className={classes.tweetsName}>@{user.username}</span>&nbsp;
						<span className={classes.tweetsName}>·</span>&nbsp;
						<span className={classes.tweetsName}>1h</span>
					</Typography>
					<Typography variant="body1" gutterBottom>
						{text}
					</Typography>
					<div className={classes.tweetsIcons}>
						<div>
							<IconButton className={classes.IconButton}>
								<CommentIcon style={{ fontSize: 20 }} />
							</IconButton>
							<span style={{ fontSize: 14 }}>1</span>
						</div>
						<div>
							<IconButton className={classes.IconButton}>
								<RepostIcon style={{ fontSize: 20 }} />
							</IconButton>
						</div>
						<div>
							<IconButton className={classes.IconButton}>
								<LikeIcon style={{ fontSize: 20 }} />
							</IconButton>
						</div>
						<div>
							<IconButton className={classes.IconButton}>
								<UploadIcon style={{ fontSize: 20 }} />
							</IconButton>
						</div>
					</div>
				</Grid>
			</Grid>
		</Paper>
	);
};
