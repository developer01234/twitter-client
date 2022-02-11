import React from "react";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import classNames from "classnames";
import { HomeUseStyles } from "../../pages/HomeTheme";
import { Link } from "react-router-dom";
// Icon
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@mui/icons-material/ModeCommentOutlined";
import RepostIcon from "@mui/icons-material/RepeatOutlined";
import LikeIcon from "@mui/icons-material/FavoriteBorder";
import UploadIcon from "@mui/icons-material/FileUploadOutlined";

interface TweetBlockProps {
	_id: string;
	text: string;
	classes: ReturnType<typeof HomeUseStyles>;
	user: {
		fullname: string;
		username: string;
		avatar: string;
	};
}

export const Tweet: React.FC<TweetBlockProps> = ({
	_id,
	text,
	user,
	classes,
}: TweetBlockProps): React.ReactElement => {
	return (
		<Link className={classes.tweetWrapper} to={`/home/tweet/${_id}`}>
			<Paper
				className={classNames(classes.tweet, classes.tweetsHead)}
				variant="outlined"
			>
				<div>
					<Avatar
						className={classes.tweetAvatar}
						alt={`User avatar ${user.fullname}`}
						src={user.avatar}
					/>
					<div>
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
					</div>
				</div>
			</Paper>
		</Link>
	);
};
